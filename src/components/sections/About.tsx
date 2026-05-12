
import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" style={{ padding: '96px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>

        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '8px' }}>
          ✦ Quem sou eu
        </p>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '40px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
          Sobre{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            mim
          </span>
        </h2>

        <div style={{ width: '40px', height: '2px', borderRadius: '2px', marginBottom: '48px', background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>

          {/* Texto */}
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: 'var(--text-secondary)' }}>
              Olá! Sou Raul, desenvolvedor Frontend focado em criar experiências web modernas, 
              intuitivas e funcionais. Estou em constante evolução aprofundando e melhorando códigos em React a cada projeto.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: 'var(--text-secondary)' }}>
              Tenho foco em escrever código limpo, acessível e performático,
              sempre buscando as melhores práticas do mercado. Cada projeto
              é uma oportunidade de aprender algo novo.
            </p>
           
          </div>

          {/* Foto */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-1)',
              boxShadow: '0 0 40px rgba(123, 95, 255, 0.3)',
            }}>
              <Image
                src="/foto-perfil.jpeg"
                alt="Raul de Oliveira"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}