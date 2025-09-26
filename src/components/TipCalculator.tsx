import React, { useState, useCallback } from 'react'

interface TipCalculatorProps {}

export const TipCalculator: React.FC<TipCalculatorProps> = () => {
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
    <div className="tip-calculator">
      <div className="tip-header">
        <h1>Tip Calculator</h1>
      </div>

      <div className="tip-form">
        {/* Bill Amount Input */}
        <div className="card bill-amount-section">
          <label
            style={{
              display: 'block',
              marginBottom: '12px',
              fontWeight: '600',
              fontSize: '0.9rem',
              color: 'var(--color-text)'
            }}
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
              padding: '20px',
              fontSize: '1.1rem',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-family)',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              marginBottom: '8px'
            }}
          />
        </div>

        {/* Preset Tip Buttons */}
        <div className="card">
          <label
            style={{
              display: 'block',
              marginBottom: '12px',
              fontWeight: '600',
              fontSize: '0.9rem',
              color: 'var(--color-text)'
            }}
          >
            Tip Percentage
          </label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            {[15, 20, 25].map((percentage) => (
              <button
                key={percentage}
                onClick={() => handlePresetTip(percentage)}
                className={`btn ${
                  !isCustom && tipPercentage === percentage
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
                style={{
                  flex: 1,
                  minHeight: '40px',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)'
                }}
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
                marginBottom: '6px',
                fontSize: '0.8rem',
                fontWeight: '500',
                color: 'var(--color-text)'
              }}
            >
              Custom %
            </label>
            <input
              type="number"
              value={customTip}
              onChange={(e) => handleCustomTipChange(e.target.value)}
              placeholder="Custom %"
              style={{
                width: '100%',
                padding: '8px 12px',
                fontSize: '0.9rem',
                border: `2px solid ${
                  isCustom ? 'var(--color-secondary)' : 'var(--color-border)'
                }`,
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-family)',
                textAlign: 'center',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)'
              }}
            />
          </div>
        </div>

        {/* Results */}
        <div
          className="card tip-results-card"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}
          >
            <span
              style={{
                fontWeight: '500',
                fontSize: '0.9rem',
                color: 'var(--color-text)'
              }}
            >
              Tip Amount:
            </span>
            <span
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--color-secondary)'
              }}
            >
              ${tipAmount} tip
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '8px',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <span
              style={{
                fontWeight: '600',
                fontSize: '1rem',
                color: 'var(--color-text)'
              }}
            >
              Total:
            </span>
            <span
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--color-secondary)'
              }}
            >
              ${total} total
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
