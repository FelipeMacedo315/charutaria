import React, { useState } from 'react'
import { Buttoncomprar } from './globalestilos'
import { Link } from 'react-router-dom'

import { Paginacompra1,Paginacompra2,Paginacompra3,Paginacompra4,Paginacompra5,Paginacompra6, Paginacompra8 } from './paginacompra'

 

  export  function Produto1() {

    const[charuto1,setcharuto1]=useState(79.99 )
    return(
        <>
      
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-bolivar-belicoso-fino.jpg'/>
    <h2>Charuto Vegafina Vintage 1998 42 </h2>
    <p className='preço'>R$ {charuto1}</p>
    <input type='number' min='0'/>
 
   
        </div>
</>
    )
  }
    
   export function Produto2 (){

    const[charuto2,setcharuto2]=useState(129.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-bolivar-royal.jpg'/>
    <h2>Charuto Perceverancia Serie Artesano Gran Habano 60 </h2>
    <p className='preço'>R$ {charuto2}</p>
    <input type='number' min='0'/>
  
        </div>

    )

}
  export function Produto3 (){

    const[charuto3,setcharuto3]=useState(39.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-bolivar.jpg'/>
    <h2>Charuto Perceverancia Premium Gran Figurado </h2>
    <p className='preço'>R$ {charuto3}</p>
    <input type='number' min='0'/>
  

        </div>

    )
}
  export function Produto4 (){
    const[charuto4,setcharuto4]=useState(69.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-cohiba.jpg'/>
   <h2>Charuto Romeu e Julieta Petit Churchill</h2>
    <p className='preço'>R$ {charuto4}</p>
    <input type='number' min='0'/>
  
        </div>

    )
}
export function Produto5 (){
    const[charuto5,setcharuto5]=useState(299.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-coronitas.jpg'/>
    <h2>Charuto Alonso Menendez Del Patron Gran Corona</h2>
    <p className='preço'>R$ {charuto5}</p>
    <input type='number' min='0'/>
  
        </div>

    )
}
export function Produto6 (){
    const[charuto6,setcharuto6]=useState(189.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-don-diego.jpg'/>
    <h2>Charuto Monte Pascoal Short Robusto</h2>
    <p className='preço'>R$ {charuto6}</p>
    <input type='number' min='0'/>
 
        </div>

    )
}
export function Produto7 (){
    const[charuto7,setcharuto7]=useState(174.99 )
    return(
        <div className='cada-produto'>
    <img className='imgproduto' src='/imagens\charuto-dondiego-belicoso.jpg'/>
   <h2>Charuto Dona Flor Seleção Robusto</h2>
    <p className='preço'>R$ {charuto7}</p>
    <input type='number' min='0'/>
   
        </div>

    )
}
export function Produto8 (){
    const[charuto8,setcharuto8]=useState(219.99 )
    const[quantidade,setquantidade]=useState('')
  
  function capturar_quantidade8(e){
      var quantidadevar = e.target.value
    setquantidade(quantidadevar*charuto8)
    window.alert(quantidade)
      
   }

    return(
        
        <div className='cada-produto'>
          
         
       
    <img className='imgproduto' src='/imagens\charuto-mille-feur.jpg'/>
    <h2>Charuto Los 3 Catedraticos Magnífico Maduro (Canonazo)</h2>
    <p className='preço'>R$ {charuto8}</p>
    <input onChange={capturar_quantidade8} type='number' min='0'/>
    
        </div>

    )
}



















