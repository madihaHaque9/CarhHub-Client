



// import required modules


import slide1 from '../../assets/Slider/slider-1.jpg'
import slide2 from '../../assets/Slider/slider-2.jpg'
import slide3 from '../../assets/Slider/slider-3.jpg'

const Banner = () => {
    return (
        <>
            <div className="carousel w-full max-w-screen-xl mx-auto mt-0">
  <div id="item1" className="carousel-item w-full">
    <img src={slide1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={slide2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={slide3} className="w-full" />
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  
</div>
        </>
    );
};

export default Banner;