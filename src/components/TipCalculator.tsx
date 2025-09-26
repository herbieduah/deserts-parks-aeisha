import React, { useState, useCallback } from 'react'

interface TipCalculatorProps {
  onBack: () => void
}

export const TipCalculator: React.FC<TipCalculatorProps> = ({ onBack }) => {
  const [billAmount, setBillAmount] = useState<string>('')
  const [tipPercentage, setTipPercentage] = useState<number>(20)
  const [customTip, setCustomTip] = useState<string>('')
  const [isCustom, setIsCustom] = useState<boolean>(false)

  const calculateTip = useCallback(() => {
    const bill = parseFloat(billAmount) || 0
    const tip = isCustom ? parseFloat(customTip) || 0 : tipPercentage
    const tipAmount = (bill * tip) / 100
    const total = bill + tipAmount

    return {
      tipAmount: tipAmount.toFixed(2),
      total: total.toFixed(2)
    }
  }, [billAmount, tipPercentage, customTip, isCustom])

  const { tipAmount, total } = calculateTip()

  const handlePresetTip = (percentage: number) => {
    setTipPercentage(percentage)
    setIsCustom(false)
    setCustomTip('')
  }

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value)
    setIsCustom(true)
  }

  return (
    <div className="screen" style={{ padding: '20px' }}>
      <div className="header" style={{ padding: '0 0 20px 0', border: 'none' }}>
        <button className="header-link" onClick={onBack}>
          ← Cards
        </button>
        <div className="header-title">Tip Calculator</div>
        <div></div>
      </div>

      <div
        className="content-stack"
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        {/* Bill Amount Input */}
        <div className="card">
          <label
            style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
          >
            Bill Amount ($)
          </label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="0.00"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.2rem',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family)',
              textAlign: 'center'
            }}
          />
        </div>

        {/* Preset Tip Buttons */}
        <div className="card">
          <label
            style={{
              display: 'block',
              marginBottom: '16px',
              fontWeight: '500'
            }}
          >
            Tip Percentage
          </label>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            {[15, 20, 25].map((percentage) => (
              <button
                key={percentage}
                onClick={() => handlePresetTip(percentage)}
                className={`btn ${
                  !isCustom && tipPercentage === percentage
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
                style={{ flex: 1, minHeight: '48px' }}
              >
                {percentage}%
              </button>
            ))}
          </div>

          {/* Custom Tip Input */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.9rem'
              }}
            >
              Custom %
            </label>
            <input
              type="number"
              value={customTip}
              onChange={(e) => handleCustomTipChange(e.target.value)}
              placeholder="Enter custom %"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                border: `2px solid ${
                  isCustom ? 'var(--color-primary)' : 'var(--color-border)'
                }`,
                borderRadius: 'var(--border-radius)',
                fontFamily: 'var(--font-family)',
                textAlign: 'center'
              }}
            />
          </div>
        </div>

        {/* Results */}
        <div
          className="card"
          style={{ backgroundColor: 'var(--color-light-gray)' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}
          >
            <span style={{ fontWeight: '500' }}>Tip Amount:</span>
            <span
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--color-primary)'
              }}
            >
              ${tipAmount}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '12px',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>
              Total:
            </span>
            <span
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--color-secondary)'
              }}
            >
              ${total}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
