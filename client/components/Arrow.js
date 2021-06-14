import React from 'react'

function Arrow(props) {
    return (
        <div id="aniArrow">
        <button className="arrowButton" onClick={props.onClick}>
            <div class="arrow arrowSliding delay1"></div>
            <div class="arrow arrowSliding delay2"></div>
            <div class="arrow arrowSliding delay3"></div>
        </button>
      </div>
    )
}

export default Arrow
