# Desert Spark Cards with Aiesha Beasley

A mobile-only React + TypeScript web app featuring conversation starters for dating and relationships, co-branded with Phoenix lifestyle influencer Aiesha Beasley and powered by Opnrs.

## Features

### 🎯 **Conversation Modes**
- **Dating**: Perfect for first, second, or third dates
- **Date Night**: For couples wanting to turn ordinary nights into something unforgettable  
- **Jump to Cards**: Skip setup and go straight to random conversation sparks

### 📱 **Mobile Experience**
- **Portrait Mode**: Full conversation card game with swipeable questions
- **Landscape Mode**: Automatic tip calculator for dining experiences
- Mobile-first design optimized for 375-500px width
- Touch-friendly interface with large buttons

### 🧮 **Tip Calculator**
- Preset tip options (15%, 20%, 25%)
- Custom tip percentage input
- Real-time calculation of tip amount and total
- Activates automatically in landscape orientation

### 🎨 **Design**
- Fun, clean, girly aesthetic
- Pink (#FF69B4) and Deep Charcoal (#2C2C2C) color scheme
- Fredoka Google Font throughout
- Rounded buttons with soft shadows
- Responsive mobile-first layout

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Embla Carousel React** (swipeable cards)
- **Sass** (styling)
- **CSS Variables** (theming)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deserts-parks-aeisha
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
/public
  /assets
    hero-image.png    # Aiesha Beasley hero image
    opnrs-logo.svg    # Opnrs branding logo

/src
  /components
    EntryScreen.tsx      # Landing page with hero
    ModeSelection.tsx    # Choose conversation mode
    CardSwiper.tsx       # Main card interface
    AboutPage.tsx        # About information
    TipCalculator.tsx    # Landscape tip calculator

  /data
    dating.json          # Dating conversation questions
    couples.json         # Couples conversation questions

  App.tsx               # Main app component
  main.tsx             # App entry point
  index.css            # Global styles and CSS variables
```

## Data

The app includes curated conversation questions:
- **22 dating questions** for new relationships
- **20 couples questions** for established relationships
- Questions are Phoenix-themed and lifestyle-focused

## Deployment

This app is designed to be deployed as a static site and works with:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Contributing

This is a collaboration between Aiesha Beasley and Opnrs. For questions or contributions, please reach out to the development team.

## License

Private project - All rights reserved.
