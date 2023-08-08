import TestWork from './TestDesign/Test-Work'
import { FullScreen , useFullScreenHandle } from 'react-full-screen'
import './test.css'
const Test = () => {
    
    const FullScreenTest = useFullScreenHandle();
    const handleClickTest = event => {
        let element = document.getElementById("GoFullscreenTest")
        event.currentTarget.disabled = true;
        console.log('button clicked');
        element.style.display = 'block'
    }
    return(
        <div className="Test">
            <div className='Test-Main'>

            <button className='btn-start-test' onClick={FullScreenTest.enter}>Start Test</button>

                <FullScreen handle={FullScreenTest}>
                    <button className='test-btn-show'onClick={handleClickTest}>Show Test</button>

                    <div id='GoFullscreenTest' style={{display : 'none'}}>
                        <TestWork/>
                    </div>
                </FullScreen>
            </div>
        </div>
    )
}

export default Test