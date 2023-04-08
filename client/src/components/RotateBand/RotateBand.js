import { useState } from "react";
import { MachineData } from "./RotatingData";

export const RotateBand = () => {
    const [index, setIndex] = useState(0);

    function Next() {
        if (index === MachineData.length - 1) {
            setIndex(0);
        }
        setIndex(index + 1);
    }
    
    function Previous() {
        if (index === 0) {
            setIndex(MachineData.length - 1);
        }
        setIndex(index - 1);
    }

    setTimeout(() => {
        if (index !== MachineData.length - 1) {
            setIndex(x => x + 1);
        } else {
            setIndex(0);
        }
    }, 4000)

    return (
        <>
            <button onClick={Previous} disabled={index === 0} >Previous</button>
            <button onClick={Next} disabled={index === MachineData.length - 1} >Next</button>
            <>
            <p>{MachineData[index].name}</p>
            <img src={MachineData[index].imageUrl} width="400px" height="300px" alt={MachineData[index].alt} />
            </>
        </>
    );
}