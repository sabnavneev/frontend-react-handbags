import React from 'react';

function Tile({ title, children }) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;