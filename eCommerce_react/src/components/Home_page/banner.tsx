import { GrSecure } from 'react-icons/gr'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

import Img from '../../assets/Banner/women.jpg'


// create a function 'Banner'
function Banner(){
    return(
        <div className="min-h-[650px] flex justify-center 
             items-center py-12 sm:py-2">
        <div className="container" >
            <div className='grid grid-cols-1 sm:grid-cols-2
             gap-6 items-center'>
        <img  src={Img} alt='' className='max-w-[400px] h-[350px] w-full
                mx-auto drop-shadow-lg rounded-md object-cover'
            style={{ boxShadow: '-10px 10px 12px rgba(0, 0, 0, 0.25)' }} />
                <div className='flex flex-col justify-center
                gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                        Winter Sale upto 50% off
                      </h1>
                    <p className='text-sm text-gray-500 tracking-wide
                    leading-5'>
                         Stay warm and stylish this season with our exclusive Winter Sale. 
                         Enjoy up to 50% off on top fashion picks  from cozy layers to cold-weather essentials. 
                         Hurry, limited-time deals won't last long!
                    </p>
                    <div className='flex flex-col gap-4'>
                            <div className='flex-items-center gap-4'>
                        <GrSecure className='text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full bg-violet-100
                            dark:bg-slate-400'/>
                              <p>Quality Products</p>
                    </div>
                         <div className='flex-items-center gap-4'>
                            <CiDeliveryTruck className='text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full bg-orange-100
                            dark:bg-orange-400'
                            />
                           <p>Fast Delivery</p>
                    </div>
                <div className='flex-items-center gap-4'>
                            < MdOutlinePayment className='text-4xl h-12 w-12
                            shadow-sm p-4 rounded-full bg-green-100
                            dark:bg-green-400'
                            />
            <p>Easy Payment Method</p>
                           </div>
                    <div className='flex-items-center gap-4'>
                    <MdOutlinePayment className='text-4xl h-12 w-12 
                             shadow-sm p-4 pb- 6 rounded-full bg-pink-100
                            dark:bg-pink-400'
                            />
                           <p>Get Offers</p>
                         </div>
                    </div>   
    </div>
</div>
            
            {/* Place a blue bar below the banner image */}
            <div className='w-full bg-primary text-white text-xl
                         py-6  text-center px-3 mt-10 shadow-md'>
        </div>                
</div>
</div>
    )
}
export default Banner