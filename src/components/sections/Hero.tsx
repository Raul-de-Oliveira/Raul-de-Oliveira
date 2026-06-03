'use client'

import { useState, useEffect } from 'react'

interface HeroProps {
  theme: string
}

export default function Hero({ theme }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSmall(window.innerWidth <= 630)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>

      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'var(--accent-1)', filter: 'blur(120px)', opacity: 0.12,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'var(--accent-2)', filter: 'blur(120px)', opacity: 0.10,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>

        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '16px' }}>
          ✦ Desenvolvedor Frontend
        </p>

        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: isSmall ? 'clamp(36px, 10vw, 56px)' : 'clamp(48px, 5vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.05,
          marginBottom: '16px',
          whiteSpace: isSmall ? 'normal' : 'nowrap',
        }}>
          <span style={{ color: 'var(--text-primary)' }}>Raul de </span>
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Oliveira.
          </span>
        </h1>

        <p style={{ fontSize: isMobile ? '15px' : '18px', marginBottom: '40px', color: 'var(--text-secondary)', fontWeight: 300 }}>
          Transformando ideias em interfaces modernas, funcionais e acessíveis.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a href="#projetos" style={{
            padding: '12px 28px', borderRadius: '8px', fontWeight: 500, fontSize: '14px',
            color: 'white', textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
          }}>
            Ver Projetos
          </a>
          <a href="#contato" style={{
            padding: '12px 28px', borderRadius: '8px', fontWeight: 500, fontSize: '14px',
            border: '1px solid var(--border)', color: 'var(--accent-1)',
            background: 'var(--surface)', textDecoration: 'none',
          }}>
            Entrar em contato
          </a>
        </div>

      </div>
    </section>
  )
}