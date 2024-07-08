import React from 'react'
import './Addpost.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className='addpost'>
      <div className="addpostcontoiner">
        <div className="addposttop">
            <img src="/image/01.jpg" alt="" className='addpostpic'/>
            <input placeholder='What in your mind ?' type='text' className='addpostinput'/>
        </div>
        <hr className='line'/>
        <div className="addpostbotom">
<div className="addpostoptions">
    <div className='addpostoption'>
<AddPhotoAlternateIcon htmlColor='orange' className='addphoto'/>
<span className='addpostoptiontext'>Add post/video</span>
</div>
<div className='addpostoption'>
<EditLocationIcon  htmlColor='red' className='addphoto'/>
<span className='addpostoptiontext'>Add Location</span>
</div>
<div className='addpostoption'>
<LocalOfferIcon  htmlColor='blue' className='addphoto'/>
<span className='addpostoptiontext'>Tag</span>
</div>
<div className='addpostoption'>
<LiveTvIcon  htmlColor='yellow' className='addpohoto'/>
<span className='addpostoptiontext'>Live</span>
</div>
<button className='button'>Post</button>
</div>
        </div>
      </div>
     
    </div>

    
  )
}
