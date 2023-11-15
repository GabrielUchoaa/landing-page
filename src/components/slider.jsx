import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay} from "swiper";
import Top from "./Top-content"

import "swiper/css/autoplay"
import "swiper/css"


export default function Slider() {
    return (


<Swiper
spaceBetween={100}
slidesPerView={1}
loop={true}
autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}


  modules={[Autoplay]}
>
<SwiperSlide><Top /></SwiperSlide>
<SwiperSlide><Top /></SwiperSlide>
<SwiperSlide><Top /></SwiperSlide>

</Swiper>


    )
}