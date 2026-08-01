import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence, animate, useInView } from 'framer-motion'
import CommitteeCard from './components/CommitteeCard'
import Globe from './components/Globe'

// ─── EVENT DATE: June 26 2026 ─────────────────────────────────
const CONF_DATE = '2026-06-26T09:00:00'

// ─── DATA ─────────────────────────────────────────────────────
const COMMITTEES = [
  {
    abbr: 'UNSC', fullName: 'United Nations Security Council',
    board: [
      { role: 'Co-Chairperson', name: 'Krishna Iyer' },
      { role: 'Co-Chairperson', name: 'Alby Mathew' },
      { role: 'Moderator', name: 'Aarnav Tejaswi' },
    ], agenda: 'The Situation in the Middle East',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1BBbh_c_bz5fdg4kCLbSQpqclGvehHk48mSb3-tn6FZo/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1V8554sl96Uti6qhF0U9Wd0i_a8QxwG1y/view?usp=sharing',
    description: 'The United Nations Security Council is the principal organ of the UN system charged with the maintenance of international peace and security. At FISMUN\'26, delegates will deliberate on one of the world\'s most volatile geopolitical flashpoints: the situation in the Middle East. Navigating competing alliances, ongoing humanitarian catastrophes, and the ever present weight of the veto, delegates must balance national interests against the collective responsibility to protect civilians and restore lasting stability to a region in crisis.',
  },
  {
    abbr: 'UNHRC', fullName: 'United Nations Human Rights Council',
    board: [
      { role: 'Co-Chairperson', name: 'Kaushiik Nair' },
      { role: 'Co-Chairperson', name: 'Avaneesh Reddy' },
      { role: 'Vice Chairperson', name: 'Puneet' },
    ], agenda: 'Rights of the "Invisible": Addressing Statelessness and Nationality Deprivation in the Levant and Gulf Regions',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1uAIaSWtmOxjqNI4ewR86uWtnKJkIXSyH/edit?usp=sharing&ouid=113444922102722481608&rtpof=true&sd=true',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1L2D_B-et7eDx3yAjGSyKNYNrPyC8kxwd/view?usp=sharing',
    description: 'The United Nations Human Rights Council is the foremost intergovernmental forum dedicated to the protection and promotion of human rights across the globe. At FISMUN\'26, delegates will confront the deeply entrenched crisis of statelessness and nationality deprivation affecting millions across the Levant and Gulf regions. By examining the lives of those rendered legally invisible, delegates will craft binding frameworks to restore legal identity, dignity, and belonging to the world\'s most overlooked populations.',
  },
  {
    abbr: 'AIPPM', fullName: 'All India Political Parties Meet',
    board: [
      { role: 'Co-Chairperson', name: 'Aarav Motreja' },
      { role: 'Co-Chairperson', name: 'Anirudh R' },
      { role: 'Vice Chairperson', name: 'Parth Bakshi' },
    ], agenda: 'Deliberating upon the standard of bail as set in the Unlawful Activities (Prevention) Act with special reference to cases of national importance',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/12EO76ejp0NbkWgUugQB4aiqwLMj01DcI5wJuMj6mPDI/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1nZznoINkS4C8FZAiprIkNEdZ7XxEmWFV/view?usp=sharing',
    description: 'The All India Political Parties Meet brings together representatives of India\'s diverse political spectrum to debate matters of pressing national concern. At FISMUN\'26, delegates will grapple with one of the most contested provisions in Indian law: the standard of bail under the Unlawful Activities (Prevention) Act in cases of national importance. With fundamental rights on one side and national security imperatives on the other, delegates must find a principled resolution to one of India\'s most consequential legal debates.',
  },
  {
    abbr: 'CCC', fullName: 'Continuous Crisis Committee',
    board: [
      { role: 'Co-Chairperson', name: 'Kaustubh Krishna' },
      { role: 'Co-Chairperson', name: 'Shreyas DB' },
      { role: 'Vice Chairperson', name: 'Nathan Daniel' },
    ], agenda: 'The Soviet-Afghan War, 1979\nFreeze date - 12th December, 1979',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1kPKRQUJ_CLttQ5ALfqRzKIwdyR85k5dsro39ncvDz5A/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1cqYzNZZ3gH1Zg0-p42moKHGaoda9cA2l/view?usp=sharing',
    description: 'The Continuous Crisis Committee places delegates at the centre of a rapidly unfolding geopolitical emergency where the situation evolves in real time. Frozen on 12th December 1979, delegates will navigate the opening days of the Soviet intervention in Afghanistan, a crisis that would reshape global power dynamics for an entire generation. With incomplete intelligence, shifting loyalties, and mounting pressure from every direction, every decision made in committee carries consequences that reverberate through history.',
  },
  {
    abbr: 'DISEC', fullName: 'Disarmament and Security Council',
    board: [
      { role: 'Co-Chairperson', name: 'Aabid Maldar' },
      { role: 'Co-Chairperson', name: 'Ritobrata Sarkar' },
      { role: 'Vice Chairperson', name: 'Dhruv Kulkarni' },
    ], agenda: 'Addressing Gaps in the Regulation of Bio-Digital Weapons Systems',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1i_z2d5TuV_3NI_bocjcrARrrtOR0MZK6OK8vsPDusFg/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1CYBKjX0wh9mgdRdRhyUKsPuC5-NYw2PU/view?usp=sharing',
    description: 'The Disarmament and International Security Committee confronts one of the most alarming frontiers in modern warfare: the unregulated development of biodigital weapons systems. Delegates will examine critical gaps in existing international law that leave the world exposed to weapons capable of targeting individuals, populations, and critical infrastructure through the convergence of biological and digital vectors. By drafting comprehensive regulatory frameworks, delegates will work to close these loopholes before such weapons shift from theoretical possibility to catastrophic reality.',
  },
  {
    abbr: 'UNICEF', fullName: "United Nations Children's Fund (Junior)",
    board: [
      { role: 'Co-Chairperson', name: 'Aara Shivani' },
      { role: 'Co-Chairperson', name: 'Srishti Singh' },
      { role: 'Moderator', name: 'Rohan' },
    ], agenda: 'Assessing the Impact of Escalating Tensions between the United States and Iran on the safety, well being, and rights of children',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1sRJ9qFnx_4l2e2kK3sY_s0gEqcvIf7PEkhzfMMiFkQc/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1ZUF9BIQ9geKRyQQSFT1WjbBkdu2exKMH/view?usp=sharing',
    description: "The United Nations Children's Fund stands as the world's foremost advocate for the rights and well being of children across every nation and territory. At FISMUN'26, delegates will assess the profound humanitarian impact of escalating geopolitical tensions between the United States and Iran on children caught in the crossfire. From access to education and healthcare to physical safety and psychological welfare, delegates will craft urgent policy responses to protect the most vulnerable in an increasingly volatile region.",
  },
  {
    abbr: 'WHO', fullName: 'World Health Organization (Junior)',
    board: [
      { role: 'Co-Chairperson', name: 'Jerome Noble' },
      { role: 'Co-Chairperson', name: 'Aaryan Patil' },
      { role: 'Moderator', name: 'Arjun' },
    ], agenda: 'Guaranteeing fair access to vaccines and essential health services in low-income nations and areas affected by conflict.',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1BeTTxCSP9vc8Vhae48kxBu_pXiS_pYiJJmvUButUtyo/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1lSI_as5mzpCRlNBhz8cawgg3aex7dz0J/view?usp=sharing',
    description: 'The World Health Organization coordinates the global response to health emergencies and sets the international standards that shape healthcare for populations everywhere. At FISMUN\'26, delegates will confront the stark inequities preventing billions of people in lower income nations and conflict affected regions from accessing vaccines and essential health services. Delegates will design binding international commitments and sustainable funding mechanisms to transform the promise of universal health coverage into a lived reality for every person on the planet.',
  },
  {
    abbr: 'UNCSW', fullName: 'United Nations Commission on the Status of Women',
    board: [
      { role: 'Head Chairperson', name: 'Atul Tharian' },
      { role: 'Vice Chairperson', name: 'Muskaan Malik' },
      { role: 'Moderator', name: 'Kenrick Roy' },
    ], agenda: "Deliberating the Legitimacy of Abortion Restrictions in Light of International Human Rights Standards on Women’s Rights and Bodily Autonomy",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1R1dOh4NuP18N3pdgXMGq7klj52nu6eVD9KruGg5Dw5Q/edit?usp=sharing",
    backgroundGuideUrl: "https://drive.google.com/file/d/1u7LfhtmP2BWeCwzb_GUAD4MHnO5x3YDc/view?usp=sharing",
    description: "The United Nations Commission on the Status of Women is the leading global body dedicated to advancing gender equality and the empowerment of women. Delegates at FISMUN’26 will engage with one of the most contested questions at the intersection of law, ethics, and human rights: whether restrictions on abortion can be legitimised under international human rights standards governing women’s rights and bodily autonomy. Through rigorous debate and careful deliberation, delegates will interrogate the obligations that states owe to women and examine the limits of legislative authority over the human body.",
  },
  {
    abbr: 'HCC', fullName: 'Historical Crisis Committee',
    board: [
      { role: 'Chairperson', name: 'Shubh Bansal' },
      { role: 'vice-Chairperson', name: 'Sai Juhith' },
      { role: 'Moderator', name: 'Teesha' },
    ], agenda: 'Indonesian Mass Killings, 30th September 1965',
    matrixUrl: 'https://docs.google.com/spreadsheets/d/1bpvYL1560qp4yZFANgrfMPa4HZmC4Qtp2jjtloHOmDc/edit?usp=sharing',
    backgroundGuideUrl: 'https://drive.google.com/file/d/1ft8Ob-xLkoQPY2RFAu7PQvAMUAnV0oeb/view?usp=drivesdk',
    description: "The Historical Crisis Committee immerses delegates in a pivotal and deeply troubling chapter of the twentieth century. Frozen at 30th September 1965, delegates will assume the roles of decision makers operating under extreme pressure, incomplete information, and conflicting loyalties as the Indonesian mass killings begin to unfold. The committee challenges participants to navigate Cold War geopolitics, military authority, and the politics of anticommunism as they confront a crisis that claimed hundreds of thousands of lives and reshaped an entire nation.",
  },
]

