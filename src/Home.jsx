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
       
        alert(`Winner is ${move}`)
        square.fill('')
        setBoard(square)
        setShow(move)
        window.location.reload()
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
  
    <div style={{display:"flex",minHeight:"83vh",backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')",flexDirection:"column",paddingTop:100}}>

        <text style={{fontSize:30,color:'whitesmoke',padding:20,fontWeight:600,}}>Tic-Tac-Toe</text>
        {show?<text style={{color:"whitesmoke",fontSize:30,padding:20,fontWeight:600,}}>Winner is {show}</text>:<></>}

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

        <div  onClick={()=>handleChange(0)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[0]}</div>
        <div onClick={()=>handleChange(1)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[1]}</div>
        <div onClick={()=>handleChange(2)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[2]}</div>

        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

<div onClick={()=>handleChange(3)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,fontSize:30,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[3]}</div>
<div onClick={()=>handleChange(4)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[4]}</div>
<div onClick={()=>handleChange(5)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[5]}</div>

</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

<div onClick={()=>handleChange(6)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,fontSize:30,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[6]}</div>
<div onClick={()=>handleChange(7)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[7]}</div>
<div onClick={()=>handleChange(8)} style={{background:"#DAA520",cursor:"pointer",borderRadius:10,fontSize:30,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid grey",width:100,height:100}}>{board[8]}</div>

</div>
        

        </div>


  )
}

export default Home