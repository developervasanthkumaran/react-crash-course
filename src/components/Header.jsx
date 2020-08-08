import React,{Component} from 'react';
import bg from '../assets/header-background.jpg'
import Nav from './Nav'
class Header extends Component {
  render() { 
    return ( 
     <header className="border-2 p-3 flex justify-between items-center">
       <span className="font-bold">
        App title
       </span>
        <Nav/>
     </header>
    );
  }
}
 
export default Header;