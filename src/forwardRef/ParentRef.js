import { useRef } from "react";
import { InputField } from "../forwardRef/InputField.js"

export default function ParentRef() {
    const ref = useRef();
    const focus = () => {
        ref.current.focus();
    };

    return (
        <div className="container" ref={ref}>
            <h3>Ref & forwardRef</h3>
            <div>
                <InputField ref={ref} name="name" />
                <button onClick={focus}>Focus</button>
            </div>
        </div>
    );
}
