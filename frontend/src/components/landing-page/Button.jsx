import React from 'react';
function Button(props)
{
    return(
        <div className="get-started">
          <button>{props.name}</button>
        </div>
    );
}
export default Button;