import React from "react";
import image1 from "..//pics/20231128_124224.jpg";
import image2 from "..//pics/20231007_212925.jpg";
import "..//App.css"
 
const About = () => {
    return (
        <div>
        <h1>
            <section className="welcome">
                Hallå där! <br />
                <img src={image1} width={400} alt="Bild på mig på vintern i skogen" />
                <div class="joke">
                    Du kan tacka mig sen för att du vaknade till och samtidigt spilde kaffet! <br/>
                    Måste då säga att det ser ut som Bigfoot är i farten.
                </div>
                </section>
        </h1>
        <article className="about-me">
            <p>
                Jag heter Fredrik Nellbeck (den där saken på bilden) och är hela 33 vintrar gammal. <br/>
                Mitt hus befinner sig i Enånger som ligger i Hudiksvalls kommun i Hälsingland.<br/>
                Jag bor där med min sambo, även kallad "fru", och med våran hund som heter Lemmy. <br/>
                <br />
                (Han är här någonstanns!)
            </p>
            <p>
                <section class="dog" >
                    <img src={image2} width={500} alt="Min Jack Russell Terrier hund som ligger i sin bädd."/><br/> 
                    Där är han!<br />  <br />
                    
                    </section>
            </p>
            <p>
                Man kan räkna ut på bilden att jag tycker om att vara ute i naturen, även på vintertid dock kanske det inte ser ut som det. <br/>
                Ett stort intresse jag har är skidåkning och med det menar jag längdskidåkning. <br/>
                När jag nämner just skidåkning så säger många "Åh, jag åker också alpint!".
            </p>
            </article>
    <footer>
        <p>
            &copy; Fredrik Nellbeck 2024
        </p>
    </footer>
        </div>
    );
};
 
export default About;