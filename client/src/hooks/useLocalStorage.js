import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const serializedPersistedState = localStorage.getItem(key);
        if(serializedPersistedState){
            const persistedState = JSON.parse(serializedPersistedState);
            return persistedState;
        }
        return defaultValue;
    });

    const setLocalState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state, 
        setLocalState,
    ];
}