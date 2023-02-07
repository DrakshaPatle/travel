import React  from 'react';
import{Link } from  'react-router-dom';

const Nav=({auth})=>{
    return (
        <div  className='nav-ul'>
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/add">about</Link></li>
            <li><Link to ="/update"> palces</Link></li>
            {/* <li><Link to ="/logout"> Logout</Link></li> */}
            <li><Link to ="/profile">Profile</Link></li>
            {/* <li><Link to ="/signup">Signup</Link></li> */}

           {/* if signin  then show log out  if sign in else show  sign in  */}
           
            <li>{auth?<Link to ="/logout">Logout</Link>:  <li><Link to ="/signup"> Signup</Link></li>}</li>


            </ul>
        </div>
    )
}
export default Nav;