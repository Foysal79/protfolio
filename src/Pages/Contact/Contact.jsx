
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udrxgrm', 'template_4z4xmrr', form.current, 'wgsfUVvl02JqRL8xD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div id="Contact" className=" lg:mt-24" >
            <div className='md:w-5/12 mx-auto text-center my-10 font-Poppins ' >
            <p className='text-yellow-600 mb-2 ' >My Contact</p>
            <h3 className='text-4xl uppercase font-semibold border-y-2 py-4' >I WANT TO HEAR FROM YOU</h3>
            
            </div>

            <div className="lg:flex w-11/12 mx-auto my-16" >
                <div className="flex-1 lg:p-10" >
                     <div className=' py-10 lg:pl-4 space-y-10 lg:mr-36' >
                        <div className='bg-black text-white rounded-xl p-4  lg:p-6 space-y-4'>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Phone</h1>
                            <p className='text-xl font-Inter font-medium' >+8801879953325</p>
                            <p className='text-xl font-Inter font-medium' >+8801873189853</p>
                            </div>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Email</h1>
                            <p className='text-xl font-Inter font-medium' >foysal.nur.onthor@gmail.com</p>
                                
                            </div>
                            <div>
                            <h1 className='text-3xl font-bold font-Poppins' >Address</h1>
                            <p className='text-xl font-Inter font-medium' >chittagong , Bangladesh .</p>
                                
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='text-3xl font-bold mb-10' >Following Me : </h2>
                            <div className='flex items-center' >
                            <Link to="https://www.linkedin.com/in/foysal-nur-onthor" ><img  className='w-36 h-16 mr-10' src="../../../src/assets/LinkedIn_Logo.svg.png" alt="" /></Link>
                            <Link to="https://www.facebook.com/spider079" >
                            <img className='w-36 ' src="../../../src/assets/Facebook-Logo-2019.png" alt="" />
                            </Link>
                            </div>

                        </div>
                        

                     </div>
                </div>
                <div className="flex-1 " >
                    <h2 className='text-xl border-b-2 pb-4 font-Poppins font-semibold text-center my-6 mx-4 ' >If you have any porject or need help. Contact me</h2>
                  {/* form */}
                <form ref={form} onSubmit={sendEmail} className='flex flex-col border-2 p-6 bg-black rounded-lg' >
                  <label className='text-xl font-bold font-Poppins text-white' >Name</label>
                  <input className='px-4 py-2 rounded-lg' type="text" name="from_name" />
                 <label  className='text-xl font-bold font-Poppins text-white'  >Email</label>
                    <input className='px-4 py-2 rounded-lg' type="email" name="from_email" />
                 <label  className='text-xl font-bold font-Poppins text-white'  >Phone Number</label>
                    <input className='px-4 py-2 rounded-lg text-black' type="text" name="from_phone" />
                 <label  className='text-xl font-bold font-Poppins text-white'  >Message</label>
                  <textarea className='px-4 py-2 rounded-lg mb-4 h-32'  name="message" />
                  <input className='btn text-xl font-Poppins font-bold bg-[#FF6B00] hover:bg-[#FF6B00] text-white' type="submit" value="Send" />
                 </form>



                </div>
            </div>
            
        </div>
    );
};

export default Contact;