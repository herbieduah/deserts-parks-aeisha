import React from 'react'
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaGlobe,
  FaEnvelope
} from 'react-icons/fa'

interface AboutPageProps {
  onBack: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="about-page">
      <div className="about-header">
        <button onClick={onBack} className="header-link">
          ← Back
        </button>
      </div>

      <div className="about-content">
        <div className="how-to-use"></div>
        <h1>About Desert Spark Cards</h1>
        <p>
          A collaboration between Aiesha Beasley and opnrs to help people
          connect through meaningful conversations while exploring the vibrant
          Phoenix social scene.
        </p>

        <h2>How to Use</h2>
        <p>
          Choose your mode, swipe through questions, and let the conversations
          flow naturally. Perfect for dates, couples, or getting to know someone
          new. Flip your phone to landscape mode for a handy tip calculator!
        </p>

        <div className="about-aiesha">
          <h2>Meet Aiesha Beasley</h2>
          <p>
            Aiesha is a Phoenix-based content creator who shares local food
            spots, lifestyle tips, and relatable stories with her community. As
            a storyteller and influencer in the Phoenix area, she knows what it
            takes to create genuine connections over great food and memorable
            experiences.
          </p>
          <p>
            These Desert Spark Cards make perfect sense as a collaboration
            because they help people connect while exploring the same local
            dining and social vibe that Aiesha promotes. Whether you're
            discovering a new restaurant or deepening a relationship, these
            conversation starters bring people together in authentic ways.
          </p>
        </div>

        <div className="thriving-loudly">
          <h2>Thriving Loudly Podcast</h2>
          <p>
            Beyond content creation, Aiesha co-hosts the Thriving Loudly podcast
            with her friend Trice. Together they share their stories, celebrate
            diverse voices, and dive into real conversations on
            entrepreneurship, wellness, and what it means to thrive
            unapologetically as women of color. Their goal is to create a safe
            space for BIPOC individuals to feel seen, heard, and inspired — the
            same energy these cards bring to your own conversations.
          </p>

          <h3>Listen to Thriving Loudly</h3>
          <div className="podcast-links">
            <a
              href="https://thrivingloudly.buzzsprout.com/2440817/about"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-link"
            >
              Podcast Website
            </a>
            <a
              href="https://www.instagram.com/thrivingloudly/"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-link"
            >
              Podcast Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=kKYGq7rty9c"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-link"
            >
              YouTube Episode
            </a>
          </div>
        </div>

        <div className="social-links">
          <h3>Connect with Aiesha</h3>
          <div className="social-grid">
            <a
              href="https://www.instagram.com/aieshabeasley/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@aieshabeasley"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTiktok className="social-icon" />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCT_DseaE4WQAldHTuB-0VFw"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaYoutube className="social-icon" />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.pinterest.com/aieshabeasley_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaPinterest className="social-icon" />
              <span>Pinterest</span>
            </a>

            <a
              href="https://aieshabeasley.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGlobe className="social-icon" />
              <span>Website</span>
            </a>

            <a href="mailto:aieshabeasleyllc@gmail.com" className="social-link">
              <FaEnvelope className="social-icon" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
