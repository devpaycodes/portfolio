import React from 'react'
import './certificates.css'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../assets/certificates/pic1.png'
import pic2 from '../../assets/certificates/pic2.png'
import pic3 from '../../assets/certificates/pic5.png'
import pic4 from '../../assets/certificates/pic3.png'
import pic5 from '../../assets/certificates/pic4.png'
import pic6 from '../../assets/certificates/pic6.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  pic6, pic1, pic2, pic3, pic4, pic5
]

const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>Online Courses</h5>
      <h2>Certificates</h2>

      <Swiper className='container certificates__container'
        modules={[Pagination, Navigation]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map((avatar, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='certificate'>
                  <img src={avatar} />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Certificates