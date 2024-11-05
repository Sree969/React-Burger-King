import React, { Component } from "react";
import Navbar from "./Components/Navbar"
import Division from "./Components/Division";
import Content from "./Components/Content.jsx";
import Division3 from "./Components/Division3";
import Footer from "./Components/Footer"
import data2 from "./Assets/ContentProps.js"
class App extends React.Component{
    render(){
        return(
            <>
            <Navbar/>
            <Division/>

            <div id="zz">
                {data2.map(x=>{
                    return(
                        <Content img={x.img} h2={x.h2} p={x.p} a={x.a} butt={x.butt}/>
                    )
                })}
            </div>

            <Division3/>
            <Footer/>
            </>
        )
    }
}
export default App