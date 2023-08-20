import React from 'react'
import { useWhistlistContext } from '../Store/whistlistContext'

const whistlist = () => {
    const { whistlist } = useWhistlistContext();
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