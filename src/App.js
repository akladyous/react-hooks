// import { ThemeProvider } from "./context/ThemeProvider.js";
// import ThemeConsumer from "./context/ThemeConsumer.js";
// import MemoParent from "./memo/MemoParent";
// import ReducerParent from "./reducer/ReducerParent.js";
// import ParentRef from "./forwardRef/ParentRef.js";
import User from "./reducer/User.js";
function App() {
    return (
        <div className="App">
            <User />
            {/* <ParentRef /> */}
            {/* <ReducerParent /> */}
            {/* <ThemeConsumer /> */}
            {/* <ThemeProvider> */}
                {/* <MemoParent /> */}
            {/* </ThemeProvider> */}
        </div>
    );
}

export default App;
