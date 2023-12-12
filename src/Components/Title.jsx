

const Title = ({heading, SubHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-10 font-Poppins' >
            <p className='text-yellow-600 mb-2 ' >{SubHeading}</p>
            <h3 className='text-4xl uppercase font-semibold border-y-2 py-4' >{heading}</h3>
            
        </div>
    );
};

export default Title;