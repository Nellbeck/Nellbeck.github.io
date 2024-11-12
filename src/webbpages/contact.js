import {React, useState} from "react";
import image from "../pics/20231204_112533.jpg"

const Contact = () => {

    //sets the background to the original color and waits for the mark to be clicked to turn the background color to white.
    let color = 'rgb(215, 228, 215)';
    const [bgColor, setBgColor] = useState(color);
     const changeColor =()=>{
        let purple = 'white';
        setBgColor(purple);
      }
    return (
        
        <div>
            
            <body style={{background: bgColor}}>
            <div className="corner"><p onClick={changeColor}>1</p></div>
            <main class="contact">
            <section class="contact-img">
                <p>
                    
                    <img src={image} alt="Bild på skog mitt i vintern." />
                </p>
            </section>
                    <main class="contact-me">
                
                    <h2> <a class="mail-box" href="mailto:nellbeckfredrik@gmail.com">Maila mig!</a></h2> <br />
                    <p> Du kanske är lite mer oldschool och vill skicka ett brev så finns min brevlåda på: <br />
                    <div class="box">
                            Fredik Nellbeck <br />
                            Länsmansvägen 15 <br />
                            82595 Enånger
                    </div>
                    <br />
                    
                    Vem vet, du kanske vill ringa och prata med min röstbrevlåda?<br />
                    Han kan du nå på: 
                    <div class="tele-box">
                        073 060 77 95
                    </div>
                    </p>
            </main>
                
        </main>
        </body>
        <footer>
            <p>
                &copy; Fredrik Nellbeck 2024
            </p>
        </footer>
        </div>
    );
};
 
export default Contact;