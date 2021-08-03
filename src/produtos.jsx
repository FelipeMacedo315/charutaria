import React, { useState } from 'react'
import { Buttoncomprar } from './globalestilos'
import { Link } from 'react-router-dom'

 

  export  function Produto1() {

    const[charuto1,setcharuto1]=useState(79.99 )
    return(
        <>
      
        <div className='cada-produto'>
    <img src='/imagens\charuto-bolivar-belicoso-fino.jpg'/>
    <h5>Charuto Cubano </h5>
    <p>R$ {charuto1}</p>
    <input type='number' min='0'/>
 
   
        </div>
</>
    )
  }
    
   export function Produto2 (){

    const[charuto2,setcharuto2]=useState(129.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-bolivar-royal.jpg'/>
    <h2>Charuto Perceverancia Serie Artesano Gran Habano 60 </h2>
    <p>R$ {charuto2}</p>
    <input type='number' min='0'/>
  
        </div>

    )

}
  export function Produto3 (){

    const[charuto3,setcharuto3]=useState(39.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-bolivar.jpg'/>
    <h2>Charuto Perceverancia Serie Artesano Gran Habano </h2>
    <p>R$ {charuto3}</p>
    <input type='number' min='0'/>
  

        </div>

    )
}
  export function Produto4 (){
    const[charuto4,setcharuto4]=useState(69.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-cohiba.jpg'/>
   <h2>Charuto Cubano Romeu Y Julieta N2</h2>
    <p>R$ {charuto4}</p>
    <input type='number' min='0'/>
  
        </div>

    )
}
export function Produto5 (){
    const[charuto5,setcharuto5]=useState(299.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-coronitas.jpg'/>
    <h2>Charuto Alonso Menendez Connecticut</h2>
    <p>R$ {charuto5}</p>
    <input type='number' min='0'/>
  
        </div>

    )
}
export function Produto6 (){
    const[charuto6,setcharuto6]=useState(189.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-don-diego.jpg'/>
    <h2>Charuto Monte Pascoal Robusto</h2>
    <p>R$ {charuto6}</p>
    <input type='number' min='0'/>
 
        </div>

    )
}
export function Produto7 (){
    const[charuto7,setcharuto7]=useState(174.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-dondiego-belicoso.jpg'/>
   <h2>Charuto Dona Flor Seleção Robusto</h2>
    <p>R$ {charuto7}</p>
    <input type='number' min='0'/>
   
        </div>

    )
}
export function Produto8 (){
    const[charuto8,setcharuto8]=useState(219.99 )
    return(
        <div className='cada-produto'>
    <img src='/imagens\charuto-mille-feur.jpg'/>
    <h2>Charuto Guarantamo </h2>
    <p>R$ {charuto8}</p>
    <input type='number' min='0'/>
    
        </div>

    )
}



















