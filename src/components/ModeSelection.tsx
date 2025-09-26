export type GameMode = 'dating' | 'couples' | 'random'

interface ModeSelectionProps {
  onModeSelect: (mode: GameMode) => void
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({
  onModeSelect
}) => {
  return (
    <div className="screen">
      <div className="mode-selection">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1>Choose Your Vibe</h1>
        </div>

        <div className="mode-buttons">
          <button
            className="mode-button"
            onClick={() => onModeSelect('dating')}
          >
            <div className="mode-button-title">Dating</div>
            <p className="mode-button-description">
              Perfect for first, second, or third dates — anytime you're still
              learning each other's vibe.
            </p>
          </button>

          <button
            className="mode-button"
            onClick={() => onModeSelect('couples')}
          >
            <div className="mode-button-title">Date Night</div>
            <p className="mode-button-description">
              For couples who want to turn an ordinary night into something
              unforgettable.
            </p>
          </button>

          <button
            className="mode-button"
            onClick={() => onModeSelect('random')}
          >
            <div className="mode-button-title">Jump to Cards</div>
            <p className="mode-button-description">
              Skip the setup and go straight to random sparks.
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
