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
            <form id="form" name="form" method="post" action=" ">

                Namn:<br />
                <input type="text" name="namn" class="name" /> <br />
                
                E-postadress:<br />
                <input type="email" name="epost" class="epost" /> <br />
                
                Meddelande:<br />
                <textarea name="meddelande" class="meddelande" cols="45" rows="5"></textarea> <br />
                
                <input type="submit" name="skicka" id="skicka" value="Skicka" />
                
                </form>
                
        </main>
        <footer>
            <p>
                &copy; Fredrik Nellbeck 2024
            </p>
        </footer>
        </body>
        </div>
    );
};
 
export default Contact;