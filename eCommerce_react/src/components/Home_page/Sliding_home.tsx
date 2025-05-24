import Image1 from "../../assets/sliding/women.png"
import Image2 from "../../assets/sliding/shopping.png"
import Image3 from "../../assets/sliding/sale.png"
import Slider from "react-slick"
import { Link } from "react-router-dom";


const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Trendy Women's Fashion – Flat 40% Off",
        description:
        "Discover the season's most stylish picks in women's dresses, tops, and accessories. Limited time offer!",
    },
    {
        id: 2,
        img: Image2,
        title: "Limited-Time Offer on Fashion Dresses",
        description:
        "Shop coordinated looks and trending styles in men's and women's fashion. Limited time offers!",
    },
    {
        id: 3,
        img: Image3,
        title: "Top Collection Now Live -  Up to 70% Off",
        description:
        "Colorful, comfortable, and cute — explore our latest kids' wear designed for fun and everyday adventure.",
    },
]


// create for sliding functionality in home page
function Sliding (){

    var settings = {
        dots:false,
        arrows:false,
        speed: 800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
      }
    return(
        <div className="relative overflow-hidden
          min-h-[550px]
        sm:min-h-[650px] bg-gray-100
         flex justify-center
        items-center dark:bg-gray-950
         dark:text-white duration-200 ">
            
            <div className="absolute -top-1/2 right-0
             h-[700px] w-[700px] bg-primary/40
              rounded-3xl rotate-45 z-0" />
            <div className="container relative z-10 pb-8 sm:pb-0">

            {/* setting the slider function */}
            <Slider {...settings}>
                    {ImageList.map((item) => (
                            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4
                                 pt-12 sm:pt-0
                                text-center sm:text-left
                                order-2 sm:order-1 relative z-10">
            <h1 className="text-5xl sm:text-6xl
                        lg:text-7xl font-bold">
                {item.title}</h1>
                <p className="text-sm">
                 {item.description}
                </p>
                    <div>
                <Link to="/all_dress">
                    <button className="bg-gradient-to-t from-primary
                         to-secondary hover:scale-105 
                        duration-200 text-white  py-2 px-4 rounded-full" >
                         Order Now
                        </button>
                            </Link>
                </div>
                                </div>
                <div className="order-1 sm:order-2">
                   <div>
                <img src={item.img} alt=""
                className="w-[300px] h-[300px] sm:h-[450px]
                        sm:w-[450px] sm:scale-100 lg:scale-120 object-contain mx-auto" />
                                    </div>
                                </div>
             </div>
                </div>
                        ))}
                    </Slider>


            </div>         
            </div>
     )
}
export default Sliding