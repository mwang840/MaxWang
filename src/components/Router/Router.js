import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About';

function Router(){
    return (<BrowserRouter>
    <Routes>
        <Route path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>);
}

export default Router;