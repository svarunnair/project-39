import React, { useState } from 'react'

function Home() {

    const [move,setMove]=useState("x")
    const [board,setBoard]=useState(Array(9).fill(''))
    const [show,setShow]=useState(false)
    

    console.log("movvee",move)

   const handleChange=(n)=>{
      let square=[...board]
      if(board[n]!==""){
        alert("Already Clicked")
        return
      }
      square[n]=move
      setBoard(square)
      if(move==="x"){
        setMove("0")
      }
      if(move==="0"){
        setMove('x')
      }

      if(checkWin(square)){
       
        alert("Winner")
        square.fill('')
        setBoard(square)
        setShow(move)
        
      }
      if(checkDraw(square)){
        alert('Match Draw')
        square.fill('')
        setBoard(square)
      }
       
   }

   const checkDraw=(board)=>{
    let count=0
    board.forEach(element=>
        {
            if(element!==''){
                count++
            }
        })
        if(count>=9){
            return true
        }
        else{
            return false
        }
   }



const checkWin = (board) => {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let flag = false;
    conditions.forEach(element => {
        if (board[element[0]] !== '' && board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) {
            flag = true;
        }
    });
    return flag;
};


  return (
    <div style={{display:"flex",flexDirection:"column",paddingTop:100}}>

        <text style={{padding:20,fontWeight:600,}}>Tic-Tac-Toe</text>
        {show?<text style={{padding:20,fontWeight:600,}}>Winner is {show}</text>:<></>}

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

        <div onClick={()=>handleChange(0)} style={{border:"2px solid red",width:100,height:100}}>{board[0]}</div>
        <div onClick={()=>handleChange(1)} style={{border:"2px solid red",width:100,height:100}}>{board[1]}</div>
        <div onClick={()=>handleChange(2)} style={{border:"2px solid red",width:100,height:100}}>{board[2]}</div>

        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

<div onClick={()=>handleChange(3)} style={{border:"2px solid red",width:100,height:100}}>{board[3]}</div>
<div onClick={()=>handleChange(4)} style={{border:"2px solid red",width:100,height:100}}>{board[4]}</div>
<div onClick={()=>handleChange(5)} style={{border:"2px solid red",width:100,height:100}}>{board[5]}</div>

</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

<div onClick={()=>handleChange(6)} style={{border:"2px solid red",width:100,height:100}}>{board[6]}</div>
<div onClick={()=>handleChange(7)} style={{border:"2px solid red",width:100,height:100}}>{board[7]}</div>
<div onClick={()=>handleChange(8)} style={{border:"2px solid red",width:100,height:100}}>{board[8]}</div>

</div>
        

        </div>
  )
}

export default Home