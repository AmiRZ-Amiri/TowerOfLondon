
import Board from '../../GuideComponent/Board/Board'
import './testwork.css'
import BoardTest from './Boardtest/Board-Test'
const TestWork= () => {
    return(
        <div className='TestWork'>
            <div className='App-Test'>

                
                <div className='YourBoard'>
                    <BoardTest/>
                </div>
                <div className='TargetBoard'>
                    <Board NameBoard={'TargetBoard'}/>   
                </div>
            </div>
        </div>
    )
}


export default TestWork