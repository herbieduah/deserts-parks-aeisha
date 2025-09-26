import React from 'react'

export type GameMode = 'dating' | 'couples' | 'random'

interface ModeSelectionProps {
  onModeSelect: (mode: GameMode) => void
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({
  onModeSelect
}) => {
  return (
    <div className="mode-selection">
      <h2>Choose Your Vibe</h2>

      <button className="mode-button" onClick={() => onModeSelect('dating')}>
        <h3>Dating</h3>
        <p>
          Perfect for first, second, or third dates — anytime you're still
          learning each other's vibe.
        </p>
      </button>

      <button className="mode-button" onClick={() => onModeSelect('couples')}>
        <h3>Date Night</h3>
        <p>
          For couples who want to turn an ordinary night into something
          unforgettable.
        </p>
      </button>
    </div>
  )
}
