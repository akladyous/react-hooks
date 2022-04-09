import {useEffect} from 'react'
// import { ThemeContext } from '../context/ThemeProvider.js'
import { useTheme } from '../context/ThemeProvider.js'

export default function ThemeConsumer() {

    // const {darkTheme, changeTheme} = useContext(ThemeContext)
    const {darkTheme, changeTheme} = useTheme()
    
    useEffect(()=>{
        console.log("child-component did mount")
        return ()=>{console.log('child-component will unmount')}
    },[])
    
    return (
        <div>
            <h3>Theme Consumer</h3>
            <button onClick={changeTheme}>change theme</button>
            <div style={darkTheme}>
            </div>
        </div>
    )
};
