import { motion } from 'framer-motion'

export default function CommitteeCard({ committee, index, onClick }) {
  return (
    <motion.div
      className="c-card"
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
    >
      <div className="c-watermark">{index + 1}</div>
      <div className="c-body">
        <div className="c-abbr">{committee.abbr}</div>
        <div className="c-full">{committee.fullName}</div>
        <div className="c-divider" />
        <div className="c-section-lbl">Agenda</div>
        <p style={{ fontSize: 'clamp(8px, 0.9vw, 10px)', color: 'var(--cream-60)', lineHeight: 1.6 }}>
          {committee.agenda?.slice(0, 80)}...
        </p>
      </div>
    </motion.div>
  )
}
