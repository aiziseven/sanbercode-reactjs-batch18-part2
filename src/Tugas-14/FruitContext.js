import React, { useState, createContext } from 'react';

export const FruitContext = createContext();

export const FruitProvider = props => {
    const [buah, setBuah] = useState([
        { id: 0, name: '', price: 0, weight: 0 }
    ]);
    const [newBuah, setNewBuah] = useState(
        { id: 0, name: '', price: 0, weight: 0 }
    );
    const [index, setIndex] = useState(-1);
    const [submitted, setSubmitted] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <FruitContext.Provider value=
            {{
                buahState: [buah, setBuah],
                newBuahState: [newBuah, setNewBuah],
                indexState: [index, setIndex],
                submittedState: [submitted, setSubmitted],
                disabledState: [disabled, setDisabled],
                loadingState: [loading, setLoading]
            }}
        >
            {props.children}
        </FruitContext.Provider>
    );
}