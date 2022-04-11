import { forwardRef } from "react"

export const InputField = forwardRef((props, ref) =>{
    return(
        <input type="text" {...props} ref={ref} />
    )
}) 