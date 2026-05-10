'use client'

import { useState } from 'react'

interface HeaderProps {
  theme: string
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b"
      style={{ 
        background: 'var(--bg)', 
        borderColor: 'var(--border)',
        transition: 'background 0.3s'
      }}>
      <nav style={{
  maxWidth: '1152px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  height: '64px',
}}>
  <span style={{
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: '22px',
    background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>
    Raul.
  </span>

  {/* Links centro */}
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

  {/* Botão direita */}
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'center' }}>
    <button onClick={toggleTheme}
      style={{
        fontSize: '13px',
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--accent-1)',
        cursor: 'pointer',
        fontFamily: 'DM Sans, sans-serif',
      }}>
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>

    {/* Hamburguer mobile */}
    <button
      style={{ display: 'none', fontSize: '24px', background: 'none', border: 'none', color: 'var(--accent-1)', cursor: 'pointer' }}
      onClick={() => setMenuOpen(!menuOpen)}>
      <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
    </button>
  </div>
</nav>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-4 border-t"
          style={{ borderColor: 'var(--border)' }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}
                className="text-sm block py-1"
                style={{ color: 'var(--text-secondary)' }}
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