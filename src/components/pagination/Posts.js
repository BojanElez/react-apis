import React, { useState } from 'react'

const Posts = (props) => {
    const { id, title, body } = props;
    const [collapseExpand, setCollapseExpand] = useState(false)

    let text;
    if (collapseExpand) {
        text = <p>{body}</p>
    }

    return (

        <li className="list-group-item bg-primary text-white" onClick={() => setCollapseExpand(!collapseExpand)}>
            <p>{id} - {title} &nbsp; </p>
            {text}
        </li>

    )
}

export default Posts;
