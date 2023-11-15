import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay} from "swiper";
import Costumer from "./costumer.jsx"

import "swiper/css/autoplay"
import "swiper/css"


export default function SecondSlider() {
    return (


<Swiper
spaceBetween={100}
slidesPerView={1}
loop={true}
autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}

  modules={[Autoplay]}
>
<SwiperSlide><Costumer /></SwiperSlide>
<SwiperSlide><Costumer /></SwiperSlide>
<SwiperSlide><Costumer /></SwiperSlide>

</Swiper>


    )
}