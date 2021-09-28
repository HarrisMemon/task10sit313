import React from "react";

const Input = (props)=>{
    return ( <div>
        <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} value={props.value} class={props.class} />
    </div>
    )
}
export default Input