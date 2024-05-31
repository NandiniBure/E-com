import React from 'react'
import { FaLocationArrow, FaMobile } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const BannerImg={
    backgroundImage:`url(./assets/website/footer-pattern.jpg)`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
}

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

const Footer = () => {
  return (
    <div
    style={BannerImg}
     className='text-white mb-20'>
        <div className=' container'>
            <div 
            data-aos="zoom-in"
            className=' grid md:grid-cols-3 pv-44 pt-5'>
                {/* company details */}
                <div className=' py-8 px-4'>
                    <h1
                    className=' sm:text-3xl text-xl font-bold sm:text-left
                    text-justify mb-3 flex items-center gap-3'
                    >
                    <img src='./assets/logo.png'
                    alt=''
                    className='max-w-[50px] '
                    ></img>
                    Shopsy</h1>
                    <p>
                    Line 133:32:  The href attri
                    bute requires a valid value to be
                     accessible. Provide a valid, navigable 
                     address as the href value. If you cannot provide a   
                    </p>

                </div>
                 {/* Footer links */}
                 <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
                 
                {/* social links */}
                <div>
                    <div className=' items-center flex gap-3 mt-6'>
                        <a href='#'>
                            <FaInstagram
                            className=' text-3xl'></FaInstagram>
                        </a>
                        <a href='#'>
                            <FaFacebook
                                className=' text-3xl'
                            />
                            
                        </a>
                        <a href='#'>
                            <FaLinkedinIn
                            className=' text-3xl'></FaLinkedinIn>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className=' flex items-center gap-3'>
                          <FaLocationArrow></FaLocationArrow>
                          <p>Noida,Uttar Pradesh</p>
                        </div>
                        <div className=' flex items-center gap-3 mt-3'>
                          <FaMobile></FaMobile>
                          <p>+91 123456789</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;
