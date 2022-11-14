import { useEffect, useState } from "react"

export default function Message () {
   const [coords,setCoords] = useState<Coord>({
        x: 4,
        y: 1
    })
    useEffect(() => {
        const mouse = (e: any)=> {

           setCoords({
            x: e.x,
            y: e.y,
           });
         }
         window.addEventListener('mousemove', mouse);
        return () => {
         window.removeEventListener('mousemove',mouse);

        }
    },[]);
    return (
        <>
            <h3>Wenas</h3>
            <p>x: {coords.x} y: {coords.y} </p>
        </>
    )
}

export interface Coord {
    x: number,
    y: number,
}