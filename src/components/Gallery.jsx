import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── CONFIG ─────────────────────────────────────────────────────
const STORAGE_KEY   = 'fismun26_gallery_photos_v1'
const MAX_PHOTOS     = 60          // cap so browser storage never overflows
const MAX_DIMENSION  = 1920        // longest edge, px — keeps files light
const JPEG_QUALITY   = 0.82

// ─── HELPERS ────────────────────────────────────────────────────
// Reads a File, downsizes it on an off-DOM canvas, returns a compact base64 JPEG.
// Everything happens in the visitor's own browser — no server, no upload endpoint.
function fileToCompressedDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('read-failed'))
    reader.onload = (e) => {
      const img = new Image()
      img.onerror = () => reject(new Error('decode-failed'))
      img.onload = () => {
        let { width, height } = img
        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          if (width > height) { height = Math.round(height * (MAX_DIMENSION / width)); width = MAX_DIMENSION }
          else { width = Math.round(width * (MAX_DIMENSION / height)); height = MAX_DIMENSION }
        }
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', JPEG_QUALITY))
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

function loadStoredPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function persistPhotos(photos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos))
    return null
  } catch {
    return "Your browser's storage is full — remove a few photos to add more."
  }
}

// ─── LIGHTBOX ───────────────────────────────────────────────────
function GalleryLightbox({ photo, hasPrev, hasNext, onClose, onPrev, onNext, onDelete }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <motion.div
      className="gl-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="gl-panel"
        initial={{ opacity: 0, scale: 0.92, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        transition={{ type: 'spring', stiffness: 340, damping: 32, mass: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="gl-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="gl-img-wrap">
          <img src={photo.src} alt={photo.name || 'Gallery photo'} className="gl-img" />

          {hasPrev && (
            <button className="gl-nav gl-nav-prev" onClick={onPrev} aria-label="Previous photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          )}
          {hasNext && (
            <button className="gl-nav gl-nav-next" onClick={onNext} aria-label="Next photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          )}
        </div>

        <div className="gl-footer">
          <span className="gl-caption">{photo.name || 'Untitled photo'}</span>
          <button className="gl-delete" onClick={onDelete}>Remove Photo</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── GALLERY ────────────────────────────────────────────────────
export default function Gallery() {
  const [photos, setPhotos]     = useState([])
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [warning, setWarning]   = useState(null)
  const [lbIndex, setLbIndex]   = useState(null)
  const inputRef = useRef(null)

  useEffect(() => { setPhotos(loadStoredPhotos()) }, [])

  const commit = useCallback((next) => {
    setPhotos(next)
    setWarning(persistPhotos(next))
  }, [])

  const handleFiles = useCallback(async (fileList) => {
    const incoming = Array.from(fileList || []).filter(f => f.type.startsWith('image/'))
    if (!incoming.length) return

    setPhotos((current) => {
      if (current.length >= MAX_PHOTOS) {
        setWarning(`You've hit the ${MAX_PHOTOS}-photo limit on this device — remove a few to add more.`)
        return current
      }
      return current
    })

    setUploading(true)
    const room = Math.max(0, MAX_PHOTOS - photos.length)
    const toProcess = incoming.slice(0, room)

    const results = []
    for (const file of toProcess) {
      try {
        const src = await fileToCompressedDataURL(file)
        results.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          src,
          name: file.name,
          addedAt: Date.now(),
        })
      } catch {
        // skip files that fail to decode, keep going
      }
    }

    setUploading(false)
    if (!results.length) return

    setPhotos((current) => {
      const next = [...results, ...current]
      setWarning(persistPhotos(next))
      return next
    })
  }, [photos.length])

  const onInputChange = (e) => {
    handleFiles(e.target.files)
    e.target.value = '' // allow re-selecting the same file
  }

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer.files)
  }
  const onDragOver = (e) => { e.preventDefault(); setDragging(true) }
  const onDragLeave = () => setDragging(false)

  const removePhoto = (id) => {
    commit(photos.filter(p => p.id !== id))
  }

  const clearAll = () => {
    if (photos.length && !window.confirm('Remove all photos from this device? This can\'t be undone.')) return
    commit([])
  }

  const closeLightbox = () => setLbIndex(null)
  const prevPhoto = () => setLbIndex(i => (i > 0 ? i - 1 : i))
  const nextPhoto = () => setLbIndex(i => (i < photos.length - 1 ? i + 1 : i))
  const deleteFromLightbox = () => {
    const p = photos[lbIndex]
    if (!p) return
    const next = photos.filter(x => x.id !== p.id)
    commit(next)
    if (!next.length) setLbIndex(null)
    else setLbIndex(i => Math.min(i, next.length - 1))
  }

  return (
    <>
      <section id="gallery" className="gallery section">
        <div className="gallery-orbs" aria-hidden="true">
          <div className="orb orb-2" style={{ opacity: 0.5 }} />
          <div className="orb orb-4" style={{ opacity: 0.4 }} />
        </div>

        <div className="gallery-inner">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="section-title">GALLERY</h2>
          </motion.div>

          <motion.p
            className="gallery-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Moments from FISMUN — add your own. Photos you upload are saved privately in your browser
            on this device, instantly, with no server or sign-in involved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`gallery-dropzone${dragging ? ' dragging' : ''}${uploading ? ' busy' : ''}`}
              onClick={() => inputRef.current?.click()}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click() }}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={onInputChange}
              />
              <svg className="gallery-dropzone-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <div className="gallery-dropzone-title">{uploading ? 'Adding photos…' : 'Add Photos'}</div>
              <div className="gallery-dropzone-sub">Click to browse, or drag &amp; drop images here</div>
            </div>
          </motion.div>

          {warning && (
            <motion.div className="gallery-warning" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {warning}
            </motion.div>
          )}

          {photos.length > 0 && (
            <motion.div
              className="gallery-meta-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="gallery-count">{photos.length} photo{photos.length === 1 ? '' : 's'} on this device</span>
              <button className="gallery-clear-btn" onClick={clearAll}>Clear All</button>
            </motion.div>
          )}

          {photos.length > 0 ? (
            <motion.div
              className="gallery-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } } }}
            >
              {photos.map((p, i) => (
                <motion.div
                  key={p.id}
                  className="gallery-item"
                  variants={{
                    hidden: { opacity: 0, y: 26, scale: 0.94 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 24 }}
                  onClick={() => setLbIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter') setLbIndex(i) }}
                >
                  <img src={p.src} alt={p.name || 'Gallery photo'} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-view">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                      View
                    </span>
                    <button
                      className="gallery-item-remove"
                      onClick={(e) => { e.stopPropagation(); removePhoto(p.id) }}
                      aria-label="Remove photo"
                    >
                      <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                        <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="gallery-empty"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <span className="gallery-empty-icon">📷</span>
              <p>No photos yet — be the first to add one!</p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lbIndex !== null && photos[lbIndex] && (
          <GalleryLightbox
            photo={photos[lbIndex]}
            hasPrev={lbIndex > 0}
            hasNext={lbIndex < photos.length - 1}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
            onDelete={deleteFromLightbox}
          />
        )}
      </AnimatePresence>
    </>
  )
}
