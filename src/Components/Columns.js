import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: "KK"
        },
        {
            id: 2,
            title: "BK"
        },
        {
            id: 3,
            title: "MK"
        },
        {
            id: 4,
            title: "PK"
        },
    ]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <tr key={item.id}>
                        <React.Fragment key={item.id}>
                            <td>Title</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </React.Fragment>
                    </tr>
                ))
            }
            {/* <td>Name</td>
            <td>Kandarp</td> */}
        </React.Fragment>
    )
}

export default Columns
