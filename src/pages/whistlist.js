import React from 'react'
import { UseWhistlistContext } from '../Store/whistlistContext';
const whistlist = () => {
    const { whistlist } = UseWhistlistContext();
    return (
        <div>
            <h2>
                whistlist
            </h2>
            <div>
                {whistlist.map(p => (
                    <div key={p.id}>
                        <div>{p.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default whistlist