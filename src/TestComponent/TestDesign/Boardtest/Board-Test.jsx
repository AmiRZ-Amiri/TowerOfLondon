
// this board is for your test not target board 
import './Board-Test.css'
import { useState } from 'react';
const BoardTest = () => {

// State to track the position of disks in each tower
const [towers, setTowers] = useState({
    1: [3, 2, 1],
    2: [],
    3: [],
    container: [],
  });

  // Function to handle the disk movement
  const moveDisk = (from, to) => {
    const disk = towers[from].pop();
      if(disk !== undefined){
        towers[to].push(disk);
      }
      if (towers[3].length > 1) {
        const disk = towers[3].pop();
        towers['container'].push(disk);
      }if(towers[2].length > 2){
        const disk = towers[2].pop();
        towers['container'].push(disk);
      }
  };

  // Function to handle clicking on a tower
  const handleTowerClick = (tower) => {
    const container = towers.container;
    if (container.length === 0) {
      // If container is empty, move top 3 disks from the clicked tower to the container
      const topDisks = towers[tower].slice(3);
      towers[tower] = towers[tower].slice(0, 3);
      towers.container.push(...topDisks);
    } else {
      // If container is full, move the top 3 disks from the container to the clicked tower
      const topDisks = towers.container.slice(3); 
      towers.container = towers.container.slice(0, 3); 
      towers[tower].push(...topDisks);
    }
    setTowers({ ...towers });
    
    // Call moveDisk function to actually move the disks between towers
    const from = container.length === 0 ? tower : "container";
    const to = container.length === 0 ? "container" : tower;
    moveDisk(from, to);
  };
  
  

    
    return(
        
        <div className='your_board'>

            <div className='base'></div>

            <div className='board_label'>
                <strong>Your Board</strong>
            </div>

            <div className='peg_1'>
                <div className='peg'></div>
            </div>



            <div className='peg_1'  onClick={()=> handleTowerClick(1)} >
            {towers[1].map((disk) => (
                <div key={disk}       className={`ball ${disk === 3 ? 'Red' : disk === 2 ? 'Blue' : 'Green'}`} onClick={() => moveDisk(1 , "container")} />
                
            ))}
            </div>

            <div className='peg_2'>
                <div className='peg'></div>
            </div>




            <div className='peg_2' onClick={()=> handleTowerClick(2)}>
            {towers[2].map((disk) => (
                <div key={disk}        className={`ball ${disk === 3 ? 'Red' : disk === 2 ? 'Blue' : 'Green'}`} onClick={() => moveDisk(2 , "container")} />
            ))}
            </div>
            


            <div className='peg_3'>
                <div className='peg'></div>
            </div>



            <div className='peg_3'   onClick={()=> handleTowerClick(3)}>
            {towers[3].map((disk) => (
                <div key={disk}        className={`ball ${disk === 3 ? 'Red' : disk === 2 ? 'Blue' : 'Green'}`} onClick={() => moveDisk(3 , "container")} />
            ))}
            </div>



            <div className='Hand'>
            {towers.container.map((disk) => (
                <div key={disk}        className={`ball ${disk === 3 ? 'Red' : disk === 2 ? 'Blue' : 'Green'}`}/>
            ))}
            </div>

            
        </div>
    )
}


export default BoardTest




