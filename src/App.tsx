import { useState, useEffect } from 'react'
import { EntryScreen } from './components/EntryScreen'
import { ModeSelection, GameMode } from './components/ModeSelection'
import { CardSwiper } from './components/CardSwiper'
import { AboutPage } from './components/AboutPage'
import { TipCalculator } from './components/TipCalculator'

type Screen = 'entry' | 'mode-selection' | 'cards' | 'about' | 'tip-calculator'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('entry')
  const [selectedMode, setSelectedMode] = useState<GameMode>('random')
  const [isLandscape, setIsLandscape] = useState(false)

  // Check orientation
  useEffect(() => {
    const checkOrientation = () => {
      const landscape =
        window.innerHeight < window.innerWidth && window.innerHeight < 500
      setIsLandscape(landscape)

      // Auto-switch to tip calculator in landscape mode
      if (landscape && currentScreen !== 'tip-calculator') {
        setCurrentScreen('tip-calculator')
      }
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', () => {
      // Small delay to ensure orientation change is complete
      setTimeout(checkOrientation, 100)
    })

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [currentScreen])

  const handleStart = () => {
    setCurrentScreen('mode-selection')
  }

  const handleModeSelect = (mode: GameMode) => {
    setSelectedMode(mode)
    setCurrentScreen('cards')
  }

  const handleAbout = () => {
    setCurrentScreen('about')
  }

  const handleBackToCards = () => {
    setCurrentScreen('cards')
  }

  const handleBackToModeSelection = () => {
    setCurrentScreen('mode-selection')
  }

  const handleBackFromTipCalculator = () => {
    // Return to the last non-tip-calculator screen
    if (selectedMode) {
      setCurrentScreen('cards')
    } else {
      setCurrentScreen('entry')
    }
  }

  // Force tip calculator in landscape mode
  if (isLandscape) {
    return (
      <div className="app-container">
        <TipCalculator onBack={handleBackFromTipCalculator} />
      </div>
    )
  }

  // Portrait mode screens
  return (
    <div className="app-container">
      {currentScreen === 'entry' && <EntryScreen onStart={handleStart} />}

      {currentScreen === 'mode-selection' && (
        <ModeSelection onModeSelect={handleModeSelect} />
      )}

      {currentScreen === 'cards' && (
        <CardSwiper
          mode={selectedMode}
          onAbout={handleAbout}
          onBack={handleBackToModeSelection}
        />
      )}

      {currentScreen === 'about' && <AboutPage onBack={handleBackToCards} />}
    </div>
  )
}

export default App
