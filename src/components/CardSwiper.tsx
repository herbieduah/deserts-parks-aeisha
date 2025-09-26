import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { GameMode } from './ModeSelection'
import { PrevButton, NextButton } from './SwiperArrowButtons'
import { datingQuestions } from '../data/datingQuestions'
import { couplesQuestions } from '../data/couplesQuestions'

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
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  // Load questions based on mode using static imports
  useEffect(() => {
    let questionsData: string[] = []

    if (mode === 'dating') {
      questionsData = datingQuestions
    } else if (mode === 'couples') {
      questionsData = couplesQuestions
    } else {
      // Random mode - combine both datasets
      questionsData = [...datingQuestions, ...couplesQuestions]
    }

    // Shuffle questions for random order
    const shuffled = questionsData
      .map((text) => ({ text }))
      .sort(() => Math.random() - 0.5)

    setQuestions(shuffled)
  }, [mode])

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
            setSwiperInstance(swiper) // Set state to trigger re-render of buttons
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
            <PrevButton swiperInstance={swiperInstance} />
            <NextButton swiperInstance={swiperInstance} />
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
