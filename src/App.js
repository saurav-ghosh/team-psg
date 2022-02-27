import "./App.css";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

function App() {
    return (
        <>
            <Header></Header>
            <Players></Players>
            <footer
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#013869",
                }}
            >
                Designed and Developed by Saurav Ghosh
            </footer>
        </>
    );
}

export default App;
