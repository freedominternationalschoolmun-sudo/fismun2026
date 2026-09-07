import { useEffect, useRef } from 'react'

export default function Globe({ overlay = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.35

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = overlay ? 'rgba(237, 232, 220, 0.15)' : 'rgba(74, 143, 226, 0.3)'
      ctx.lineWidth = 1

      // Draw wireframe circles
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * (0.7 + i * 0.15), 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw rotating latitude lines
      const rotation = (Date.now() / 50000) % (Math.PI * 2)
      for (let lat = -80; lat <= 80; lat += 20) {
        const latRad = (lat * Math.PI) / 180
        const latRadius = radius * Math.cos(latRad)
        const yOffset = radius * Math.sin(latRad)

        ctx.beginPath()
        for (let lon = 0; lon <= 360; lon += 10) {
          const lonRad = ((lon * Math.PI) / 180 + rotation) % (Math.PI * 2)
          const x = centerX + latRadius * Math.cos(lonRad)
          const y = centerY + yOffset
          if (lon === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [overlay])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
}
