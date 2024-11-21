import { useState } from "react";

let RandomColor = () =>{

    let [color, setcolor] = useState('#fff');
    let color_character = '0123456789ABCDEF';

    let generate_color = () =>{
        let new_color = '#';
        for(let i = 0; i < 6; i++){
            new_color += color_character[Math.floor(Math.random() * 16)];
        }
        setcolor(new_color)
    }

    return(
        <div className="flex justify-center items-center flex-col h-screen w-screen"  style={{ background: `${color}` }}>
            <span>{color}</span>
            <div>
                <button onClick={() => generate_color()} className="bg-black text-white p-2 pr-6 pl-6 mt-6 rounded-sm mr-3">Generate</button>
                <button onClick={() => setcolor('#fff')} className="bg-black text-white p-2 pr-6 pl-6 mt-6 rounded-sm">Reset</button>
            </div>
        </div>
    )
}

export default RandomColor;