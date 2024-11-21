import { useState } from "react"

let BGChanger = () =>{

    let [bgcolor, setbgcolor] = useState('bg-white');


    return(
        <div className={`flex justify-center items-center h-screen w-screen ${bgcolor}`}>
            <button onClick={() => setbgcolor('bg-red-700')} className={`${bgcolor === 'bg-red-700' ? 'bg-white text-black' : 'bg-red-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Red </button>
            <button onClick={() => setbgcolor('bg-yellow-700')} className={`${bgcolor === 'bg-yellow-700' ? 'bg-white text-black' : 'bg-yellow-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Yellow </button>
            <button onClick={() => setbgcolor('bg-blue-700')} className={`${bgcolor === 'bg-blue-700' ? 'bg-white text-black' : 'bg-blue-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Blue </button>
            <button onClick={() => setbgcolor('bg-sky-700')} className={`${bgcolor === 'bg-sky-700' ? 'bg-white text-black' : 'bg-sky-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Sky </button>
            <button onClick={() => setbgcolor('bg-emerald-700')} className={`${bgcolor === 'bg-emerald-700' ? 'bg-white text-black' : 'bg-emerald-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Emerald </button>
            <button onClick={() => setbgcolor('bg-violet-700')} className={`${bgcolor === 'bg-violet-700' ? 'bg-white text-black' : 'bg-violet-700 text-white'} p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Violet </button>
            <button onClick={() => setbgcolor('bg-white')} className={`bg-black text-white p-2 pr-8 pl-8 mr-3 font-semibold tracking-wider rounded-sm`} > Reset </button>
        </div>
    )
}

export default BGChanger