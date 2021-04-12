import React from "react";

const Personal = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.email}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.address}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Personal;