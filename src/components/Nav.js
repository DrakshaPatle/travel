import React  from 'react';
import{Link } from  'react-router-dom';

const Nav=({auth})=>{
    return (
        <div  className='nav-ul'>
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/add">Create</Link></li>
           
            <div className='navright'>
                
            <button className='loginbtn'><Link to ="/login"> Login</Link></button>
            <button className='signinbtn'><Link to ="/signup">Signup</Link> </button>
            </div>
            
           {/* if signin  then show log out  if sign in else show  sign in  */}
           
             <li>{auth?<Link to ="/logout">Logout</Link>:  <li><Link to ="/signup"> Signup</Link></li>}</li> 


            </ul>
        </div>
    )
}
export default Nav;