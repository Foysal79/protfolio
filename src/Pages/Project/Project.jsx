import React from 'react';
import { TbCheckbox } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import Title from '../../Components/Title';
import { BsCalendar2Date } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div id='project' className='mb-10 lg:mt-24' >
            <Title SubHeading={"MY RECENT PORTFOLIO"} heading={"MY Project"} ></Title>

            <div className='w-11/12 mx-auto space-y-8' >
                {/* Project 1 */}
                <h2 className=' text-xl ml-6 lg:text-3xl font-semibold font-Poppins mb-4 ' >OnTrip ( Travel Guide Website )</h2>
                <div className='lg:flex items-center ' >
                    <div className='flex-1  ' >
                        {/* <h2 className='text-center text-xl font-bold font-Poppins my-3 ' >Project img</h2> */}
                    <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-11/12 mx-auto' src="../../../src/assets/OnTrip/p1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto'  src="../../../src/assets/OnTrip/p2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto' src="../../../src/assets/OnTrip/p3.png" alt="" />
        </SwiperSlide>
        
                    </Swiper>


                    </div>
                    <div className='flex-1  py-4 px-5' >
                        <h1 className='text-xl font-Poppins font-bold' >OnTrip ( Travel Guide Website )</h1>
                        <p className='text-lg font-Poppins font-semibold flex items-center gap-2' >
                        <BsCalendar2Date className='text-[#FF6B00]' />
                           Date :11/2023 - 12/2023
                        </p>
                        <h5 className='text-base font-Poppins font-semibold'  >admin Gmail : admin@gmail.com .</h5>
                        <h5 className='text-base font-Poppins font-semibold'  >password : admin@gmail.com .</h5>
                        <ul className='space-y-2 my-4' >
                            <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-4xl" /> Select your ideal tour package at OnTrip, where you curate your
                                adventure and choose your guide for an unparalleled travel
                                experience .</li>
                                <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-2xl" />
                                Tourists review guides, and share travel tales on OnTrip's platform .
                                </li>
                                <li className='flex items-center gap-6 font-Inter'> <TbCheckbox className="text-[#FF6B00] text-2xl" />
                                Three role of OnTrip Website - Admin, Guide, Tourist .

                                </li>
                        </ul>
                        
                        <div className='lg:flex '>
                        <Link to="https://ontrip-d851d.web.app" >
                        <button  className='btn mr-5 mb-4  text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <RiLiveLine className=' text-2xl' /> Live Link</button>
                        </Link>
                        <Link to="https://github.com/Foysal79/OnTrip-Client-side-ReactJs" >
                        <button className=' btn text-lg mr-5 mb-4  font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> Client side Code</button>

                        </Link>
                        
                        <Link to="https://github.com/Foysal79/OnTrip-Server-side-nodeJs" >
                        <button className='btn mb-4 text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> server side Code</button>
                        
                        </Link>
                        

                        </div>

                    </div>

                </div>
                <div className="divider divider-warning"></div>




                {/* Project 2 */}
                <h2 className=' text-xl ml-6 lg:text-3xl font-semibold font-Poppins mb-4 text-end ' >GoExplor ( Agency base Travel Website )</h2>
                <div className='lg:flex flex-row-reverse items-center' >
                    <div className='flex-1  ' >
                        {/* <h2 className='text-center text-xl font-bold font-Poppins my-3 ' >Project img</h2> */}
                    <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-11/12 mx-auto' src="../../../src/assets/GoExplor/p1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto'  src="../../../src/assets/GoExplor/p2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto' src="../../../src/assets/GoExplor/p3.png" alt="" />
        </SwiperSlide>
        
                    </Swiper>


                    </div>
                    <div className='flex-1  py-4 px-5' >
                        <h1 className='text-xl font-Poppins font-bold' >GoExplor ( Agency base Travel Website ) </h1>
                        <p className='text-lg font-Poppins font-semibold flex items-center gap-2' >
                        <BsCalendar2Date className='text-[#FF6B00]' />
                           Date : 10/2023 - 11/2023

                        </p>
                        
                        <ul className='space-y-2 my-4' >
                            <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-4xl" /> GoExplor Totally agency base tur travel guide . difference agencies can add the packages and if tourist like
                              package tourist can book .</li>
                                <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-2xl" />
                                Login & Registration systems using firebase .
                                </li>
                                <li className='flex items-center gap-6 font-Inter'> <TbCheckbox className="text-[#FF6B00] text-3xl" />
                                If user is login user , he or she can add any travel service and delate and update own Added Package.

                                </li>
                        </ul>
                        
                        <div className='lg:flex '>
                        <Link to="https://goexplor-e8ca8.web.app/" >
                        <button  className='btn mr-5 mb-4  text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <RiLiveLine className=' text-2xl' /> Live Link</button>
                        </Link>
                        <Link to="https://github.com/Foysal79/GoExplor-client-side-reacrJs" >
                        <button className=' btn text-lg mr-5 mb-4  font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> Client side Code</button>

                        </Link>
                        
                        <Link to="https://github.com/Foysal79/GoExplor-server-side-nodeJs" >
                        <button className='btn mb-4 text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> server side Code</button>
                        
                        </Link>
                        

                        </div>

                    </div>

                </div>





                <div className="divider divider-warning"></div>
                {/* Project 3 */}
                <h2 className=' text-xl ml-6 lg:text-3xl font-semibold font-Poppins mb-4 ' >Brand-Shop ( Online Shopping website )</h2>
                <div className='lg:flex items-center' >
                    <div className='flex-1  ' >
                        {/* <h2 className='text-center text-xl font-bold font-Poppins my-3 ' >Project img</h2> */}
                    <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-11/12 mx-auto' src="../../../src/assets/highStyle/p1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto'  src="../../../src/assets/highStyle/p2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-11/12 mx-auto' src="../../../src/assets/highStyle/p3.png" alt="" />
        </SwiperSlide>
        
                    </Swiper>


                    </div>
                    <div className='flex-1  py-4 px-5' >
                        <h1 className='text-xl font-Poppins font-bold' >Brand-Shop ( Online Shopping website )</h1>
                        <p className='text-lg font-Poppins font-semibold flex items-center gap-2' >
                        <BsCalendar2Date className='text-[#FF6B00]' />
                           Date : 09/2023 - 10/2023
                        </p>
                       
                        <ul className='space-y-2 my-4' >
                            <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-4xl" /> This platform empowers customers to procure premium fashion and apparel from world-class luxury brands .</li>
                                <li className='flex items-center gap-6 font-Inter' > <TbCheckbox className="text-[#FF6B00] text-4xl" />
                                Easily categorize and update products of your choice with personalized preferences using this websites interface . 
                                </li>
                                <li className='flex items-center gap-6 font-Inter'> <TbCheckbox className="text-[#FF6B00] text-3xl" />
                                Any Products Purchased by the customer will be displayed directly in the My Card session .

                                </li>
                        </ul>
                        
                        <div className='lg:flex '>
                        <Link to="https://leafy-lokum-545b2b.netlify.app/" >
                        <button  className='btn mr-5 mb-4  text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <RiLiveLine className=' text-2xl' /> Live Link</button>
                        </Link>
                        <Link to="https://github.com/Foysal79/High-Hstyle-client-side-react" >
                        <button className=' btn text-lg mr-5 mb-4  font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> Client side Code</button>

                        </Link>
                        
                        <Link to="https://github.com/Foysal79/High-Hstyle-server-side-react" >
                        <button className='btn mb-4 text-lg font-bold font-Poppins bg-[#FF6B00] hover:bg-[#FF6B00] text-white ' > <ImGithub className=' text-2xl' /> server side Code</button>
                        
                        </Link>
                        

                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Project;