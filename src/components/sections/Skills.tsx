'use client'

import { useState, useEffect } from 'react'

const skillGroups = [
  {
    title: 'Linguagens',
    items: ['JavaScript', 'TypeScript'],
    variant: 'lang',
  },
  {
    title: 'Frameworks & Bibliotecas',
    items: ['React', 'Next.js', 'Tailwind CSS'],
    variant: 'lang',
  },
  {
    title: 'Ferramentas',
    items: ['HTML5', 'CSS3', 'Git', 'GitHub', 'Vercel'],
    variant: 'tool',
  }
]

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="skills" style={{ padding: '96px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '8px' }}>
          ✦ O que eu sei
        </p>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : '40px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Skills &{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ferramentas
          </span>
        </h2>

        <div style={{ width: '40px', height: '2px', borderRadius: '2px', marginBottom: '48px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '24px',
        }}>
          {skillGroups.map((group) => (
            <div key={group.title} style={{
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '16px' }}>
                {group.title}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((item) => (
                  <span key={item} style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid',
                    ...(group.variant === 'lang' ? {
                      background: 'rgba(0, 201, 255, 0.08)',
                      borderColor: 'rgba(0, 201, 255, 0.25)',
                      color: 'var(--accent-2)',
                    } : {
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                      color: 'var(--accent-1)',
                    }),
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}