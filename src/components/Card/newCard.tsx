import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './styles.css'
import { useSelector, useDispatch } from '../../Store/Provider'
import { increment } from '../../Actions/Actions'



function Card() {
  const dispatch = useDispatch();
  const Count = useSelector(({value})=> value) 
  const [islocked,setLocked] = useState(false);
  const [{ xyz  } , set] = useSpring<{xyz : number[]}>(() => ({ xyz: [0, 0,1] }))
  
  const bind = useGesture({

    onDrag : ({down,offset : [x,y]}) => {
      if(!islocked){
        let position = [x,y,1]
         if(down){
           position[2] = 1.1;
         }else{
           position[2] = 1;
         }
         set({ xyz: position })
      }
    }
  })
  
 
  return (
    <animated.div
    className = {'card'}
    
    style={{
      //@ts-ignore
      transform: xyz.interpolate((x, y, z) => ` translate3d(${x}px, ${y}px, 0) scale(${z}) `),
      width : 200 ,
      height : 200
    }}
    {...bind()}
    >
      <button
        style = {{
          height : 100,
          width :200
        }}
        onClick = {() => dispatch(increment(Count))}
      >
        Increment
      </button>
      <button
        style = {{
          height : 50,
          width : 200,
          backgroundColor : islocked ? 'red' : 'green'
        }}
        onClick = {() => setLocked(!islocked)}
      >setLocked</button>
      {Count}
    </animated.div>
  )
}

export default Card ;
