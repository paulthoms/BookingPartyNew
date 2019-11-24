import React from 'react';

function Card(props){
    return (
        <div className="MuiGrid-root makeStyles-grid-361 MuiGrid-item MuiGrid-grid-xs-12">
            <div className="makeStyles-card-362">
                <div className="makeStyles-cardHeader-366 makeStyles-primaryCardHeader-374">
                    <h4 className="makeStyles-cardTitleWhite-3214">{props.name}</h4>
                    <p className="makeStyles-cardCategoryWhite-3213">{props.describe}</p>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Card;