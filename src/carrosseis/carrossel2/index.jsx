import { useState } from 'react'
import { slides } from '../carrossel1/constants'
import './style.css'

const SegundoCarrossel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    console.log(slide)
  }
  
  const prevSlide = () => {
    setSlide( slide === 0 ? slides.length - 1 : slide - 1);
    console.log(slide)
  }

  return (
    <div className='carousel'>
      <div className='arrow arrow-left' onClick={prevSlide}>
        <ion-icon name="arrow-back-circle"></ion-icon>
      </div>
        {slides.map((item, index) => (
            <img className={slide === index ? "slide2" : "slide2 slide-hidden"} src={item.imgURL} alt={item.title} key={index} />
        ))}
        <div className='arrow arrow-right' onClick={nextSlide}>
          <ion-icon name="arrow-forward-circle"></ion-icon>
        </div>
        <span className='indicators'>
            {slides.map((_, index) => (
            <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : " indicator indicator-inactive"}></button>
        ))}</span>
    </div>
  )
}

export default SegundoCarrossel