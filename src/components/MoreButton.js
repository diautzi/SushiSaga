import React from 'react';

export default function MoreButton({ moreSushi }) {
    return (
        <button
            class="huge ui button"
            onClick={moreSushi}>
            More Sushi!
        </button>
    )
}
