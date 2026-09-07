import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GALLERY_IMAGES = [
  { id: 1, title: 'FISMUN Opening Ceremony', category: 'Events' },
  { id: 2, title: 'Delegate Networking', category: 'Events' },
  { id: 3, title: 'Committee Sessions', category: 'Sessions' },
  { id: 4, title: 'Closing Debate', category: 'Sessions' },
  { id: 5, title: 'Award Ceremony', category: 'Events' },
  { id: 6, title: 'Delegate Group Photo', category: 'Gallery' },
]

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', ...new Set(GALLERY_IMAGES.map(img => img.category))]
  const filtered = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter)

  return (
    <section id="gallery" className="gallery section page-section">
      <div className="gallery-inner">
        <FadeUp>
          <h2 className="section-title">Gallery</h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: filter === cat ? '1px solid var(--blue)' : '1px solid var(--cream-12)',
                  background: filter === cat ? 'rgba(74, 143, 226, 0.15)' : 'transparent',
                  color: 'var(--cream)',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeUp>
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatePresence mode="wait">
            {filtered.map(image => (
              <motion.div
                key={image.id}
                layoutId={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{
                  aspectRatio: '1',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(74, 143, 226, 0.2), rgba(74, 143, 226, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(74, 143, 226, 0.1)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>📷</div>
                  <div style={{ fontSize: '14px', color: 'var(--cream)', fontWeight: '600' }}>{image.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
