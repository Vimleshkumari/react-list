import React from "react";
import useToogle from "./useToggle"

function CustomHook() {
    const [toggle, setToogle] = useToogle(false)

    return (
        <>
            <div>{toggle ? "I am clicked" : "I am not clicked"}</div>
            <button onClick={() => setToogle(true)}>Click Me</button>
        </>
    )

}

export default CustomHook;