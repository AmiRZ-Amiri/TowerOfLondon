import Board from "../Board/Board"

const DataGuide = [
    {
        Title : 'During this task, two boards will be presented at a time. The boards will be of colored balls arranged on pegs like this:',
        TBoard :<div className='Target-Board'><Board NameBoard = 'Target'/></div>,
        YBoard : <div className='Your-Board'><Board NameBoard = 'Your'/></div>,
        Body : 'Imagine that these balls have holes through them and the pegs are going through the holes. Notice that the first peg can hold three balls, the second peg can hold two balls, and the third peg can hold one ball.',
        
    },
    {
        Title : 'Your task will be to make the arrangements of balls in your board look like the arrangements of balls in the target board in the fewest possible moves.',
        TBoard :<div className='Target-Board'><Board NameBoard = 'Target'/></div>,
        YBoard : <div className='Your-Board'><Board  NameBoard = 'Your'/></div>,
        Body : 'The balls in the target board are fixed in place, but the balls in your board are movable. You have to move them to make your board look like the target board. Sometime you will have to move a ball to a different peg in order to get to the ball below it.',
        
    },
    {
        Title : 'Here is an example. Notice that the balls in your board are in a different arrangement than in the target board. If we move the red ball from the first peg in your board to the third peg then it would look like the target board.',
        TBoard :<div className='Target-Board'><Board NameBoard = 'Target'/></div>,
        YBoard : <div className='Your-Board'><Board NameBoard = 'Your'/></div>,
        Body : 'Imagine that these balls have holes through them and the pegs are going through the holes. Notice that the first peg can hold three balls, the second peg can hold two balls, and the third peg can hold one ball.'
    },
    {
        Title :'During the test you will move the balls on your board by clicking on the pegs. When you click on a peg, the top ball will move into a box called your hand. When you click on another peg, the ball in your hand will move to the top of that pegIf you try to select a peg with no balls or try to place a ball on a full peg, nothing will happen. If you successfully make your board look like the target board, the trial will end and you will move to the next problem.We will start with an easy example so that you can learn the controls.',
        TBoard :<div className='Target-Board'><Board NameBoard = 'Target'/></div>,
        YBoard : <div className='Your-Board'><Board NameBoard = 'Your'/></div>,
        Body : ''
        
    }

]

export default DataGuide