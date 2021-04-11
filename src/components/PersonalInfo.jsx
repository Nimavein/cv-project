import React from "react";

const Personal = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.email}</p>
            <p>{props.phoneNumber}</p>
        </div>

    )

}

export default Personal;