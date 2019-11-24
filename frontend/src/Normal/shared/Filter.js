import React from 'react';
import DialogFilter from './DialogFilter';
import Search from './Search';

export default function Filter() {
    return (
        <div className="filter__ratio-button" >
            <DialogFilter />
            <Search />
        </div>
    )
}
