import { FaStar } from 'react-icons/fa6'

import Img1 from '../../assets/Men_products/chris.jpg'
import Img2 from '../../assets/Men_products/tom.jpg'
import Img3 from '../../assets/Men_products/hiddle.jpg'
import Img4 from '../../assets/Men_products/evans.jpg'
import Img5 from '../../assets/Men_products/hems.jpg'

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Men hoody",
        rating:5.0,
        color:"Black",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Formal wear",
        rating:4.5,
        color:"White",
        aosDelay:"0",
    },
    {
        id:3,
        img:Img3,
        title:" Men Coats",
        rating:5.0,
        color:"Black",
        aosDelay:"200",
    },
    {
        id:4,
        img:Img4,
        title:"Inner wear",
        rating:4.6,
        color:"White",
        aosDelay:"400",
    },
    {
        id:5,
        img:Img5,
        title:"Fashion shirt",
        rating:4.8,
        color:"White",
        aosDelay:"0",
    },
]

// create a function 'product' for men section
function Product(){
    return(
        <div className="mb-12 py-24 bg-gray-200">
    <div className="container ">
    <div className="text-center mb-10 max-w-[600px]
                      mx-auto">
            <p className="text-3xl text-primary pb-5 font-serif font-semibold">Top Selling products for you</p>
                    
                      <p className="text-lg text-gray-700 pb-8">Discover the latest trends in men's fashion.</p>
        </div>
        <div>
            <div className='grid grid-cols-3 sm:grid-cols-3
                            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>

                {/*Use the map function to call the different datas many times  */}
            {ProductsData.map((data) => (
                        <div key ={data.id} 
                        className='space-y-3   hover:shadow-2xl  transform transition duration-300 hover:scale-105'>
                            <img
                            src={data.img}
                            alt=''
                      className="h-[200px] sm:h-[250px] md:h-[300px] w-[180px]
                             sm:w-[200px] md:w-[220px] object-cover rounded-md" />
                        <div>
                        <h3 className='font-semibold px-4'>
                        {data.title} </h3>
                        <p className='text-sm text-gray-600 px-4'>
                                        {data.color}
                            </p>
                            <div className='flex items-center gap-1 px-4 pb-3'>

                                
                            <FaStar className='text-pink-200'/>
                                     <span>{data.rating}</span>
        </div>
        </div>
            </div>
                            
     ))}

         </div>
         </div>
     </div>
</div>

    )
}
export default Product