const STATS = [
  { target: 4,   suffix: 'th', label: 'Edition'            },
  { target: 9,   suffix: '',   label: 'Committees'         },
  { target: 350, suffix: '+',  label: 'Expected Delegates' },
  { target: 3,   suffix: '',   label: 'Days of Debate'     },
]


// ─── LOGO WATERMARK (background ghost) ────────────────────────
function LogoWatermark({ dim = false, size = 'min(560px, 84vw)' }) {
  return (
    <div className={`logo-wm${dim ? ' logo-wm-dim' : ''}`} style={{ '--lw': size }}>
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="logo-wm-img" />
      <div className="logo-wm-scanlines" />
      <div className="logo-wm-glow" />
    </div>
  )
}

// ─── FADE UP WRAPPER ──────────────────────────────────────────
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

// ─── CURSOR ───────────────────────────────────────────────────
function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos  = useRef({ x: 0, y: 0 })
  const lerp = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', onMove)
    let raf
    const track = () => {
      lerp.current.x += (pos.current.x - lerp.current.x) * 0.14
      lerp.current.y += (pos.current.y - lerp.current.y) * 0.14
      if (ringRef.current) { ringRef.current.style.left = lerp.current.x + 'px'; ringRef.current.style.top = lerp.current.y + 'px' }
      raf = requestAnimationFrame(track)
    }
    track()
    const t = setTimeout(() => {
      document.querySelectorAll('a, button, .c-card').forEach(el => {
        el.addEventListener('mouseenter', () => { dotRef.current?.classList.add('hovered'); ringRef.current?.classList.add('hovered') })
        el.addEventListener('mouseleave', () => { dotRef.current?.classList.remove('hovered'); ringRef.current?.classList.remove('hovered') })
      })
    }, 800)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); clearTimeout(t) }
  }, [])
  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

