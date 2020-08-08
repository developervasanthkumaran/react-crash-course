import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import {useTransition,animated} from 'react-spring'
import NavMenu from './NavMenu'
function Nav () {
  const [showMenu,setShowMenu] = useState()  
  const maskTransitions = useTransition(showMenu, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  })
  const menuTransitions = useTransition(showMenu, null, {
    from: {opacity: 0 ,transform:'translateX(-100%)'},
    enter: { opacity: 1 ,transform:'translateX(0%)'},
    leave: { opacity: 0 ,transform:'translateX(-100%)'},
    })
    return ( 
     <nav>
      <span>
      <FontAwesomeIcon icon={faFireAlt} 
            onClick = {()=>{setShowMenu(!showMenu)}}
            size="lg"/> 
      </span>
      
       { maskTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div key={key} 
        style={props}
        className="fixed bg-gray-500 left-0 w-full h-full z-50"
        onClick= {()=>setShowMenu(false)}
        >
         </animated.div>
        )}


       { menuTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div key={key} style={props}
        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 p-8"
        >
        
          <NavMenu closeMenu={()=>setShowMenu(false)}/>
        </animated.div>
        )}
     </nav>
     );
  }

 
export default Nav;