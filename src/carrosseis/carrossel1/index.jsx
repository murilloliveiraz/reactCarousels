import { useState } from 'react'
import { slides } from './constants.js'
import './style.css'

const PrimeiroCarrossel = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1; 
    SetCurrentIndex(newIndex);
  }
 
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    SetCurrentIndex(newIndex)
  } 

  const goToSlide = (slideIndex) => {
    SetCurrentIndex(slideIndex)
  }

  return (
    <div className='slider'>
      <div className='rightArrow' onClick={goToPrevious}><ion-icon name="arrow-forward-circle"></ion-icon></div>
      <div className='leftArrow' onClick={goToNext}><ion-icon name="arrow-back-circle"></ion-icon></div>
      <div className='slide' style={{backgroundImage: `url(${slides[currentIndex].imgURL})`}}>
      </div>
      <div className='indexDots'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className='dots' onClick={() => goToSlide(slideIndex)}>
            ◉
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrimeiroCarrossel