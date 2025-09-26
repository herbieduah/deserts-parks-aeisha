import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { GameMode } from './ModeSelection'
import { PrevButton, NextButton } from './SwiperArrowButtons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

interface Question {
  text: string
}

interface CardSwiperProps {
  mode: GameMode
  onAbout: () => void
  onBack: () => void
}

export const CardSwiper: React.FC<CardSwiperProps> = ({
  mode,
  onAbout,
  onBack
}) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  // Load questions based on mode
  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true)
      try {
        let questionsData: string[] = []

        if (mode === 'dating') {
          const response = await fetch('/data/dating.json')
          const data = await response.json()
          questionsData = data.questions
        } else if (mode === 'couples') {
          const response = await fetch('/data/couples.json')
          const data = await response.json()
          questionsData = data.questions
        } else {
          // Random mode - combine both datasets
          const [datingResponse, couplesResponse] = await Promise.all([
            fetch('/data/dating.json'),
            fetch('/data/couples.json')
          ])
          const datingData = await datingResponse.json()
          const couplesData = await couplesResponse.json()
          questionsData = [...datingData.questions, ...couplesData.questions]
        }

        // Shuffle questions for random order
        const shuffled = questionsData
          .map((text) => ({ text }))
          .sort(() => Math.random() - 0.5)

        setQuestions(shuffled)
      } catch (error) {
        console.error('Error loading questions:', error)
        setQuestions([{ text: "What's your favorite way to spend a weekend?" }])
      } finally {
        setLoading(false)
      }
    }

    loadQuestions()
  }, [mode])

  if (loading) {
    return (
      <div className="cards-container">
        <div className="question-card">
          <p className="question-text">Loading questions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="cards-container">
      {/* Header */}
      <div className="cards-header">
        <button className="header-link" onClick={onBack}>
          ← Back
        </button>
        <div className="header-title">
          <div>Desert Spark Cards</div>
          <div>with Aiesha Beasley</div>
        </div>
        <button className="header-link" onClick={onAbout}>
          About
        </button>
      </div>

      {/* Card Swiper */}
      <div className="card-swiper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          threshold={10}
          // Safari-specific configurations
          touchStartPreventDefault={false}
          touchStartForcePreventDefault={false}
          touchMoveStopPropagation={false}
          simulateTouch={true}
          allowTouchMove={true}
          touchEventsTarget="container"
          passiveListeners={true}
          // Hardware acceleration for Safari
          cssMode={false}
          freeMode={false}
          // Event handlers
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          className="swiper-container"
        >
          {questions.map((question, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="question-card">
                <p className="question-text">{question.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows at Bottom */}
        <div className="swiper__controls">
          <div className="swiper__buttons">
            <PrevButton swiperInstance={swiperRef.current} />
            <NextButton swiperInstance={swiperRef.current} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span className="footer-text">Powered by</span>
        <img src="/assets/opnrs-logo.svg" alt="Opnrs" className="footer-logo" />
        <span className="footer-text">opnrs</span>
      </div>
    </div>
  )
}
