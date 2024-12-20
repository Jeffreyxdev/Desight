import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { itemVariants, sideVariants } from "../Utils/Motion";
import Logo from '../assets/Desight Foundation (2).png'
import { Link } from "react-router-dom";
import { Button } from '../Ui/Button'
const Navbar = () => {
  const controls=useAnimation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleHover =() => {
      controls.start({x:[0,-5,5,-5,0], transiton: {duration:0.7}});
    };
    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen((prevState) => !prevState);
    };

  return (
    <>
    {/*Desktop view*/}
    <nav className=" nav-full w-full fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 ">
      <div className="nav-container flex justify-between w-[75%] mx-auto ">
        <div className="flex items-center">
        <Link to={'/'}>
          <img src={Logo} className="h-[13vh] mt-[-2vh] mb-[-1vh]  "  alt="Desight Logo" /></Link>
        </div>
     
         <ul className="hidden md:flex items-center space-x-5">
          
       <Link to={'/'}  className="text-gray-700 hover:text-gray-900 "> <li>Home</li></Link>
        <Link to={'/goals'}  className="text-gray-700 hover:text-gray-900"><li>Goals</li></Link>
      
       <Link to={'/programs'}  className="text-gray-700 hover:text-gray-900 "><li>Programs</li></Link>
        <Link to={'/about'}  className="text-gray-700 hover:text-gray-900"> <li>About us</li></Link>
       <Link to={'/contact'}  className="text-gray-700 hover:text-gray-900"> <li>Contact us</li></Link>
      </ul>
      <Button size={"sm"}
      
      className="h-9 mt-4 btn gradient-bg"><Link to={'/donate'}>
       <motion.button 
        onHoverStart={handleHover}
        onHoverEnd={()=> controls.start({x:0})}
        animate={controls}
         
        >Donate</motion.button></Link></Button>
      </div>
    </nav>



       {/* Mobile Navbar */}
      
    
       <nav className="md:hidden flex justify-center fixed  w-[110%] h-[10vh] p-2 mt-[-2.3vh] bg-white border-b border-gray-200 z-50 ">
        <div className="nav-container pt-5 flex justify-between  nav-container h-3 mr-10 bg-white">
            <div className="mr-20">
              <Link to={'/'}>
            <img src={Logo} className="h-[12vh] mt-[-3.5vh] mb-[-5vh] p-2 logo" alt="Desight Logo"  /></Link>
            </div>

            {/* Mobile menu button (hamburger) */}
            <div
              onClick={handleMobileMenuToggle}
            
            >
              {isMobileMenuOpen ? (
                <MdOutlineClose  className="w-[50px] h-[45px] p-2 mt-[-3vh] cursor-pointer"/>
              ) : (
                <div className=" flex justify-center items-center h-[100%] pb-9">
                 <IoMdMenu className="w-[60px] h-[56px] p-2 mt-5 cursor-pointer "/>
                </div>
              )}
            </div>
          </div>
        </nav>


             {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
          <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: 500
          }}
          exit={{
            width: 0,
            transition: { delay: 0.3, duration: 0.1 }
          }}
         >
        <motion.div 
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="container md:hidden flex flex-col fixed bg-[#272727d0] text-white w-[55vw] ml-[35vw] mt-[10vh] h-[350px] items-end pr-[18vw] z-10 rounded-2xl pt-4">
          <ul className="text-[20px] mr-[-25px] p-5" onClick={handleMobileMenuToggle}>
            <motion.li variants={itemVariants} className="mb-6"><Link to='/goals'>Goals</Link></motion.li>
            <motion.li variants={itemVariants} className="mb-6"><Link to={'/about'}>About us</Link></motion.li>
            <motion.li variants={itemVariants} className="mb-6"><Link to={'/contact'}>Contact us</Link></motion.li>
           <motion.li variants={itemVariants} className="mb-6">Outreachs</motion.li>
          </ul>
          <Link to={'/enroll'}>
          <motion.Button
            variants={itemVariants}
            className="w-[150px] h-[48px] bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-xl text-[14px] mt-[-2vh] mr-[-2.8em]"
          >
            Get Involved
          </motion.Button></Link>
         
        </motion.div>
        </motion.aside>
        
      )}
      

</AnimatePresence>


    </>
  )
}

export default Navbar
