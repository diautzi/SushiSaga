import React from 'react';

export default function Table({ eatenSushi, wallet}) {

    const renderPlates = (array) => {
        return array.map((item, index) => {
            return <div className="empty-plate" style={{ top: -1 * index }}/>
        })
    }
    return (
        <>
        <h1 className="remaining">
            You have: ${ wallet} remaining!
        </h1>
        <div className="table">
            <div className="stack">
                {
                    /*
                    renderPlates takes an array
                    and renders an empty plate
                    for every element in the array
                    */
                    renderPlates(eatenSushi)

                }
            </div>
            </div>
         </>
    )
};
