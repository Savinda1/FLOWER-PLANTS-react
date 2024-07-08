import React from 'react'
import './home.css'
import NavBar from './components/Navigation/NavBar'
import Leftpane from './components/Leftpane/Leftpane'
import Postpane from './components/Postpane/Postpane'
import Rightpane from './components/Rightpane/Rightpane'
export default function Home() {
  return (
    <div>
     <NavBar/>
     <div className='bottomCotainer'>
     <Leftpane/>
     <Postpane/>
     <Rightpane/>
     </div>
    </div>
  )
}
