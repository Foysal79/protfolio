
import { TbCheckbox } from "react-icons/tb";

const About = () => {
    return (
        <div id='about' className=' p-16' >
            <div className=' lg:flex justify-center items-center space-y-8 ' >

            <div className=' '>
                      <img className=' border-2 border-[#FF6B00] w-64 ml-8 md:ml-0 ' src="../../../src/assets/my_profile_1.png" alt="" />
                </div>



                <div className='flex-1 space-y-10 ' >
                <div className='w-11/12 mx-auto font-Poppins' >
                <p className='text-yellow-600 mb-2 text-center ' >About me</p>
            <h3 className=' text-2xl md:text-4xl text-center uppercase font-semibold border-y-2 py-4' >Journey of a Web Developer Extraordinaire</h3>
                </div>
                <p className='font-Inter text-justify md:w-9/12 mx-auto'>
                Experienced web developer adept in HTML5, CSS3, and Tailwind CSS for sleek front-end design. Proficient in JavaScript, React.js, and React Router, crafting dynamic user interfaces. Backend expertise in Node.js, Express.js, and MongoDB for robust server-side development. Skilled in Git, GitHub, Firebase, and more, enabling seamless collaboration and deployment. Passionate about creating immersive web experiences, from design to implementation, with a comprehensive skill set covering the full development stack.
                </p>
                <div className=' md:w-9/12 mx-auto flex justify-evenly'>
                    <div>
                    <p className="flex  items-center font-bold gap-4" ><TbCheckbox className="text-[#FF6B00]" />  Front end Developer</p>
                    <p className="flex items-center font-bold gap-4" > <TbCheckbox className="text-[#FF6B00]" />React Js Developer</p>
                    </div>
                    <div>
                    <p className="flex  items-center font-bold gap-4" > <TbCheckbox className="text-[#FF6B00]" /> JavaScript Developer</p>
                    <p className="flex  items-center font-bold gap-4"> <TbCheckbox className="text-[#FF6B00]" /> MERN Developer</p>
                    </div>
                </div>
                
                

                <div className='flex justify-center' >

                <a href="https://drive.google.com/uc?export=download&id=1GDsDoTAGsVT0cQV-80qmqfD_mSZqf-8x" download>
                   
                <button className='btn  bg-[#FF6B00] text-white hover:bg-[#FF6B00] ' >Download My Resume </button>
                    </a>

                   
                   </div>

                </div>
               

            </div>
            
        </div>
    );
};

export default About;