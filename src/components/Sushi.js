import React from 'react';

export default function Sushi({ sushi }) {
    return (
        <div>
            <div className="sushi">
                <div className="plate">
                 { <img src={sushi.img_url} width="100%" alt={'Oh, no'} />}
                </div>
                <h4 className="sushi-details">
                    {sushi.name} - ${sushi.price}
                </h4>
            </div>
        </div>
    )
}
