import { useState } from "react"
import DataGuide from "../DataGuide/Data"
import './Slider.css'
import { Link } from 'react-router-dom';

const Slider = () => {
    const [Guide , setGuide] = useState(0)
    const {Title ,TBoard ,YBoard ,  Body } = DataGuide[Guide]
    let NextBtn = document.getElementById('Next')
    let StartBtn = document.getElementById('StartBtn')
    let PrevBtn = document.getElementById('PrevBtn')
    const ClickBtn = (number) => {
        if(number > DataGuide.length - 1){
            return 0 
        }

        return number
    }
    function next() {

        setGuide((Guide) => {
            let number = Guide + 1 
            return ClickBtn(number)
        })
        if(Guide=== 2){
            NextBtn.style.display = 'none' 
            StartBtn.style.display = 'block'
        }
        if(Guide === 0){
            PrevBtn.style.display = 'block'
        }

    }

    function prev() {
        setGuide((Guide) => {
            let number = Guide - 1 
            return ClickBtn(number)
        })
        if(Guide === 1){
            PrevBtn.style.display = 'none'
        }
        if(Guide){
            NextBtn.style.display = 'block' 
            StartBtn.style.display = 'none'
        }
    }
    console.log(Guide)
    return (
        <main>
            <div className="Slider-style">
                <h2>{Title}</h2>
                <div className="Slider-Board">
                    {TBoard}
                    {YBoard}
                </div>
                <h2>{Body}</h2>
                <div className="SliderBtn">
                    <button id="PrevBtn" onClick={prev}  style={{display : 'none'}}>Previous</button>
                    <button id="Next" onClick={next}>Next</button>
                    <button id="StartBtn" style={{display : 'none'}} ><Link  to="/test">GOOO</Link></button>
                </div>

            </div>
            <div className="BtnStart">

            </div>
        </main>
    )
}


export default Slider