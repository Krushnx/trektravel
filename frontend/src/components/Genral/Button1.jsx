import React from 'react';
import './genral.css'
function Button1(props)
{
    return(
        <div className='btn1'>
            <a href={props.url}>
                <button>{props.name}</button>
            </a>
        </div>
    );
}
export default Button1;