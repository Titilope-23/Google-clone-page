import React from 'react'
import Logo from './assets/Google.svg'
import Search from './assets/svgexport-3.svg'
import mic from './assets/Google mic.png'
import cam from './assets/Google cam.png'
import wine from './assets/svgexport-1.svg'
import './App.css'

const App = () => {
  return (
    <div>

<div className='li'>
              <p>Gmail</p>
        
              <p>Images</p>
         
          <img src ={wine} alt="" className='win' />
          
            <img src ={wine} alt="" className='win' />
          
          </div>

      <div className='overall'>

        

        <img src={Logo} className='Goo' alt="Google logo" />

        <div className='divtwo'>

          <span> <img src={Search} className='sea' alt="" />

            <input type='search' placeholder='Search Google or type a URL' />

            <img src={mic} alt="" className='mic' />

            <img src={cam} alt="" className='cam' /></span>

        </div>
        <div className='divthree'>
          <button className='btnone' type="button">Google Search</button>
          <button type="button">I'm feeling lucky</button>
        </div>

<p className='anc'>Google offered in:
   <a href="">Hausa</a>
    <a href="">Igbo</a>
    <a href="">Ede Yoruba</a>
    <a href="">Nigerian pidgin</a>


</p>
          


      </div>

<div className='foot'>
  <footer className='divfive'>
<p>Nigeria</p>
  </footer>

  <footer className='footertwo'>

    <div className='lastdiv'>

      <div className='firdiv'>
    <p>About</p>
    <p>Advertizing</p>
    <p>Business</p>
    <p>How Search works</p>
    </div>

    <div className='sndlast'>
     <a href="#">Our third decade of climate action: join us</a>
    </div>

    <div className='last'>
      <p>Privacy</p>
      <p>Terms</p>
      <p>Settings</p>
    </div>


</div>

  </footer>
  </div>


  <div className='dplay'>

    <div className='backg'>

<div className='firdivv'>
    <p>Dark theme: off</p>
    <p>Settings</p>
    <p>Privacy</p>
    <p>Terms</p>
    </div>

    <div className='lastt'>
      <p>Advertizing</p>
      <p>Business</p>
      <p>About</p>
    </div>


    </div>
 </div>
  


    </div>
  )
}

export default App