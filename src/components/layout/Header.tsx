'use client'

import { useState, useEffect } from 'react'

interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)', transition: 'background 0.3s',
    }}>
      <nav style={{
        width: '100%', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', height: '64px',
      }}>

        {/* Logo */}
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px',
          background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
        }}>
          Raul de Oliveira
        </span>

        {/* Links — só no desktop */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}
                  style={{ fontSize: '14px', textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-1)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Direita */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleTheme}
            onMouseEnter={e => {
              e.currentTarget.style.background = theme === 'dark' ? '#00a854' : '#7B5FFF'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = theme === 'dark' ? '#00a854' : '#7B5FFF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--surface)'
              e.currentTarget.style.color = 'var(--accent-1)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
            style={{
              fontSize: '13px', padding: '8px 16px', borderRadius: '8px',
              border: '1px solid var(--border)', background: 'var(--surface)',
              color: 'var(--accent-1)', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              transition: 'background 0.2s, color 0.2s, border-color 0.2s',
            }}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Hamburguer — só no mobile */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: '24px', background: 'none', border: 'none',
                color: 'var(--accent-1)', cursor: 'pointer',
              }}>
              <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
          )}
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && isMobile && (
        <ul style={{
          display: 'flex', flexDirection: 'column',
          padding: '16px 24px', gap: '16px',
          listStyle: 'none', borderTop: '1px solid var(--border)',
          background: 'var(--bg)',
        }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}
                style={{ fontSize: '14px', textDecoration: 'none', color: 'var(--text-secondary)', display: 'block' }}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}