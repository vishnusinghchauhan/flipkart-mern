import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
import SecondaryDropDownMenu from './SecondaryDropDownMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector(state => state.cart);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);

  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
      {/* Navbar container */}
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
        
        {/* Left section: Logo & Search */}
        <div className="flex items-center flex-1">
          <Link to="/" className="h-7 flex items-center text-white font-medium">
            <img draggable="false" className="h-full w-auto object-contain" src={logo} alt="Logo" />
          </Link>
          <Searchbar />
        </div>

        {/* Right section: User Menu & Cart */}
        <div className="flex items-center gap-4">
          {isAuthenticated === false ? (
            <Link to="/login" className="text-white font-medium">Login</Link>
          ) : (
            <div className="relative">
              <span 
                className="userDropDown flex items-center text-white font-medium cursor-pointer" 
                onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}
              >
                {user.name && user.name.split(" ", 1)}
                <span>{togglePrimaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
              </span>
              {togglePrimaryDropDown && <PrimaryDropDownMenu setTogglePrimaryDropDown={setTogglePrimaryDropDown} user={user} />}
            </div>
          )}

        

          <Link to="/cart" className="flex items-center text-white font-medium relative">
            <ShoppingCartIcon />
            {cartItems.length > 0 && (
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-4 flex justify-center items-center border">
                {cartItems.length}
              </div>
            )}
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
