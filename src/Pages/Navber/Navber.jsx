import AnchorLink from "react-anchor-link-smooth-scroll";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const Navbar = () => {
  const navLnk = <>
  <li className="text-lg " ><a>Home</a></li>
  
  <li  className="text-lg" ><a><AnchorLink href='#about'>About</AnchorLink></a></li>
  <li  className="text-lg" ><a><AnchorLink href='#skill'>Skill</AnchorLink></a></li>
  <li  className="text-lg" ><a><AnchorLink href='#project'>projects</AnchorLink></a></li>
  <li  className="text-lg" ><a><AnchorLink href='#Contact'>Contact</AnchorLink></a></li>
  <li  className="text-lg" ><a><AnchorLink href='#Resume'>Resume</AnchorLink></a></li>
  
  
  
  
  <li className="text-lg " ><a>Blog</a></li>
  
  
  </>
    return (
        <div className="navbar bg-black  text-white  px-10 pt-4 font-Poppins">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
        {
          navLnk
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl  lg:text-3xl font-bold ">Foysal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLnk
      }
    </ul>
  </div>
  <div className="navbar-end">
  <AnchorLink href='#Contact'><a className="btn text-xl font-semibold rounded-3xl text-white bg-[#FF6B00] hover:bg-[#FF6B00]">Hire Me <TfiAngleDoubleRight /> </a></AnchorLink>
    
    
  </div>
</div>
    );
};

export default Navbar;