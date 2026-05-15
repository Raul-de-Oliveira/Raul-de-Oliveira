interface HeroProps {
  theme: string
}

export default function Hero({ theme }: HeroProps) {
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


      <div className="hero__blur hero__blur--tl" />
      <div className="hero__blur hero__blur--br" />

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>
        
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-1)', marginBottom: '16px' }}>
          ✦ Desenvolvedor Frontend
        </p>


      <h1 style={{
         fontFamily: 'Syne, sans-serif',
         fontSize: 'clamp(32px, 7vw, 80px)',
           fontWeight: 800,
  lineHeight: 1.05,
  marginBottom: '16px',
  whiteSpace: 'nowrap',
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

        <p style={{ fontSize: '18px', marginBottom: '40px', color: 'var(--text-secondary)', fontWeight: 300 }}>
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