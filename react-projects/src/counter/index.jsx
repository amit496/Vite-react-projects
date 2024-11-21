import { useState } from "react";

let Counter = () =>{

    let [counter, setcounter] = useState(0);

    let increment = () =>{
        setcounter(counter + 1);
    }
    
    let decrement = () =>{
        setcounter(counter - 1);
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-900">
            <p className="text-white font-semibold tracking-wider">Counter : {counter}</p>

            <div className="mt-5">
                <button onClick={() => increment()} className="bg-sky-400 text-wrap font-semibold tracking-widest p-2 pr-6 pl-6 mr-3 rounded-sm hover:bg-sky-700 duration-500 hover:text-white">Increment</button>
                <button onClick={() => decrement()} className="bg-sky-400 text-wrap font-semibold tracking-widest p-2 pr-6 pl-6 mr-3 rounded-sm hover:bg-sky-700 duration-500 hover:text-white" style={{pointerEvents: counter == 0 ? 'none' :''}}>Decrement</button>
                <button onClick={() => setcounter(0)} className="bg-sky-400 text-wrap font-semibold tracking-widest p-2 pr-6 pl-6 mr-3 rounded-sm hover:bg-sky-700 duration-500 hover:text-white" style={{pointerEvents: counter == 0 ? 'none' :''}}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;