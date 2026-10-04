 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.jpg'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.jpg'
import img6 from '../../../assets/home/06.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={true} 
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src={img1} alt="Banner 1" /> 
        </div>

        <div>
          <img src={img2} alt="Banner 2" /> 
        </div>

        <div>
          <img src={img3} alt="Banner 3" /> 
        </div>

        <div>
          <img src={img4} alt="Banner 4" /> 
        </div>
        <div>
          <img src={img5} alt="Banner 4" /> 
        </div>
        <div>
          <img src={img6} alt="Banner 4" /> 
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
 
