import './Box.css';
import React from 'react'

const Box = ({ x, y, blur, color}) => {
    let shadow;
    shadow = `${x}px ${y}px ${blur}px ${color}`

    return (
        <div className="box">
            <div className="box__box">
                <div style={{ textShadow: shadow }}>
                    text-shadow: {shadow}
                </div>
            </div>
        </div>
    )
}

export default Box