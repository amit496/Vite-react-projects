import { useState } from 'react'
let Counter = () =>{
    let [counter, setCounter] = useState(0);
    let [color, textColor] = useState('text-white');
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-zinc-950">
            <span className={` ${color} font-semibold text-3xl`}>{counter}</span>
            <div className="mt-4">
                <button onClick={() => {setCounter(counter + 1); textColor('text-violet-700');}} className="text-white font-semibold tracking-wider bg-violet-700 p-2 pr-6 pl-6 rounded-sm hover:bg-violet-950 duration-700">Increament</button>
                <button onClick={() => {setCounter(counter - 1); textColor('text-purple-700');}} className="text-white font-semibold tracking-wider bg-purple-700 p-2 pr-6 pl-6 rounded-sm hover:bg-purple-700 duration-700 ml-2" disabled = {counter === 0}>Decrement</button>
                <button onClick={() => {setCounter(0); textColor('text-white');}} className="text-black font-semibold tracking-wider bg-emerald-400 p-2 pr-6 pl-6 rounded-sm hover:bg-emerald-500 duration-700 ml-2" disabled = {counter === 0}>Reset</button>
            </div>
        </div>
    )
}
export default Counter;