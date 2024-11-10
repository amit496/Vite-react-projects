import { useState } from 'react'
let RandomColor = () =>{

    let [bgcolor, setbgcolor] = useState('#fff');
    
    let generate = () =>{
        let color_character = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
            newColor += color_character[Math.floor(Math.random() * color_character.length)];
        }
        return newColor;
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col" style={{background:bgcolor}}>
            <p className='font-semibold tracking-wider text-2xl'>{bgcolor}</p>
            <button onClick={() => setbgcolor(generate())} className='mt-4 p-2 pr-6 pl-6 bg-purple-600 text-2xl text-white rounded-sm'>Generate</button>
        </div>
    )
}
export default RandomColor;