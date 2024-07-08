import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import "./navBar.css"
export default function NavBar() {
  return (
    <div className="navBarbox">
<div className="navBarleft">
<span className='logo'>FLOWER PLANTS</span>
</div>
 
<div className="navBarcenter">
<div className="SerchbarBox">
<SearchIcon className='searchicon'/>
<input placeholder='Serch your items' className='seachinput'/>
</div>
</div>

<div className="navBarright">

<div className="navBarLinks">
    <span className='navBarLink'>Sign Up</span>
    <span className='navBarLink'>Log in</span>
</div>

<div className="navBarIcon">

<div className="navBarIco">
<span className='iconTag'>3</span>
<PersonIcon/>
    </div>

<div className="navBarIco">
<span className='iconTag'>3</span>
<MessageIcon/>
    </div>

    <div className="navBarIco">
    <span className='iconTag'>3</span>
< SettingsApplicationsIcon/>
    </div>

    <div className='pic'>
<img src="/image/01.jpg "alt="" className='profilepicimg' />
    </div>

    </div>

</div>
    </div>
  )
}
