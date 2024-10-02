import React from 'react'
import './testimonials.css'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Deven Doe',
    review: 'some review text'
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review: 'some review text'
  },
  {
    avatar: AVTR3,
    name: 'Janu Doe',
    review: 'some review text'
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review: 'some review text'
  },
  {
    avatar: AVTR3,
    name: 'Janu Doe',
    review: 'some review text'
  },
  {
    avatar: AVTR4,
    name: 'kalu Doe',
    review: 'some review text'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination, Navigation]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials