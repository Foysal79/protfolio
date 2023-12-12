
const Skill = () => {
    return (
        <div id="skill" className="mb-10">


            <div className='  w-5/12 mx-auto text-center my-10 font-Poppins' >
            <p className='text-yellow-600 mb-2 ' >Skill</p>
            <h3 className='text-2xl md:text-4xl uppercase font-semibold border-y-2 py-4' >PROFESSIONAL SKILLS</h3>
            
        </div>
          
          <div className="space-y-24 md:space-y-10 md:w-7/12 mx-auto grid  grid-cols-1 md:grid-cols-1 " >
            <div className="md:flex space-y-5  items-center  ">
                <h5 className="text-3xl  font-bold ml-32 md:ml-16  " >Frontend : </h5>
                        <img className="w-20 ml-40 md:ml-10" src="../../../src/assets/HTML5.png" alt="" />
                        <img className="w-20 ml-40 md:ml-10" src="../../../src/assets/css3.png" alt="" />
                        <img className="w-20 ml-40 md:ml-10" src="../../../src/assets/js.jpg" alt="" />
                        <img className="w-28 ml-40 md:ml-10" src="../../../src/assets/Reactjs.png" alt="" />
                        <img className="w-20 ml-40 md:ml-10" src="../../../src/assets/react-router.png" alt="" />
                    
            </div>

            <div className="md:flex space-y-5 items-center" >
            <h5 className=" text-3xl  font-bold ml-40 md:ml-16  " >Backend : </h5>
                        
                        <img className="w-28 ml-40 md:ml-10" src="../../../src/assets/Node.js.png" alt="" />
                        <img className="w-20 ml-40 md:ml-10" src="../../../src/assets/express-js.png" alt="" />
                        <img className="w-40 ml-40 md:ml-10" src="../../../src/assets/MongoDB.png" alt="" />
            </div>
            <div className="md:flex items-center" >
            <h5 className="text-3xl  font-bold ml-44 md:ml-16 " >Tools : </h5>
                        <img className="w-40 ml-40 md:ml-10" src="../../../src/assets/firebase.png" alt="" />
                        <img className="w-28 ml-40 md:ml-10" src="../../../src/assets/GitHub-logo.png" alt="" />
                        
            </div>
          </div>
            

                      
        </div>
    );
};

export default Skill;