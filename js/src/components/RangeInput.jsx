import { useState } from "react";
import React from "react";

export default function RangeInput() {
    const [hue, setHue] = useState(0) ;
    const divstyle = {
        color: "white",
        backgroundColor:`hsl(${hue},100%,30%)`,
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
    //inline css oder mit var 
 
    <div className="color-box" style={divstyle} >
 
    
      <label htmlFor="hue">Farbe</label>

      <input
      onChange={(e)=>setHue(e.currentTarget.value)}
      value={hue} 
      type="range" 
      id="hue" 
      name="hue" 
      min={0} 
      max={360} />

      <span>{hue}</span>
    </div>
  );
}