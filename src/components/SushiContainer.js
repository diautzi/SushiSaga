import React from 'react';
import Sushi from './Sushi';

export default function SushiContainer({ sushis }) {
    console.log(sushis)
    return (
        <div>
            { sushis.map((sushi) => <Sushi key={sushi.id} sushi={sushi}/>) }
        </div>
    )
}
