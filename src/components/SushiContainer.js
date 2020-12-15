import React from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

export default function SushiContainer({ sushis, moreSushi }) {
    console.log(sushis)
    return (
        <div className="belt">
            { sushis.map((sushi) => <Sushi key={sushi.id} sushi={sushi} />)}
            <MoreButton moreSushi={moreSushi} />
        </div>
    )
};
