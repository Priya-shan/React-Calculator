import React,{useState} from "react";

import "./CalculatorStyle.css";


export function Calculator() {
    const [mainDisplay,setMainDisplay]=useState("");
    const [prevDisplay,setPrevDisplay]=useState("");

    function display(value){
        console.log(value);
        var lastChar=mainDisplay.charAt(mainDisplay.length-1);
        if(lastChar==='+' || lastChar==='-' ||lastChar==='*' ||lastChar==='/' ||lastChar==='%' ){
            if(value!=='+' && value!=='-' && value!=='*' && value!=='/' && value!=='%' ){
                setMainDisplay(mainDisplay+value);
            }
        }
        else{
            setMainDisplay(mainDisplay+value);
        }
    }
    
    function backspace(){
        setMainDisplay(mainDisplay.substring(0,mainDisplay.length-1));
    }

    function calculate(){
        setPrevDisplay(mainDisplay+"");
        var result=new Function(`return ${mainDisplay}`)();
        setMainDisplay(result.toString());

    }
    function clear(flagValue){
        if(flagValue){
            setMainDisplay("");
        }
        else{
            setMainDisplay("");
            setPrevDisplay("");
        }
    }
    return (
        <div className="calc-container">
            
            <div className="calc-button-row">
            <div className="display display-prev">{prevDisplay}</div>
            <div className="display display-main">{mainDisplay}</div>
            <button onClick={()=>clear(0)} className="ac">AC</button>
            <button onClick={()=>clear(1)} className="opt">C</button>
            <button onClick={()=>display("%")} className="opt">%</button>
            <button onClick={()=>display("/")} className="opt">/</button>
            <button onClick={()=>display("7")}>7</button>
            <button onClick={()=>display("8")}>8</button>
            <button onClick={()=>display("9")}>9</button>
            <button onClick={()=>display("*")} className="opt">*</button>
            <button onClick={()=>display("4")}>4</button>
            <button onClick={()=>display("5")}>5</button>
            <button onClick={()=>display("6")}>6</button>
            <button onClick={()=>display("-")} className="opt">-</button>
            <button onClick={()=>display("1")}>1</button>
            <button onClick={()=>display("2")}>2</button>
            <button onClick={()=>display("3")}>3</button>
            <button onClick={()=>display("+")} className="opt">+</button>
            <button onClick={()=>display("0")}>0</button>
            <button>.</button>
            <button onClick={()=>backspace()}>◀</button>
            <button onClick={()=>calculate()} className="opt">=</button>
        </div>
        </div>
        
    )
}