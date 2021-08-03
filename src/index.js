import React from 'react'
import ReactDom from 'react-dom'
import Home from './Home'
import './header.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Produto1,Produto2,Produto3,Produto4,Produto5,Produto6,Produto7,Produto8} from './produtos'
import {Paginacompra1,Paginacompra2,Paginacompra3,Paginacompra4,Paginacompra5,Paginacompra6,Paginacompra7,Paginacompra8} from './paginacompra'

ReactDom.render(

 <BrowserRouter>
 <Switch>

   <Route path='/' exact component={Home}/>
   <Route path='/pagcompra/produto1' component={Paginacompra1}/>
   <Route path='/pagcompra/produto2' component={Paginacompra2}/>
   <Route path='/pagcompra/produto3' component={Paginacompra3}/>
   <Route path='/pagcompra/produto4' component={Paginacompra4}/>
   <Route path='/pagcompra/produto5' component={Paginacompra5}/>
   <Route path='/pagcompra/produto6' component={Paginacompra6}/>
   <Route path='/pagcompra/produto7' component={Paginacompra7}/>
   <Route path='/pagcompra/produto8' component={Paginacompra8}/>

 </Switch>
 </BrowserRouter>
  
  ,document.getElementById('root')
   

)


