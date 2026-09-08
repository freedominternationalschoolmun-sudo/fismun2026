import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate, useSpring } from 'framer-motion'

// Detect touch-only devices — disable 3D tilt on mobile
const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export default function CommitteeCard({ committee, index, onClick }) {
  const cardRef = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  // Spring physics — smooth tilt
  const sx = useSpring(mx, { stiffness: 260, damping: 26, mass: 0.55 })
  const sy = useSpring(my, { stiffness: 260, damping: 26, mass: 0.55 })

  // 3D rotation (±14°)
  const rotX = useTransform(sy, [-0.5, 0.5], [14, -14])
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14])

  // Cursor-tracking radial glow inside card
  const glowL  = useTransform(sx, [-0.5, 0.5], ['8%',  '92%'])
  const glowT  = useTransform(sy, [-0.5, 0.5], ['8%',  '92%'])
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowL} ${glowT}, rgba(74,143,226,0.42) 0%, transparent 60%)`

  // Specular highlight — moves opposite to glow (simulates surface light)
  const specL  = useTransform(sx, [-0.5, 0.5], ['88%', '12%'])
  const specT  = useTransform(sy, [-0.5, 0.5], ['88%', '12%'])
  const specBg = useMotionTemplate`radial-gradient(circle at ${specL} ${specT}, rgba(255,255,255,0.08) 0%, transparent 44%)`

  const onMove = useCallback((e) => {
    if (isTouch) return
    const r = cardRef.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width  - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }, [mx, my])

  const onLeave = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])

  const tiltStyle = isTouch
    ? { cursor: 'pointer' }
    : { rotateX: rotX, rotateY: rotY, transformPerspective: 1100, cursor: 'pointer' }

  return (
    <motion.article
      ref={cardRef}
      className="c-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick?.() }}
      variants={{
        hidden:  { opacity: 0, y: 50, scale: 0.88, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0,  scale: 1.00, filter: 'blur(0px)',
          transition: { duration: 0.70, ease: [0.22, 1, 0.36, 1] }
        },
      }}
      style={tiltStyle}
      whileHover={isTouch ? {} : {
        scale: 1.03,
        transition: { type: 'spring', stiffness: 360, damping: 20 }
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Cursor glow — only rendered on desktop */}
      {!isTouch && (
        <>
          <motion.div className="c-glow" style={{ background: glowBg }} />
          <motion.div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            borderRadius: 20, pointerEvents: 'none',
            background: specBg,
          }} />
        </>
      )}

      {/* Index watermark */}
      <div className="c-watermark">{String(index + 1).padStart(2, '0')}</div>

      {/* Content — translateZ pops content above glass surface (desktop only) */}
      <div
        className="c-body"
        style={isTouch ? {} : { transform: 'translateZ(22px)', transformStyle: 'preserve-3d' }}
      >
        <div className="c-abbr">{committee.abbr}</div>
        <div className="c-full">{committee.fullName}</div>
        <div className="c-divider" />

        {committee.board?.length > 0 && (
          <>
            <div className="c-section-lbl">Executive Board</div>
            <div className="c-chips">
              {committee.board.map(m => (
                <span key={m.name} className="c-chip">{m.name}</span>
              ))}
            </div>
          </>
        )}

        {committee.agenda && (
          <>
            <div className="c-section-lbl" style={{ marginTop: 12 }}>Agenda</div>
            <p className="c-agenda-txt">{committee.agenda}</p>
          </>
        )}

        <div className="c-learn-more">Learn More →</div>
      </div>
    </motion.article>
  )
}