// ─── SCROLL PROGRESS ──────────────────────────────────────────
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => { const m = document.body.scrollHeight - innerHeight; setPct(m > 0 ? (scrollY / m) * 100 : 0) }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="scroll-prog"><div className="scroll-prog-fill" style={{ width: `${pct}%` }} /></div>
}

// ─── LOADER ───────────────────────────────────────────────────
function Loader({ onDone }) {
  return (
    <motion.div className="loader" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <motion.div className="loader-title"
        initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >FISMUN'26</motion.div>
      <div className="loader-bar">
        <motion.div className="loader-bar-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          onAnimationComplete={onDone}
        />
      </div>
      <motion.p className="loader-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        26 June 2026 · Bigger · Better · Bolder
      </motion.p>
    </motion.div>
  )
}

// ─── PARTICLES ────────────────────────────────────────────────
function ParticleField() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext('2d')
    let W, H, pts = [], raf
    const resize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 90; i++) pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.2 + .3, a: Math.random() * .25 + .06
    })
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(237,232,220,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 110) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(237,232,220,${(1-d/110)*.07})`; ctx.lineWidth = .5; ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="particle-canvas" />
}

// ─── NAV ──────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: 'hero',        label: 'Home'         },
  { id: 'secretariat', label: 'About'        },
  { id: 'committees',  label: 'Committees'   },
  { id: 'coc',         label: 'Resources'    },
  { id: 'register',    label: 'Register'     },
  { id: 'contact',     label: 'Contact'      },
]
function Nav() {
  const [stuck, setStuck]   = useState(false)
  const [active, setActive] = useState('hero')
  const locked = useRef(false)
  useEffect(() => {
    const fn = () => {
      setStuck(scrollY > 60)
      if (locked.current) return
      const sectionIds = NAV_LINKS.map(l => l.id === 'contact' ? 'register' : l.id).filter((v, i, a) => a.indexOf(v) === i).reverse()
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop - 140) {
          if (id === 'register') {
            const contactEl = document.getElementById('contact')
            if (contactEl && scrollY >= contactEl.offsetTop - 200) { setActive('contact'); break }
          }
          setActive(id); break
        }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = useCallback((e, id) => {
    e.preventDefault()
    setActive(id)
    locked.current = true
    setTimeout(() => { locked.current = false }, 900)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <motion.nav className={`nav${stuck ? ' stuck' : ''}`}
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="nav-logo-left"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="FISMUN" className="nav-logo-img" />
      </motion.div>
      {NAV_LINKS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={`nav-link${active === id ? ' active' : ''}`} onClick={e => go(e, id)}>{label}</a>
      ))}
      <motion.div
        className="nav-logo-right"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={`${import.meta.env.BASE_URL}fis_Logo.png`} alt="Freedom International School" className="nav-logo-img nav-logo-school" />
      </motion.div>
    </motion.nav>
  )
}

// ─── PAGE 1: HERO ─────────────────────────────────────────────
function Hero() {
  const letters = "FISMUN'26".split('')
  return (
    <section id="hero" className="hero section page-section">
      {/* Stacked: logo watermark (back) → globe wireframe (front) */}
      <div className="logo-holo-wrap">
        {/* Logo sits at z-index 0 — background */}
        <LogoWatermark />
        {/* Globe wireframe overlay — no inner sphere, logo shows through */}
        <div className="globe-overlay">
          <Globe overlay />
        </div>
        {/* Rings & sweep on top of everything */}
        <div className="holo-rings">
          {[0, 1, 2].map(i => <div key={i} className="holo-ring" />)}
        </div>
        <div className="hero-sweep" />
      </div>

      <div className="hero-content">
        <motion.h1
          className="hero-title glitch"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 1.8 } } }}
        >
          {letters.map((ch, i) => (
            <motion.span key={i} style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
              variants={{
                hidden:  { opacity: 0, y: 90, rotateX: -85, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0,  rotateX: 0,   filter: 'blur(0px)',
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
            >{ch}</motion.span>
          ))}
        </motion.h1>
        <motion.p className="hero-tagline"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
          transition={{ delay: 2.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          BIGGER. BETTER. BOLDER.
        </motion.p>
        <motion.div className="hero-date"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.6 }}
        >
          26 June – 28 June 2026
        </motion.div>
      </div>

      <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6, duration: 0.8 }}>
        <span>Scroll</span><div className="scroll-hint-line" />
      </motion.div>
    </section>
  )
}

// ─── PAGE 2: SECRETARIAT ──────────────────────────────────────
function Secretariat() {
  return (
    <section id="secretariat" className="section page-section secretariat-pg">
      <LogoWatermark dim size="min(480px, 76vw)" />
      <div className="secretariat-inner">
        <FadeUp>
          <h2 className="section-title">LETTER FROM THE SECRETARIAT</h2>
        </FadeUp>
        <div className="sec-layout">
          <FadeUp delay={0.1} className="letter-card">
            <div className="letter-quote">"</div>
            <p className="letter-body">
              Dear Delegates,
              <br />
              It is with great warmth and pride that we welcome each one of you to this conference.
              <br />
              Model United Nations is not just about debate and diplomacy, it is about discovering your voice, learning to listen, and understanding perspectives beyond your own. For some of you, this may be your first conference, and feeling nervous is completely natural. What matters is not perfection, but the willingness to participate and grow.
              <br />
              For others, this may be another step in your MUN journey, yet each conference brings something new such as fresh challenges, new ideas, and moments that stay with you longer than expected. As the Secretariat, we have worked to create an environment where every voice is valued. Often, the most meaningful experiences come not from awards, but from conversations, collaboration, and the small moments in between.
              <br />
              As you step into committee, be curious, be respectful, and be bold in your own way. Speak when you can, listen when it matters, and most importantly, allow yourself to fully experience this conference.
              <br />
              We are truly glad to have you here and look forward to the energy and ideas you bring.
              <br />
              Warm regards,<br />The Secretariat
            </p>
            <div className="letter-sigs">
              <div className="letter-sig-item"><span className="letter-sig-name">Ishaan Gowda</span><span className="letter-sig-role">Secretary General</span></div>
              <div className="letter-sig-item"><span className="letter-sig-name">Sarah Susan</span><span className="letter-sig-role">Deputy Secretary General</span></div>
              <div className="letter-sig-item"><span className="letter-sig-name">Gaurav Shetty</span><span className="letter-sig-role">Director General</span></div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE 3: COUNTDOWN ────────────────────────────────────────
function useCountdown(iso) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const d = new Date(iso) - new Date()
      if (d <= 0) return
      setT({ days: Math.floor(d/864e5), hours: Math.floor((d%864e5)/36e5), minutes: Math.floor((d%36e5)/6e4), seconds: Math.floor((d%6e4)/1e3) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [iso])
  return t
}
function DigitBox({ value, len = 2 }) {
  const str = String(value).padStart(len, '0')
  return (
    <div className="cd-digit">
      <motion.span key={str} initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'inline-block' }}>
        {str}
      </motion.span>
    </div>
  )
}
function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(CONF_DATE)
  return (
    <section id="countdown" className="countdown section page-section">
      <LogoWatermark dim size="min(420px, 68vw)" />
      <div className="countdown-content">
        <FadeUp><h2 className="section-title">LET THE COUNTDOWN BEGIN</h2></FadeUp>
        <FadeUp delay={0.08}>
          <div className="cd-row">
            <div className="cd-unit"><DigitBox value={days} len={3} /><div className="cd-label">Days</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={hours}   /><div className="cd-label">Hours</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={minutes} /><div className="cd-label">Minutes</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={seconds} /><div className="cd-label">Seconds</div></div>
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="cd-desc">
            FISMUN 2026, IN ITS FOURTH EDITION, CONTINUES ITS JOURNEY OF BRINGING
            STUDENTS TOGETHER TO LEARN, DEBATE, AND GROW. IT'S A SPACE WHERE IDEAS
            ARE SHARED, PERSPECTIVES ARE CHALLENGED, AND DELEGATES GET A CHANCE TO
            STEP INTO THE WORLD OF DIPLOMACY.
            <br /><br />
            MORE THAN JUST A CONFERENCE, FISMUN IS ABOUT BUILDING CONFIDENCE,
            MAKING CONNECTIONS, AND UNDERSTANDING GLOBAL ISSUES IN A MEANINGFUL WAY.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── STATS ────────────────────────────────────────────────────
function StatItem({ target, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, target, { duration: 1.55, ease: [0.22, 1, 0.36, 1], onUpdate: v => setN(Math.floor(v)) })
    return ctrl.stop
  }, [inView, target])
  return (
    <motion.div ref={ref} className="stat-item"
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-num">{n}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </motion.div>
  )
}
function Stats() {
  return (
    <div className="stats-bar section">
      {STATS.map(s => <StatItem key={s.label} {...s} />)}
    </div>
  )
}

// ─── COMMITTEE DETAIL OVERLAY ─────────────────────────────────
function CommitteeDetail({ committee, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  return (
    <motion.div
      className="cd-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="cd-panel"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 38, mass: 0.9 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="cd-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="cd-header">
          <div className="cd-abbr">{committee.abbr}</div>
          <div className="cd-fullname">{committee.fullName}</div>
          <div className="cd-divider" />
        </div>

        {/* Agenda */}
        {committee.agenda && (
          <div className="cd-section">
            <div className="cd-section-lbl">Agenda</div>
            <p className="cd-agenda">{committee.agenda}</p>
          </div>
        )}

        {/* Description */}
        <p className="cd-description">{committee.description}</p>

        {/* Executive Board */}
        {committee.board?.length > 0 && (
          <div className="cd-section">
            <div className="cd-section-lbl">Executive Board</div>
            <div className="cd-board">
              {committee.board.map(m => (
                <div key={m.name} className="cd-board-row">
                  <span className="cd-board-role">{m.role}</span>
                  <span className="cd-board-name">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="cd-actions">
          {committee.matrixUrl ? (
            <a href={committee.matrixUrl} target="_blank" rel="noopener noreferrer" className="cd-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              View Matrix
            </a>
          ) : (
            <button className="cd-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              View Matrix
            </button>
          )}
          {committee.backgroundGuideUrl ? (
            <a href={committee.backgroundGuideUrl} target="_blank" rel="noopener noreferrer" className="cd-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              View Background Guide
            </a>
          ) : (
            <button className="cd-btn" disabled>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              View Background Guide
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── PAGE 4: COMMITTEES (with glass spheres) ──────────────────
function Committees() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="committees" className="committees section">
        <LogoWatermark dim size="min(380px, 58vw)" />

        {/* Decorative glass spheres — reference glassmorphism aesthetic */}
        <div className="committee-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" />
          <div className="orb orb-6" />
        </div>

        <div className="committees-content">
          <FadeUp><h2 className="section-title">INTRODUCING THE COMMITTEES</h2></FadeUp>
          <motion.div className="committees-grid"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
          >
            {COMMITTEES.map((c, i) => (
              <CommitteeCard key={c.abbr} committee={c} index={i} onClick={() => setSelected(c)} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <CommitteeDetail committee={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}

// ─── RESOURCES ────────────────────────────────────────────────
// 🗓️ Paste your Google Docs itinerary share link below (replace the placeholder).
const ITINERARY_LINK = 'https://docs.google.com/document/d/YOUR_ITINERARY_DOC_ID/edit?usp=sharing'

const RESOURCE_TOP = [
  { emoji: '🌍', label: 'Portfolio Matrices', key: 'matrix',    href: 'https://docs.google.com/document/d/1l3MEPxJgwCKz4zAydHOJZyxQZ3FiAydwl8bXpZkMaB8/edit?usp=sharing' },
  { emoji: '📋', label: 'Code of Conduct',   key: 'coc',       href: 'https://drive.google.com/file/d/1FpiyI4yJp4gzh9Hiad9RYzR53XThT5jo/view?usp=sharing' },
  { emoji: '🗓️', label: 'Itinerary',         key: 'itinerary', href: 'https://drive.google.com/file/d/1euPNVB453ce9S7RQoWcPGwTxAeqntm6v/view?usp=sharing' },
]

function Resources() {
  return (
    <>
      <section id="coc" className="resources section page-section">
        <LogoWatermark dim size="min(460px, 72vw)" />
        <div className="resources-inner">
          <FadeUp><h2 className="section-title">DELEGATE RESOURCES</h2></FadeUp>

          {/* Top row — Country Matrix + Code of Conduct */}
          <FadeUp delay={0.08}>
            <div className="res-top-row">
              {RESOURCE_TOP.map(r => (
                <motion.a
                  key={r.key}
                  className="res-card"
                  href={r.href || '#'}
                  target={r.href ? '_blank' : undefined}
                  rel={r.href ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                >
                  <span className="res-card-emoji">{r.emoji}</span>
                  <span className="res-card-label">{r.label}</span>
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* Background Guides */}
          <FadeUp delay={0.14}><h3 className="res-sub-title">Background Guides</h3></FadeUp>
          <motion.div className="res-bg-grid"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
          >
            {COMMITTEES.map(c => (
              <motion.a
                key={c.abbr}
                className="res-bg-card"
                href={c.backgroundGuideUrl || '#'}
                target={c.backgroundGuideUrl ? '_blank' : undefined}
                rel={c.backgroundGuideUrl ? 'noopener noreferrer' : undefined}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              >
                <div className="res-bg-card-inner">
                  <span className="res-bg-abbr">{c.abbr}</span>
                  <span className="res-bg-full">{c.fullName}</span>
                </div>
                <span className="res-bg-arrow">→</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

// ─── SHARE BUTTONS ────────────────────────────────────────────
function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const share = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Join me at FISMUN'26 — Bigger. Better. Bolder. 26 June 2026.")
    const links = {
      whatsapp:  `https://api.whatsapp.com/send?text=${text}%20${url}`,
      facebook:  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin:  `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter:   `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    }
    if (platform === 'copy') {
      navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) })
      return
    }
    if (platform === 'instagram') {
      // Instagram has no web share URL — use native share API or copy
      if (navigator.share) { navigator.share({ title: "FISMUN'26", text: decodeURIComponent(text), url: window.location.href }) }
      else { navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) }) }
      return
    }
    window.open(links[platform], '_blank', 'noopener,width=620,height=500')
  }

  return (
    <div className="share-row">
      <p className="share-label">Share FISMUN'26</p>
      <div className="share-btns">
        {/* WhatsApp */}
        <motion.button className="share-btn share-wa" onClick={() => share('whatsapp')} title="Share on WhatsApp"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.885.52 3.648 1.428 5.158L2 22l4.946-1.403A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm.001 18a7.97 7.97 0 01-4.074-1.118l-.292-.174-3.033.86.838-3.07-.19-.306A7.997 7.997 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
        </motion.button>

        {/* Facebook / Meta */}
        <motion.button className="share-btn share-fb" onClick={() => share('facebook')} title="Share on Facebook"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </motion.button>

        {/* Instagram */}
        <motion.button className="share-btn share-ig" onClick={() => share('instagram')} title="Share on Instagram"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </motion.button>

        {/* LinkedIn */}
        <motion.button className="share-btn share-li" onClick={() => share('linkedin')} title="Share on LinkedIn"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </motion.button>

        {/* Twitter / X */}
        <motion.button className="share-btn share-x" onClick={() => share('twitter')} title="Share on X (Twitter)"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </motion.button>

        {/* Copy link */}
        <motion.button className={`share-btn share-copy${copied ? ' copied' : ''}`} onClick={() => share('copy')} title="Copy link"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          {copied
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          }
        </motion.button>
      </div>
    </div>
  )
}

