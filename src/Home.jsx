import React from 'react'
import Header from './Header'
import {Produto1,Produto2,Produto3,Produto4,Produto5,Produto6,Produto7,Produto8} from './produtos.jsx'
import Footer from './footer'
import {Link } from 'react-router-dom'
import { Buttoncomprar } from './globalestilos'

function Home() {

    return(
<div id='agrupar_todos_elementos_home'>
       <Header/>

   <div className='home_agrupar_produtos'>

       <div className='cada_produto_home'>
        <Produto1></Produto1>
        <Link to='/pagcompra/produto1'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto2></Produto2>
        <Link to='/pagcompra/produto2'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto3></Produto3>
        <Link to='/pagcompra/produto3'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto4></Produto4>
        <Link to='/pagcompra/produto4'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto5></Produto5>
        <Link to='/pagcompra/produto5'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto6></Produto6>
        <Link to='/pagcompra/produto6'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto7></Produto7>
        <Link to='/pagcompra/produto7'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>


       <div className='cada_produto_home'>
        <Produto8></Produto8>
        <Link to='/pagcompra/produto8'> <Buttoncomprar largura={'100%'}>Comprar</Buttoncomprar>  </Link>
       </div>
     
       
       
       
       
       
       
       
       
  </div>
   <Footer/>
   
</div>
    )
    
}
export default Home