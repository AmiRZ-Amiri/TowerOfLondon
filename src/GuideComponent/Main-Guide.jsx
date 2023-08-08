import {FullScreen , useFullScreenHandle} from 'react-full-screen'
import './main.css'
import Slider from './SliderGuide/Slider'

const Main = () =>{
    // prompt
    // const name = prompt("Please enter your name", "AmiRZ Amiri");
    // alert
    // alert("Welcome " + name );
    const Handle = useFullScreenHandle()

    const handleClick = event => {
        let element = document.getElementById("GoFullscreen")
        event.currentTarget.disabled = true;
        console.log('button clicked');
        element.style.display = 'block'
    }
    
    // let your_board = 'Your board'
    // let target_board = 'Target board'


    return(
        <div className='Main'>
            <div className='App-main'>

                <h3>
                    The experiment will launch in fullscreen mode when you click the button below.
                </h3>
                
                <button  className='btn-fullScreen' onClick={Handle.enter}>
                    Launch Experiment
                </button>

                {/*
                FullScreen 
                 */}

                <FullScreen handle={Handle}>
                {/* show slider */}
                <button className='btn-show'onClick={handleClick}>Show Slider</button>

                        <div id='GoFullscreen' style={{display : 'none'}}>
                            <Slider/>
                        </div>

                </FullScreen>
               
            </div>
        </div>
    )
}

export default Main;