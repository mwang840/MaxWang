import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';

//map?
export default function NavBar(){
    return (
    <div>
        <ul>
            <li><Link to="/">Maxwell Wang</Link></li>
            <li><CustomLink to="/">Home</CustomLink></li>
            <li><CustomLink to="/about">About</CustomLink></li>
        </ul>
        
        
    </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return(<li className={isActive=== to ? "active": ""}> <Link to={to} {...props}>{children}</Link></li>)
}
