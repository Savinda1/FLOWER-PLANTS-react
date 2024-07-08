import React from 'react'
import './Post.css'
export default function Post(props) {
  return (
<div className="post">
    <div className="postcontainer">
        <div className="posttop">
       
            <img src={props.im} alt="" className='postimg'/>
            <span className='postusername'>{props.name}</span>
<span className='posttime'>{props.time}</span>
        </div>
        <div className="postcenter">
<div className="postcaption">{props.price}</div>
<div className="postcaption">{props.Contact}</div>
<img src={props.ig} alt="" className='postimage'/>

        </div>
        <div className="postbotom"> 
            <div className="postbotoleft">
            <img src="./image/09.png" alt="" className='botomico' />
                <img src="./image/11.png" alt="" className='botomic' />
                <img src="./image/13.webp" alt="" className='botomicon' />
               
</div>
<span className='tex2'>{props.text}</span>
<span className="text1">{props.Comments}</span>
        </div>
    </div>
    </div>




  )
}
