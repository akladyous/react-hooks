// import { ThemeProvider } from "./context/ThemeProvider.js";
// import ThemeConsumer from "./context/ThemeConsumer.js";
// import MemoParent from "./memo/MemoParent";
import ReducerParent from "./reducer/ReducerParent.js";

function App() {
    return (
        <div className="App">
            <ReducerParent />
            {/* <ThemeConsumer /> */}
            {/* <ThemeProvider> */}
                {/* <MemoParent /> */}
            {/* </ThemeProvider> */}
        </div>
    );
}

export default App;
