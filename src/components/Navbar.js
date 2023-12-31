import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import BagelIcon from '../assets/bagelIcon.png'
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/bagel-website">
          <img src={BagelIcon} alt="Nature"></img>
        </Link>
        <div className="hiddenLinks">
          <Link to="/bagel-website"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/locations"> Locations </Link>
          <Link to="/about"> About </Link>
          <Link to="/comingsoon"> Coming soon </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/reviews"> Reviews </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/bagel-website"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/locations"> Locations </Link>
          <Link to="/about"> About </Link>
          <Link to="/comingsoon"> Coming soon </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/reviews"> Reviews </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
