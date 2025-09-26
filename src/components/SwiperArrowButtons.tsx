import React, { ComponentPropsWithRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'

type PropType = ComponentPropsWithRef<'button'> & {
  swiperInstance?: SwiperType | null
}

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, swiperInstance, ...restProps } = props

  // Track if touch event was handled to prevent duplicate execution
  let touchHandled = false

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If touch was already handled, don't execute click
    if (touchHandled) {
      touchHandled = false
      return
    }
    e.preventDefault()
    e.stopPropagation()

    // Safari-compatible: Try multiple ways to access Swiper
    if (swiperInstance && typeof swiperInstance.slidePrev === 'function') {
      swiperInstance.slidePrev()
    } else {
      // Fallback: Try to get Swiper instance directly from DOM
      const swiperContainer = document.querySelector('.swiper-container') as any
      if (
        swiperContainer?.swiper &&
        typeof swiperContainer.swiper.slidePrev === 'function'
      ) {
        swiperContainer.swiper.slidePrev()
      }
    }
  }

  // iOS Safari-specific touch event handling
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    // Don't preventDefault on touchstart for iOS Safari - it interferes with click events
    e.stopPropagation()
    touchHandled = false
  }

  // iOS Safari requires touchend for reliable button interactions
  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    touchHandled = true

    // Safari-compatible: Try multiple ways to access Swiper
    if (swiperInstance && typeof swiperInstance.slidePrev === 'function') {
      swiperInstance.slidePrev()
    } else {
      // Fallback: Try to get Swiper instance directly from DOM
      const swiperContainer = document.querySelector('.swiper-container') as any
      if (
        swiperContainer?.swiper &&
        typeof swiperContainer.swiper.slidePrev === 'function'
      ) {
        swiperContainer.swiper.slidePrev()
      }
    }
  }

  return (
    <button
      className="swiper__button swiper__button--prev"
      type="button"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        cursor: 'pointer' // Required for iOS Safari touch event registration
      }}
      {...restProps}
    >
      <svg className="swiper__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, swiperInstance, ...restProps } = props

  // Track if touch event was handled to prevent duplicate execution
  let touchHandled = false

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If touch was already handled, don't execute click
    if (touchHandled) {
      touchHandled = false
      return
    }
    e.preventDefault()
    e.stopPropagation()

    // Safari-compatible: Try multiple ways to access Swiper
    if (swiperInstance && typeof swiperInstance.slideNext === 'function') {
      swiperInstance.slideNext()
    } else {
      // Fallback: Try to get Swiper instance directly from DOM
      const swiperContainer = document.querySelector('.swiper-container') as any
      if (
        swiperContainer?.swiper &&
        typeof swiperContainer.swiper.slideNext === 'function'
      ) {
        swiperContainer.swiper.slideNext()
      }
    }
  }

  // iOS Safari-specific touch event handling
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    // Don't preventDefault on touchstart for iOS Safari - it interferes with click events
    e.stopPropagation()
    touchHandled = false
  }

  // iOS Safari requires touchend for reliable button interactions
  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    touchHandled = true

    // Safari-compatible: Try multiple ways to access Swiper
    if (swiperInstance && typeof swiperInstance.slideNext === 'function') {
      swiperInstance.slideNext()
    } else {
      // Fallback: Try to get Swiper instance directly from DOM
      const swiperContainer = document.querySelector('.swiper-container') as any
      if (
        swiperContainer?.swiper &&
        typeof swiperContainer.swiper.slideNext === 'function'
      ) {
        swiperContainer.swiper.slideNext()
      }
    }
  }

  return (
    <button
      className="swiper__button swiper__button--next"
      type="button"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        cursor: 'pointer' // Required for iOS Safari touch event registration
      }}
      {...restProps}
    >
      <svg className="swiper__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  )
}
