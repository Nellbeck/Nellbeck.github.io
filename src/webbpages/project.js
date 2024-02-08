import React, { useEffect, useState }from "react";
//imports repos from Github with the same style
import { GithubRepoDisplay } from "github-repo-display-react";
import "github-repo-display-react/dist/index.css";

import Loading from "../components/Loading.js";

const Project = () => {
    //This will make a simulated loading screen that will "load" 2 seconds.
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    return (
        <div> 
            <body>
                <div className="projectlist">
                    <h1>
                        Här är några av mina senaste projekt som är direkt taget från Github
                    </h1>
                    {isLoading ? (
                        <Loading />
                    ) : (
                    <nav>
                <GithubRepoDisplay
                numOfrepos={6} //number of repos you want to show
                userName='Nellbeck' //insert the repo usename
                showStars={true} // will show starts on each repo
                showLanguage ={true} //what language that is used in the repo
                />
                </nav>
                )}
                </div>
                <footer className="pFooter">
                    <p>
                        &copy; Fredrik Nellbeck 2024
                    </p>
                </footer>
            </body>

        {/* HTML page with my old HTML project page
        <body>
            <main class="project">
        <nav class="project1">
                <div>
                    <img src="https://culturedvultures.com/wp-content/uploads/2021/10/Metroid-Prime-1188x750.jpg" alt="Bild på Metroid, en spelbar karaktär från super nintendo." />
                </div>
                <h2>
                    Lotto spel
                </h2>
                <p>
                    Ett väldigt enkelt och litet program som låter användaren gissa ett hemligt nummer som genereras.
                </p>
                <section>
                <button class="project-button">
                    <a href="#lotto-modal" title="Läs mer om Lotto spel">Läs mer</a>
                </button>
                <nav id="lotto-modal" class="modal">
                    <nav>
                        <button href="#" title="Stäng" class="modal-close">X</button>
                        <p>
                            Som det beskrevs så är det ett lotto spel där användaren får gissa vad talet är. Användaren har 5 fösök på sig att gissa rätt. <br />
                            Efter varje försök så får användaren veta om hur nära de är.
                        </p>
                        <br />
                        <p>
                            Användaren får olika svar utifrån hur nära de är och om de har gissat för högt eller lågt.
                            <br />
                            I slutet av spelet får man välja om man vill prova igen och då genereras ett nytt tal.
                        </p><br />

                        <a class="modal-button" href="https://github.com/Nellbeck/NumbersGame.git" title="https://github.com/Nellbeck/NumbersGame.git" alt="Länk till Github Repot">GitRepo</a>

                    </nav>
                </nav>
                </section>
        </nav>
        <nav class="project1">
                <div>
                    <img src="https://culturedvultures.com/wp-content/uploads/2021/10/Metroid-Prime-1188x750.jpg" alt="Bild på Metroid, en spelbar karaktär från super nintendo." />
                </div>
                <h2>
                    Projekt Bank
                </h2>
                <p>
                    Ett program som fungerar som ett banksystem där man kan överföra pengar m.m
                </p>
                <section>
                    <button class="project-button">
                        <a href="#bank-modal" title="Läs mer om Projekt Bank">Läs mer</a>
                    </button>
                    <nav id="bank-modal" class="modal">
                        <nav>
                            <button href="#" title="Stäng" class="modal-close">X</button>
                                <p>
                                    Ett skolprojekt som jag och några klasskamrater gjorde till ett program. (Tack till Felicia, Jonna och Tobias) 
                                    <br/><br />
                                    Programet är ett banksystem på en väldigt enkel nivå med olika funktioner. Allt ifrån att överföra pengar mellan olika konton som du själv har eller till en annan person.
                                </p>
                                <br />
                                <p>
                                    Du kan välja vilken valuta du vill ha på dina konton och när du för över pengar till ett annat konto med en annan valuta växlar programmet till rätt valuta.
                                </p>
                                <br />
                                <p>
                                    Det finns fler funktioner med så gå in på repon och testa.
                                </p>
                                <br />
                                    <a class="modal-button" href="https://github.com/Nellbeck/ProjectBank.git" title="https://github.com/Nellbeck/ProjectBank.git" alt="Länk till Github Repot">GitRepo</a>
                        </nav>
                    </nav>
                    </section>
        </nav>
        <nav class="project1">
            <div>
                <img src="https://culturedvultures.com/wp-content/uploads/2021/10/Metroid-Prime-1188x750.jpg" alt="Bild på Metroid, en spelbar karaktär från super nintendo." />
            </div>
            <h2>
                Area och Omkrets
            </h2>
            <p>
                Ett enkelt program som räknar ut arean och omkretsen en cirkel eller en triangel. Användaren får själv välja.
            </p>
            <section>
                <button class="project-button">
                    <a href="#geo-modal" title="Läs mer om Area och Omkrets">Läs mer</a>
                </button>
                <nav id="geo-modal" class="modal">
                    <nav>
                        <button href="#" name="Stäng" title="Stäng" class="modal-close">X</button>
                            <p>
                                Ett program som räknar ut arean eller omkretsen på en cirkel eller en triangel. 
                                Det krävs att användaren har en liten förkunskap i form av vad diameter är och radie.
                            </p>
                            <br />
                            <p>
                                Det krävs även av användaren vad basen är på en triangel.
                                <br />
                            </p>
                            <br />
                            <p>
                                Användaren matar in det programmet frågar efter och får ett resultat utifrån användarens val.
                            </p><br /> 
                                <a class="modal-button" href="https://github.com/Nellbeck/Lab-5.git" title="https://github.com/Nellbeck/Lab-5.git" alt="Länk till Github Repot">GitRepo</a>
                    </nav>
                </nav>
                </section>
    </nav>
    </main>
            <footer>
            <p>
                &copy; Fredrik Nellbeck 2024
            </p>
        </footer>
    </body> */}
        </div>
    );
}
export default Project;