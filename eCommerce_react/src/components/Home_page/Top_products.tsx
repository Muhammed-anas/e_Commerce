import { FaStar } from 'react-icons/fa6'
import { Link } from "react-router-dom";

import Img1 from '../../assets/Top/dress.jpg';
import Img2 from '../../assets/Top/dress2.jpg';
import Img3 from '../../assets/Top/dress3.jpg';


const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethnics",
        rating:5.0,
        color:"Pink",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Men Wear",
        rating:4.5,
        color:"Black",
        aosDelay:"0",
    },
    {
        id:3,
        img:Img3,
        title:"Kids wear",
        rating:5.0,
        color:"brown",
        aosDelay:"200",
    },
   
]

function TopProduct(){
    return(
    <div className="mt-6 mb-8" >
    <div className="container">
         <div className="text-center mb-10 max-w-[600px]
                mx-auto">
            <p className="text-3xl text-primary font-serif font-semibold pb-20 ">Trending Now</p>
            <h1 className="text-3xl font-bold pb-2 ">Discover Top Fashion Picks for Men, Women & Kids</h1>
            <p className="text-lg text-gray-700">Discover the latest trends in fashion for everyone — from women's, men's, and kids' styles to accessories and more.</p>
        </div>
         <div>
           <div className='grid grid-cols-1 sm:grid-cols-3
                    md:grid-cols-3 lg:grid-cols-3 place-items-center gap-5'>
                    {ProductsData.map((data) => (
                        <div key ={data.id} 
                        className='space-y-3 hover:shadow-2xl overflow-hidden
                         transform transition duration-300 hover:scale-105'>
                    <img
                            src={data.img} alt=''
                className='h-[300px] w-[220px]
                        object-cover rounded-md' />
            <div>
                <h3 className='font-semibold mx-4'>
                        {data.title} </h3>
                    <p className='text-sm text-gray-600 mx-4'>
                        {data.color}
                   </p>
                      <div className='flex items-center gap-1 mx-4 pb-3'>


                    <FaStar className='text-pink-200'/>
                    <span>{data.rating}</span>
                                     </div>
                    </div>
                            </div>       
                    ))
                    }
                     </div>

                     {/* create a button to navigate all_dress section */}
                    <div  className='py-6   text-center text-2xl font-serif font-medium '>
                        <Link to="/all_dress">
                        <button className=' bg-primary w-40 rounded-full text-white'>
                            <h2>View All</h2>
                        </button>
                        </Link>
                          </div>
                     </div>
                         </div>
     </div>

    )
}
export default TopProduct