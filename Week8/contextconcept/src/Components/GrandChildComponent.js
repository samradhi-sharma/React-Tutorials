import {useContext} from "react";
import { colorContext } from "../context";

function GrandChildComponent() {

    const value = useContext(colorContext);
    return(
    <p style={{color:color}}>Color:{color}</p>
    )
}
export default GrandChildComponent;