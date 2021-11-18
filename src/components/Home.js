import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'
import { useEffect, useState, useRef } from 'react'
// import video from '../assets/EloisePromo.mp4'


const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
            THREE,
            el: myRef.current,
            mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x0,
  midtoneColor: 0x326cca,
  lowlightColor: 0xa4a4a4,
  baseColor: 0x0,
  blurFactor: 0.59,
  speed: 1.10,
  zoom: 1.20,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    
    return (
        <div>
        <header className="title">
        <h1>DHE</h1>
        </header>
       
        <main>
        <div className="animated-background" id ="home" ref={myRef}>
       
        {/* <video height="2000" width="1050" className="video" controls autoPlay>
        <source src= {video} type="video/mp4"  />
        </video>  */}
        </div>
        </main>
        </div>
    );
}

export default Home;