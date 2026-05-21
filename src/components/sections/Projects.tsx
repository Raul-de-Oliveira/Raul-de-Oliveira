'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const projects = [
  {
    name: 'Pizzaria Online',
    description: 'Sistema de pedidos online com carrinho interativo e cálculo total em tempo real.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projeto-pizzaria.png',
    demo: 'https://raul-de-oliveira.github.io/projeto-pizzaria/',
    repo: 'https://github.com/Raul-de-Oliveira/projeto-pizzaria',
  },
  {
    name: 'Landing Page',
    description: 'Landing page com formulário de cadastro validado e menu hamburguer responsivo.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projeto-landing.png',
    demo: 'https://raul-de-oliveira.github.io/landing-page/',
    repo: 'https://github.com/Raul-de-Oliveira/landing-page',
  },
  {
    name: 'Lista de Tarefas',
    description: 'Lista de tarefas com botões de adicionar, editar e excluir, construída com React e useReducer.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projeto-ToDoList.png',
    demo: 'https://projeto-to-do-list-react.vercel.app',
    repo: 'https://github.com/Raul-de-Oliveira/projeto-ToDoList-react',
  },
]

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="projetos" style={{ padding: '96px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '8px' }}>
          ✦ O que eu construí
        </p>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : '40px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Meus{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Projetos
          </span>
        </h2>

        <div style={{ width: '40px', height: '2px', borderRadius: '2px', marginBottom: '48px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {projects.map((project) => (
            <div key={project.name} style={{
              borderRadius: '12px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--accent-1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}>

              <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {project.name}
                </h3>

                <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', color: 'var(--text-secondary)', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: '11px', padding: '4px 10px', borderRadius: '20px',
                      border: '1px solid var(--border)', color: 'var(--accent-1)',
                      background: 'var(--surface)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: '12px', fontWeight: 500,
                      padding: '8px', borderRadius: '8px', textDecoration: 'none',
                      color: 'white',
                      background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                    }}>
                    Ver Demo
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, textAlign: 'center', fontSize: '12px', fontWeight: 500,
                      padding: '8px', borderRadius: '8px', textDecoration: 'none',
                      border: '1px solid var(--border)', color: 'var(--accent-1)',
                      background: 'transparent',
                    }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}