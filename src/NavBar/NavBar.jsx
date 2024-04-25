
import { Link } from "react-router-dom";
import MenuDropDown from "./MenuDropDown";
import logoImg from '../assets/logo/logo (1).png'
import Container from "./Container";

const NavBar = () => {
    return (
        <div className='z-10 w-full  fixed  bg-gradient-to-r from-black to-red-700   shadow-sm h-[110px]'>
        <div className='py-4 border-b-[1px]'>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              {/* Logo */}
              <Link to='/'>
                <img
                  className='hidden md:block'
                  src={logoImg}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
              {/* Dropdown Menu */}
              <MenuDropDown />
            </div>
          </Container>
        </div>
      </div>
    );
};

export default NavBar;