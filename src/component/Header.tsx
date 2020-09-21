import React from 'react';
import {Link} from "react-router-dom";
import useState from 'react';

export const Header: React.FC = ( {children} ) => (
   
    
    <div>
         
        <Link to='/tasks'></Link>   
        <Link to='/deadlines'></Link>
        <Link to='/reports'></Link>
        <Link to='/quotes'></Link>
        <Link to='/engagementletter'></Link>
        <Link to='/clients'></Link>
        <Link to='/Validate'></Link>
        <Link to='/LoginForm'></Link>
        <Link to='/Account'></Link>

        {children}

    </div>

)
export default Header;