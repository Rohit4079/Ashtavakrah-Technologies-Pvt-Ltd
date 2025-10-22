'use client'
import React, { useRef, useEffect } from 'react'

export default function FireworksCanvas({
  intensity = 100,
  maxRockets = 50,
  className = ''
}) {
  const canvasRef = useRef(null)
  const rockets = useRef([])
  const particles = useRef([])
  const lastLaunch = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const colors = ['#fffb00ff','#ff6f00ff','#2bff00ff','#00b7ffff','#ff0015ff','#ff00f7ff']

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio
      canvas.height = canvas.clientHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const rand = (min, max) => Math.random() * (max - min) + min

    class Rocket {
      constructor() {
        this.x = rand(80, canvas.clientWidth - 80)
        this.y = canvas.clientHeight + 10
        this.vx = rand(-1.5, 1.5)
        this.vy = rand(7, 10)
        this.targetY = rand(canvas.clientHeight * 0.2, canvas.clientHeight * 0.45)
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.exploded = false
      }
      update() {
        this.x += this.vx
        this.y -= this.vy
        this.vy *= 0.98
        if (this.y <= this.targetY) this.explode()
        particles.current.push(new Trail(this.x, this.y, this.color))
      }
      explode() {
        const count = 60
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count
          const speed = rand(1, 5)
          particles.current.push(new Fire(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color))
        }
        this.exploded = true
      }
      draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    class Trail {
      constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color
        this.alpha = 1; this.life = 15
      }
      update() {
        this.life--
        this.alpha = this.life / 15
      }
      draw() {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, 2, 2)
        ctx.globalAlpha = 1
      }
    }

    class Fire {
      constructor(x, y, vx, vy, color) {
        this.x = x; this.y = y; this.vx = vx; this.vy = vy
        this.color = color; this.life = 150
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.vy += 0.03
        this.life--
      }
      draw() {
        ctx.globalAlpha = this.life / 80
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    function loop() {
      rafRef.current = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      const now = performance.now()
      if (now - lastLaunch.current > 400 / intensity) {
        lastLaunch.current = now
        if (rockets.current.length < maxRockets) rockets.current.push(new Rocket())
      }

      rockets.current = rockets.current.filter(r => !r.exploded)
      rockets.current.forEach(r => { r.update(); r.draw() })

      particles.current = particles.current.filter(p => p.life > 0)
      particles.current.forEach(p => { p.update(); p.draw() })
    }

    loop()
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [intensity, maxRockets])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  )
}
