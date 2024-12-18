import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import { SliderData } from './Slider'
const Coursel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1); 
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
  
      <>  <div className='slider__container'>
          <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} auto />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                  )}
                </div>
              );
            })}
          </section>
        </div>
        <h2 className='slider__title' style={{marginTop:'200px',}}>Why Africa?</h2>
        <p className='slider__paragraph paragraph-blues'>Because Africa bears a disproportionate burden of visual impairment, with 43% of global blindness cases. Our focus on Africa addresses this disparity.</p>
        <ul className='slider__list'>
          <li className='slider__paragraph paragraph-width'>

          </li>
          <li className='slider__paragraph paragraph-width'>Extracurricular learning workshops that complement our curriculum.</li>
          <li className='slider__paragraph paragraph-width'>A safe environment that strives to promote respect, inclusion, and mutual support.</li>
          <li className='slider__paragraph paragraph-width'>English teachers who accompany students to overcome the challenges of learning a second language.</li>
        </ul>
  
      
        
      </>
  )
}

export default Coursel