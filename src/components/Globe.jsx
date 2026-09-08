import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// overlay=true → no opaque inner sphere, so the logo beneath shows through
export default function Globe({ overlay = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100)
    camera.position.z = 13

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(600, 600)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

    // ── Inner sphere — solid in standalone, skip in overlay mode ──
    if (!overlay) {
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(4.82, 64, 64),
        new THREE.MeshBasicMaterial({ color: 0x060d1b, transparent: true, opacity: 0.96 })
      ))
    }

    // ── Wireframe shell (brighter in overlay) ─────────────────────
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(5, 40, 40),
      new THREE.MeshBasicMaterial({
        color: 0x4a8fe2, wireframe: true, transparent: true,
        opacity: overlay ? 0.18 : 0.10,
      })
    )
    scene.add(wire)

    // ── Line materials (boosted opacity in overlay) ───────────────
    const bright = new THREE.LineBasicMaterial({ color: 0x4a8fe2, transparent: true, opacity: overlay ? 0.60 : 0.38 })
    const dim    = new THREE.LineBasicMaterial({ color: 0x4a8fe2, transparent: true, opacity: overlay ? 0.28 : 0.16 })
    const white  = new THREE.LineBasicMaterial({ color: 0xffffff,  transparent: true, opacity: overlay ? 0.14 : 0.07 })

    function latLine(latDeg, mat) {
      const lr = latDeg * Math.PI / 180
      const r = 5 * Math.cos(lr), y = 5 * Math.sin(lr)
      const pts = []
      for (let i = 0; i <= 96; i++) {
        const a = (i / 96) * Math.PI * 2
        pts.push(new THREE.Vector3(r * Math.cos(a), y, r * Math.sin(a)))
      }
      return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat)
    }

    function lonLine(lonDeg, mat) {
      const lr = lonDeg * Math.PI / 180
      const pts = []
      for (let i = 0; i <= 96; i++) {
        const lat = ((i / 96) * 180 - 90) * Math.PI / 180
        pts.push(new THREE.Vector3(
          5 * Math.cos(lat) * Math.cos(lr),
          5 * Math.sin(lat),
          5 * Math.cos(lat) * Math.sin(lr)
        ))
      }
      return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat)
    }

    // Latitude rings
    ;[-60, -30, 30, 60].forEach(l => scene.add(latLine(l, dim)))
    scene.add(latLine(0, bright))   // equator brighter

    // Longitude lines
    for (let l = 0; l < 360; l += 30) {
      scene.add(lonLine(l, l % 90 === 0 ? bright : (l % 45 === 0 ? dim : white)))
    }

    // ── Surface dots ──────────────────────────────────────────────
    const dotPos = []
    for (let i = 0; i < 500; i++) {
      const phi   = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      dotPos.push(5.04 * Math.sin(phi) * Math.cos(theta), 5.04 * Math.sin(phi) * Math.sin(theta), 5.04 * Math.cos(phi))
    }
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPos, 3))
    scene.add(new THREE.Points(dotGeo,
      new THREE.PointsMaterial({ color: 0x4a8fe2, size: 0.065, transparent: true, opacity: overlay ? 0.80 : 0.60 })
    ))

    // ── Atmosphere glow ───────────────────────────────────────────
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(5.35, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x4a8fe2, transparent: true, opacity: 0.042, side: THREE.BackSide })
    ))
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(5.9, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x4a8fe2, transparent: true, opacity: 0.016, side: THREE.BackSide })
    ))

    // ── Mouse parallax ────────────────────────────────────────────
    let mx = 0, my = 0
    const onMouse = e => { mx = (e.clientX / innerWidth - 0.5) * 0.8; my = (e.clientY / innerHeight - 0.5) * 0.5 }
    window.addEventListener('mousemove', onMouse)

    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)
      wire.rotation.y += 0.0018
      wire.rotation.x += 0.0004
      scene.rotation.y += (mx * 0.35 - scene.rotation.y) * 0.045
      scene.rotation.x += (-my * 0.22 - scene.rotation.x) * 0.045
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      renderer.dispose()
    }
  }, [overlay])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}
