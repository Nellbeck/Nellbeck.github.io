import "./App.css";
import Sidebar from "./components/Navbar/Sidebars";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./webbpages/about";
import CV from "./webbpages/cv";
import Project from "./webbpages/project";
import Contact from "./webbpages/contact";
import Glines from "./webbpages/glines";
import Index from "./webbpages/index";

function App() {

    //easter egg that will show up when the "konami-code" is pushed in the right order.
    var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    var current = 0;

    var keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		window.alert('You found the easter egg it!');
	}

    };
    document.addEventListener('keydown', keyHandler, false);
    
    

    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="https://nellbeck.github.io/FirstReactApp"
                    element={<Index />}
                />
                <Route
                    path="/"
                    element={<Index />}
                />
                <Route
                    path="/index"
                    element={<Index />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/CV"
                    element={<CV />}
                />
                <Route
                    path="/project"
                    element={<Project />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/glines"
                    element={<Glines />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;
