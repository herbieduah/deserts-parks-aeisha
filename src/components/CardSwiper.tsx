import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { GameMode } from './ModeSelection'

interface Question {
  text: string
}

interface CardSwiperProps {
  mode: GameMode
  onAbout: () => void
}

export const CardSwiper: React.FC<CardSwiperProps> = ({ mode, onAbout }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    dragFree: false
  })
  const [questions, setQuestions] = useState<Question[]>([])
  const [, setCurrentIndex] = useState(0)
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

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (loading) {
    return (
      <div className="screen screen-center">
        <div className="card card-large">
          <p>Loading questions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="screen">
      {/* Header */}
      <div className="header">
        <div>
          <div className="header-title">Desert Spark Cards</div>
          <div className="header-subtitle">with Aiesha Beasley</div>
        </div>
        <button className="header-link" onClick={onAbout}>
          About
        </button>
      </div>

      {/* Card Carousel */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <div className="embla" ref={emblaRef} style={{ width: '100%' }}>
          <div className="embla__container" style={{ display: 'flex' }}>
            {questions.map((question, index) => (
              <div
                key={index}
                className="embla__slide"
                style={{ flex: '0 0 100%', minWidth: 0 }}
              >
                <div className="card card-large">
                  <p
                    style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0 }}
                  >
                    {question.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>Powered by</span>
        <img src="/assets/opnrs-logo.svg" alt="Opnrs" />
      </div>
    </div>
  )
}
