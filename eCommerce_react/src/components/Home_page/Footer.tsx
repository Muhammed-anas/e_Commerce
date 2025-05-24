import FooterLogo from '../../assets/logo.jpg'
import Banner from '../../assets/Footer/image.jpg'

import { FaLinkedin, FaMobileAlt } from 'react-icons/fa'
import { FaGlobe, FaInstagram, FaLocationArrow } from 'react-icons/fa6'


//  setting the banner image properties
const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"bottom",
    BackgroundRepeat:"no-repeat",
    BackgroundSize:"cover",
    height:"100%",
    width:"100%",
}

const FooterLinks = [
    {
        title:"Home",
        link:'/',
    },
    {
        title:"About",
        link:'/#about',
    },
    {
        title:"Contact",
        link:'/#Contact',
    },
    {
        title:"Blog",
        link:'/#blog',
    },
]

function Footer(){
    return(
        <div style={BannerImg} className="text-white mt-0">
            <div className="container mx-auto">
                <div className='grid md:grid-cols-3 py-8  '>
                    <div className='py-8 px-4'>
                       <h1 className='sm:text-3xl text-xl font-bold
                       sm:text-left text-justify mb-3 flex items-center
                       gap-3'>
                        <img src = {FooterLogo}
                        alt=''
                        className='max-w-[100px]'
                        />
                       Shopfy</h1>
                       <p>
                       Discover fashion with us  - top styles, exclusive deals, and quality you can trust.
                       </p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3
                    col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl
                            font-bold sm:text-left text-justify mb-3'>
                                Important Links        
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary
                                    hover:translate-x-1 duration-300 text-gray-200'
                                    key={link.title}
                                    >
                                      <span>{link.title}</span>
                                    </li>
                                ))}

                            </ul>
                            </div>
                        </div>
                        <div className='flex  gap-8 mt-12'>

                        <a href='https://www.linkedin.com/in/muhammedanas-ma/'>
                        <FaLinkedin className='text-3xl'/>
                        </a>
                        <a href='https://Muhammed-anas.github.io.'>
                        <FaGlobe className='text-3xl'/>
                        </a>
                        <a href='#'>
                            <FaInstagram className='text-3xl'/>
                            </a>
                                

                                </div>
                        <div className='mt-8 ml-8'>
                    <div className='flex items-center gap-3'>


              <FaLocationArrow/>
                 <p>NewYork, US</p>
                </div>
                <div className='flex items-center gap-3'>
                   <FaMobileAlt/>
                   <p>+1234567890</p>
                 </div>

                </div>
            </div>
     </div>
 </div>
 </div>

    )
}
export default Footer