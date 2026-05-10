


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

          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: 'var(--text-secondary)' }}>
              Olá! Sou o Raul, desenvolvedor Frontend apaixonado por criar
              experiências web modernas e intuitivas. Estou em constante
              evolução, aprofundando meus estudos em React e Next.js.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: 'var(--text-secondary)' }}>
              Tenho foco em escrever código limpo, acessível e performático,
              sempre buscando as melhores práticas do mercado. Cada projeto
              é uma oportunidade de aprender algo novo.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Quando não estou codando, estou estudando novas tecnologias
              para me tornar um desenvolvedor cada vez melhor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: 'bx-code-alt', label: 'Foco', value: 'Frontend' },
              { icon: 'bx-book-open', label: 'Estudando', value: 'React & Next.js' },
              { icon: 'bx-git-branch', label: 'Controle', value: 'Git & GitHub' },
              { icon: 'bx-rocket', label: 'Objetivo', value: 'Primeiro emprego' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
              }}>
                <i className={`bx ${item.icon}`} style={{ fontSize: '24px', color: 'var(--accent-1)', display: 'block', marginBottom: '8px' }} />
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}