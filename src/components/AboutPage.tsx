import React from 'react'

interface AboutPageProps {
  onBack: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="screen">
      <div className="header">
        <button className="header-link" onClick={onBack}>
          ← Back
        </button>
        <div className="header-title">About</div>
        <div></div>
      </div>

      <div style={{ flex: 1, padding: '40px 20px', textAlign: 'center' }}>
        <div className="content-stack-large">
          <div>
            <h2>Desert Spark Cards</h2>
            <h3 style={{ color: 'var(--color-primary)', marginTop: '-8px' }}>
              with Aiesha Beasley
            </h3>
          </div>

          <div className="card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
              About Desert Spark Cards. Info coming soon.
            </p>
          </div>

          <div style={{ marginTop: '32px' }}>
            <button className="btn btn-primary" onClick={onBack}>
              Back to Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
