import './Board.css'

const Board = ({NameBoard}) => {
    return(
        
        <div className='tol_your_board'>

            <div className='tol_base'></div>

            <div className='tol_board_label'>
                <strong>{NameBoard}</strong>
            </div>

            <div className='tol_peg_1'>
                <div className='tol_peg'></div>
            </div>

            <div className='tol_peg_1'>
                <div className='tol_ball tol_Red'><div className="tol_ball_label">R</div></div>
                <div className='tol_ball tol_Green'><div className="tol_ball_label">G</div></div>
            </div>

            <div className='tol_peg_2'>
                <div className='tol_peg'></div>
            </div>

            <div className='tol_peg_2'>
                <div className='tol_ball tol_Blue'><div className="tol_ball_label">B</div></div>
            </div>
            
            <div className='tol_peg_3'>
                <div className='tol_peg'></div>
            </div>
        </div>
    )
}


export default Board