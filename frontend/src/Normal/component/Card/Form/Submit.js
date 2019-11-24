import React from 'react';

function Submit(props){

    return (
        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
            tabIndex={0} type="button">
                <span className="MuiButton-label">{props.title}</span>
            <span className="MuiTouchRipple-root" />
        </button>
    );
}

export default Submit;
