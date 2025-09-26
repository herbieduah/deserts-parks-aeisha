import React from 'react'

interface EntryScreenProps {
  onStart: () => void
}

export const EntryScreen: React.FC<EntryScreenProps> = ({ onStart }) => {
  return (
    <div className="screen screen-center">
      <div className="entry-screen">
        <div className="hero-section">
          <img
            src="/assets/hero-image.png"
            alt="Aiesha Beasley"
            className="hero-image"
          />
          <div>
            <h1 className="hero-title">Desert Spark Cards</h1>
            <h2
              className="hero-title"
              style={{ color: 'var(--color-primary)', marginTop: '-8px' }}
            >
              with Aiesha Beasley
            </h2>
            <p className="hero-subtitle">
              From first date jitters to cozy nights in — let's spark something
              real.
            </p>
          </div>
        </div>

        <button className="btn btn-primary" onClick={onStart}>
          Let's Start
        </button>
      </div>
    </div>
  )
}
