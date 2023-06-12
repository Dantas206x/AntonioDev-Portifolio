import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu , close } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("false");
  return (
    <nav
      className={
        `${styles.paddingX} 
        w-full 
        flex 
        items-center 
        py-4 
        fixed 
        top-0 
        z-20  
        glass`}    
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() =>{
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
      <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
      <p className="text-white text-[18px] font-bold cursor-pointer flex"
      >Antonio&nbsp;|<span className="sm:block hidden"
      > &nbsp;Desenvolvedor</span> </p>
      
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((Link) =>(
          <li key={Link.id}
            className={`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(Link.title)}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>

            
          </li>
        ))}

      </ul>
            <div className="sm:hidden flex flex-1 justify-center items-center">
              <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
                <div className={`${!toggle ? "hidden" : "flex"} p-6 glass absolute top-20 right-120 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}>


                <ul className="list-none flex justify-end items-start flex-col gap-5">
        {navLinks.map((Link) =>(
          <li key={Link.id}
            className={`${
              active === Link.title
              ? "text-[white]"
              : "text-secondary"
            } font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={() => {
              setActive(Link.title);
              setToggle(!toggle);
            }}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>

            
          </li>
        ))}

      </ul>
                </div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar