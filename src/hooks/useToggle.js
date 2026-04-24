import { useState } from "react";
export default function useToggle(initValue = false) {
    const [toggleValue, setToggleValue] = useState(initValue);
    const toggle = () => setToggleValue(prev => !prev);
    

    return [toggleValue, toggle];
}