import './App.css'
import Test from './TestComponent/Test-Page';
import Main from './GuideComponent/Main-Guide'


import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
const App = () => {
    return(
        
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element = {<Main/>}/>
                    <Route  path="/test" element = {<Test/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App ;