// ─── REGISTER ─────────────────────────────────────────────────
function Register() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="register" className="register section page-section">
      <div className="register-inner">
        <FadeUp delay={0.08}><h2 className="register-title">STEP INTO<br />DIPLOMACY</h2></FadeUp>
        <FadeUp delay={0.16}><p className="register-sub">Join delegates from across the country for three days of world-class debate and diplomacy</p></FadeUp>
        <FadeUp delay={0.24}>
          <div className="register-btn-group">
            <AnimatePresence mode="wait">
              {!expanded ? (
                <motion.button
                  key="register-now"
                  className="btn-register"
                  onClick={() => setExpanded(true)}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                >Register Now</motion.button>
              ) : (
                <motion.div
                  key="register-expanded"
                  className="register-btn-expanded"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  <motion.a
                    href="https://forms.gle/s5nLLwbKFcjwgEby8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-register"
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >Individual<br />Registration</motion.a>
                  <motion.a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-register btn-register-outline"
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >Delegation<br />Registration</motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
        <FadeUp delay={0.34}>
          <ShareButtons />
        </FadeUp>
        <FadeUp delay={0.44}>
          <div className="contact-section" id="contact">
            <h3 className="contact-title">CONTACT US</h3>
            <div className="contact-items">
              <a href="mailto:freedominternationalschoolmun@gmail.com" className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                freedominternationalschoolmun@gmail.com
              </a>
              <a href="https://www.instagram.com/fis.mun?igsh=Z2g5Y29jNDZzeXZ3" target="_blank" rel="noopener noreferrer" className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @fis.mun
              </a>
            </div>
            <a
              href="https://www.google.com/maps/dir//Freedom+International+School,+C+A+%23+33,+Sector+IV,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9007616,77.643776,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae148f631fa5df:0xc30c45871af94d8b!2m2!1d77.6419898!2d12.9165463?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-wrap"
              title="Open in Google Maps"
            >
              <iframe
                className="contact-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.6419898!3d12.9165463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148f631fa5df%3A0xc30c45871af94d8b!2sFreedom%20International%20School!5e0!3m2!1sen!2sin!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Freedom International School"
              />
              <div className="contact-map-overlay">
                <span className="contact-map-cta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" id="footer-contact">
      <div className="footer-brand">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="FISMUN" className="footer-logo-img" />
        <div className="footer-logo">FISMUN'26</div>
        <div className="footer-tag">Bigger · Better · Bolder</div>
      </div>
      <div className="footer-center">
        <div className="footer-links">
          {[['Home','hero'],['About','secretariat'],['Committees','committees'],['Resources','coc'],['Register','register'],['Contact','contact']].map(([l,id]) => (
            <a key={l} href={`#${id}`} className="footer-link">{l}</a>
          ))}
        </div>
        <div className="footer-copy">© 2026 FISMUN. All rights reserved.</div>
      </div>
      <div className="footer-school">
        <img src={`${import.meta.env.BASE_URL}fis_Logo.png`} alt="Freedom International School" className="footer-logo-school-img" />
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <AnimatePresence>{!loaded && <Loader onDone={() => setLoaded(true)} />}</AnimatePresence>

      {/* Celestial background blobs — glow THROUGH glass cards */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>
      <ParticleField />

      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />          {/* PDF page 1 */}
        <Secretariat />   {/* PDF page 2 */}
        <Countdown />     {/* PDF page 3 */}
        <Stats />
        <Committees />    {/* PDF page 4 */}
        <Resources />
        <Register />
      </main>
      <Footer />
    </>
  )
}
