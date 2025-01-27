import React, { useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';
import { SliderData } from './Slider'
const Coursel = ({slides}) => {
 
    const [current, setCurrent] = useState(0);

    const length = slides.length;
    
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1); 
      ;
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
                    <img src={slide.image} alt='Desight' className='image' />
                  )}
                </div>
              );
            })}
          </section>
        </div>
        <h2 className='slider__title' style={{marginTop:'200px',}}>Why Africa?</h2>
        <p className='slider__paragraph paragraph-blues'>Africa bears a disproportionately high burden of blindness and visual impairment globally. Over 26 million people in Africa are visually impaired, with around 6 million blind, and 80% of these cases are preventable or treatable.</p>
        <ul className='slider__list'>
          <li className='slider__paragraph paragraph-width '>
          Cataracts, glaucoma, trachoma, uncorrected refractive errors, and diabetic retinopathy are leading causes of blindness in the region.
          </li>
          <li className='slider__paragraph paragraph-width'>Do you know
            that 80% of elderly's suffer blindness due to eye diseases?
          </li>
          <li className='slider__paragraph paragraph-width'>Children with uncorrected vision issues face barriers in education, limiting their future opportunities.
          </li>
          <li className='slider__paragraph paragraph-width'>Africa has a severe shortage of ophthalmologists, optometrists, and trained eye care professionals. In many countries, the ratio of ophthalmologists to population is less than 1 per million people, compared to over 100 per million in developed countries.</li>
        </ul>
        <p className='slider__paragraph paragraph-blues'>Affordable Interventions with High Impact</p>
        <ul className='slider__list'> 
          <li className='slider__paragraph paragraph-width'>A simple cataract surgery can restore sight and transform lives for under $50 in many cases.</li>
          <li className='slider__paragraph paragraph-width'>Basic corrective lenses can address uncorrected refractive errors for millions of people.</li>
          <li className='slider__paragraph paragraph-width'>Treating trachoma with antibiotics or simple surgeries can save millions from blindness.</li>
        </ul>
      
        
      </>
  )
}

export default Coursel