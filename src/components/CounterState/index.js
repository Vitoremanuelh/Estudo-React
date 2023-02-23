import React, { useEffect, useState } from "react";

function CounterState(){
    const[count, setCount] = useState(0);
    useEffect(( ) => {
        document.title = 'Moveram' + count + 'cliques';
    })
    return(
        <React.Fragment>
        <p>Houveram ${count}</p>
            <button onClick={() => setCount(count + 1)}> Aumentar cliques</button>
        </React.Fragment>
    )

}

export default CounterState