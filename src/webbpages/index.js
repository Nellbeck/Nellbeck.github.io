import React from "react";

const Home = () => {
    return (
        <div>
            <body className="home">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
            <h2 class="homepage">
                Välkommen till min sida!
            </h2>
        <p>
            <img class="mountain" src="https://www.vemdalen.se/wp-content/uploads/2018/01/1296x500_norrsken.jpg" alt="Bild på fjäll och norrsken" />
            Sicket fint fjäll!
        </p>
        </body>
        <footer>
    <p>
        &copy; Fredrik Nellbeck 2024
    </p>
</footer>
        </div>
    );
}
 
export default Home;