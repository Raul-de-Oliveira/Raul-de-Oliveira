'use client'

import { useState, useEffect } from 'react'

interface Contact {
  icon: string
  label: string
  value: string
  href: string | null
  onClick?: () => void
}

const contacts: Contact[] = [
  {
    icon: 'bxl-github',
    label: 'GitHub',
    value: 'Raul-de-Oliveira',
    href: 'https://github.com/Raul-de-Oliveira',
  },
  {
    icon: 'bxl-linkedin',
    label: 'LinkedIn',
    value: 'raul-oliveira-b7077634b',
    href: 'https://www.linkedin.com/in/raul-oliveira-b7077634b/',
  },
  {
    icon: 'bx-envelope',
    label: 'Email',
    value: 'ra.oliveira.salto@gmail.com',
    href: null,
    onClick: () => window.open('https://mail.google.com/mail/?view=cm&to=ra.oliveira.salto@gmail.com', '_blank'),
  },
]

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="contato" style={{ padding: '96px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '8px' }}>
          ✦ Vamos conversar
        </p>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : '40px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Entre em{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            contato
          </span>
        </h2>

        <div style={{ width: '40px', height: '2px', borderRadius: '2px', marginBottom: '24px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }} />

        <p style={{ fontSize: '15px', marginBottom: '48px', color: 'var(--text-secondary)' }}>
          Estou disponível para novas oportunidades. Me chama!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {contacts.map((contact) => (
            <a key={contact.label}
              href={contact.href ?? '#'}
              onClick={contact.onClick ? (e) => { e.preventDefault(); contact.onClick!() } : undefined}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px', borderRadius: '12px',
                border: '1px solid var(--border)', background: 'var(--surface)',
                textDecoration: 'none', cursor: 'pointer',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--accent-1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>

              <i className={`bx ${contact.icon}`}
                style={{ fontSize: '32px', color: 'var(--accent-1)' }} />

              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {contact.label}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {contact.value}
                </p>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  )
}