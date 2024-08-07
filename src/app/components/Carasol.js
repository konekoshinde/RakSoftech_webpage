import { Carousel } from "./MTailwind"
 
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1 }} loop={true} autoplay={true} className="rounded-xl lg:py-10 " style={{backgroundColor:"rgb(55 65 81)"}}>
        <div className="relative mr-10 ml-10 overflow-hidden ">

      <img
        src="imgg1.jpg"
        alt="image 1"
        width={600} height={100}
        className=" object-cover animate-ping  mr-auto ml-auto "/>
        <h1 className='motion-safe:animate-bounce absolute font-mono text-justify text-sm w-1/2 p-10 mr-96 mt-5 opacity-80 delay-100 bg-orange-200 hover:bg-orange-50 text-yellow-500 font-bold bottom-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente?
        </h1>
        
        </div>
        <div className="relative mr-10 ml-10 overflow-hidden">
      <img
        src="imgg2.jpg"
        alt="image 2"
        width={600} height={100}
        className=" object-cover animate-ping  mr-auto ml-auto"
      />
        <h1 className='motion-safe:animate-bounce absolute font-mono text-justify text-sm w-1/2 p-10 mr-96 mt-5 opacity-80 delay-100 bg-orange-200 hover:bg-orange-50 text-yellow-500 font-bold top-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente?
        </h1>
      </div>
      <div className="relative mr-10 ml-10 overflow-hidden">
      <img
        src="imgg3.jpg"
        alt="image 3"
        width={600} height={100}
        className=" object-cover animate-ping  mr-auto ml-auto"
      />
      <h1 className='motion-safe:animate-bounce absolute font-mono text-justify text-sm w-1/2 p-10 mr-96 mt-5 opacity-80 delay-100 bg-orange-200 hover:bg-orange-50 text-yellow-500 font-bold bottom-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente?
        </h1>
      </div>
      <div className="relative mr-10 ml-10 overflow-hidden">
      <img
        src="imgg5.jpg"
        alt="image 3"
        width={600} height={100}
        className=" object-cover animate-ping  mr-auto ml-auto"
      />
      <h1 className='motion-safe:animate-bounce absolute font-mono text-justify text-sm w-1/2 p-10 mr-96 mt-5 opacity-80 delay-100 bg-orange-200 hover:bg-orange-50 text-yellow-500 font-bold top-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sapiente?
        </h1>
      </div>
    </Carousel>
  );
}