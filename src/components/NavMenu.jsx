import React from 'react';
import {
  Link
} from "react-router-dom";

function NavMenu(props) {
  return(
    <div>
      <div className="font-bold py-3">
           App title
        </div>
        <ul>
    <li>
      <Link to="/" className="text-blue-500 py-3 border-t border-b block"
      onClick= {props.closeMenu}
      >home</Link>
    </li>
    <li>
      <Link to="/about" className="text-blue-500 py-3 border-b block"
      onClick= {props.closeMenu}
      >about</Link>
    </li>
  </ul>
    </div>
  
  );
}

export default NavMenu