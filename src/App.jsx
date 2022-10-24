import React from 'react'
import Home from './page/Home/index'
import About from './page/About/index'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"

function App() {
    return <div>
       

        <BrowserRouter>
            <h1>App</h1>
            <Link to={"/"}>home</Link> <br/ >
            <Link to={"/about"}>about</Link>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            </Routes>
        </BrowserRouter>

    

    </div>
}

export default App