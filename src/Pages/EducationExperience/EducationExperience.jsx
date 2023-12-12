

const EducationExperience = () => {
    return (
        <div id="Resume" >
            <div className='md:w-5/12 mx-auto text-center my-10 font-Poppins' >
            <p className='text-yellow-600 mb-2 ' >My Resume</p>
            <h3 className=' text-2xl lg:text-4xl uppercase font-semibold border-y-2 py-4' >EDUCATION & EXPERIENCE</h3>
            
        </div>


        <div className="bg-[#f88b3d70]" >
        <div className="w-7/12 mx-auto  p-6 space-y-20" >

<div className="lg:flex items-center lg:gap-10 " >
    {/* Education */}

    <div>
        <h2 className="text-3xl font-Poppins font-bold mb-6 lg:mb-0 text-center lg:text-start" >Education</h2>
    </div>
    <div className="space-y-4" >
        <h1 className="text-2xl font-Inter font-semibold text-center lg:text-start" >BSc in computer science and engineering</h1>
        <h3 className="text-lg font-Inter font-medium text-center lg:text-start" >International Islamic University Chittagong ( 2020 - present) </h3>
        <p className="text-center lg:text-start" >My Name is Foysal  student at International Islamic University Chittagong, studying computer science and engineering from 2020 to present.</p>

    </div>


</div>


<div className="lg:flex items-center lg:gap-10 " >
    {/* experience */}

    <div>
        <h2 className="text-3xl font-Poppins font-bold mb-6 lg:mb-0 text-center" >Experience</h2>
    </div>
    <div className="space-y-10" >
        <div>
        <h1 className="text-2xl font-Inter font-semibold text-center lg:text-start" >OnTrip ( Travel Guide Website )</h1>
        <h3 className="text-lg font-Inter font-medium text-center lg:text-start">Date :11/2023 - 12/2023</h3>
        <p className="text-center lg:text-start" >Select your ideal tour package at OnTrip, where you curate your adventure and choose your guide for an unparalleled travel experience .
Tourists review guides, and share travel tales on OnTrip's platform .
Three role of OnTrip Website - Admin, Guide, Tourist </p>
        </div>

        <div>
        <h1 className="text-2xl font-Inter font-semibold text-center lg:text-start" >GoExplor ( Agency base Travel Website )</h1>
        <h3 className="text-lg font-Inter font-medium text-center lg:text-start">Date : 10/2023 - 11/2023</h3>
        <p className="text-center lg:text-start" >GoExplor Totally agency base tur travel guide . difference agencies can add the packages and if tourist like package tourist can book .
Login & Registration systems using firebase .
If user is login user , he or she can add any travel service and delate and update own Added Package.</p>
        </div>

        <div>
        <h1 className="text-2xl font-Inter font-semibold text-center lg:text-start" >Brand-Shop ( Online Shopping website )</h1>
        <h3 className="text-lg font-Inter font-medium text-center lg:text-start">Date : 09/2023 - 10/2023</h3>
        <p className="text-center lg:text-start" >This platform empowers customers to procure premium fashion and apparel from world-class luxury brands .
Easily categorize and update products of your choice with personalized preferences using this websites interface .
Any Products Purchased by the customer will be displayed directly in the My Card session .</p>
        </div>

    </div>


</div>




</div>
        </div>

        <div className='flex justify-center mt-10' >
                  <a href="https://drive.google.com/uc?export=download&id=1GDsDoTAGsVT0cQV-80qmqfD_mSZqf-8x" download> 
                  <button className='btn  bg-[#FF6B00] text-white hover:bg-[#FF6B00] ' >Download My Resume </button>
                  
                  </a>

                   
        </div>

            
        </div>
    );
};

export default EducationExperience;