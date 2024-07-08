import React from 'react'
import './Leftpane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Leftpane() {
  return (
    <div className='leftpanebox'>
      <div className="leftpaneContainer">
<div className="leftpanemenu">

          <li className='leftpanemenuItem'>
            <MarkUnreadChatAltIcon className='leftpanemenuicon'/>
                <span className='leftpanemenuText'>Massages</span>
          </li>

     <li className='leftpanemenuItem'>
       < GroupIcon className='leftpanemenuicon'/>
             <span className='leftpanemenuText'>Group</span>
</li>

<li className='leftpanemenuItem'>
<RssFeedIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Feed</span>
</li>

<li className='leftpanemenuItem'>
<FlagIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Pages</span>
</li>

<li className='leftpanemenuItem'>
<CalendarMonthIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Calender</span>
</li>

<li className='leftpanemenuItem'>
<BuildIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Setting</span>
</li>

<li className='leftpanemenuItem'>
<SportsEsportsIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Games</span>
</li>

<li className='leftpanemenuItem'>
<NewspaperIcon  className='leftpanemenuicon'/>
<span className='leftpanemenuText'>News</span>
</li>

<li className='leftpanemenuItem'>
<WorkOutlineIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Jobs</span>
</li>

<li className='leftpanemenuItem'>
<AddShoppingCartIcon className='leftpanemenuicon'/>
<span className='leftpanemenuText'>Shopping</span>
</li>
<hr/>

<div className="pagesyouliked">
    <h3>Pages You Liked</h3>
</div>

<div className='pagelist'>
<li className='pagelistitem'>
<img src="/image/29.webp" alt="" className='pagepic'/>
<span className='pagename'>Daisy</span>
</li>


<li className='pagelistitem'>
<img src="/image/28.webp" alt="" className='pagepic'/>
<span className='pagename'>Marigold</span>
</li>

<li className='pagelistitem'>
<img src="/image/27.webp" alt="" className='pagepic'/>
<span className='pagename'>Tulip</span>
</li>

<li className='pagelistitem'>
<img src="/image/26.jfif" alt="" className='pagepic'/>
<span className='pagename'>Lotus</span>
</li>    

<li className='pagelistitem'>
<img src="/image/25.webp" alt="" className='pagepic'/>
<span className='pagename'>Lilly</span>
</li>

<li className='pagelistitem'>
<img src="/image/24.jfif" alt="" className='pagepic'/>
<span className='pagename'>Rose</span>
</li>

<li className='pagelistitem'>
<img src="/image/27.webp" alt="" className='pagepic'/>
<span className='pagename'>Tulip plus</span>
</li>

<li className='pagelistitem'>
<img src="/image/24.jfif" alt="" className='pagepic'/>
<span className='pagename'>Rose Rose</span>
</li>

</div>




        </div>
      </div>
    </div>
  )
}
