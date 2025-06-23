import React, { useState, useCallback } from "react";

export default function UseToggle(initialValue) {
    const [value, setValue] = useState(false)
    



    const toggle = useCallback(() => {
        setValue(val => !val)
    }, [initialValue])
    return [value]
}