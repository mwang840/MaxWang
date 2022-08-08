import React from 'react';
import {Button} from "../Button";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return (<nav className='NavbarItems'>
        <Link to="/">Maxwell Wang</Link>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <Button>Feedback</Button>
    </nav>)
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return(<li className={isActive=== to ? "active": ""}> <Link to={to} {...props}>{children}</Link></li>)
}
