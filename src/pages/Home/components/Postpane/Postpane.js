import React from 'react'
import './Postpane.css'
import Addpost from '../Addpost/Addpost'
import Post from '../Post/Post'
export default function Postpane() {
  return (
    <div className='postpanebox'>
      <Addpost/>
      <Post name="Amila Savinda Kumara" time="6 mins ago" price="Price:RS600.00" Contact="Contact:071-6873225"
     text="janiDand123other" Comments="Comments36" im="..//image/01.jpg" ig="..//image/08.jpg" />
      <Post name="Shean Priyankara" time="25 mins ago" price="Price:RS1600.00" Contact="Contact:076-6674225"
       text="sapumaland13other" Comments="Comments14" im="..//image/18.jfif" ig="..//image/07.jpg" />
<Post name="Mihinsani widwa" time="40 mins ago" price="Price:RS1200.00" Contact="Contact:077-6774235"
       text="Dilekhaand18other" Comments="Comments19" im="..//image/16.jpg" ig="..//image/04.webp" />
      <Post name="Janith D" time="30 mins ago" price="Price:RS1000.00" Contact="Contact:070-8674295"
       text="sagaraand18other" Comments="Comments33" im="..//image/22.jfif" ig="..//image/21.webp" />
    </div>
  )
}
