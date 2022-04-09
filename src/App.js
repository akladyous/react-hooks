import { ThemeProvider } from "./context/ThemeProvider.js";
import ThemeConsumer from "./context/ThemeConsumer.js";
import MemoParent from "./memo/MemoParent";

function App() {
    return (
        <div className="App">
            <h3>App Component</h3>
            <ThemeProvider>
                <ThemeConsumer />
                <MemoParent />
            </ThemeProvider>
        </div>
    );
}

export default App;
