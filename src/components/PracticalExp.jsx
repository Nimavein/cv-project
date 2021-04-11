import React from "react";

const Practical = (props) => {
    return (
        <div>
            <p>{props.companyName}</p>
            <p>{props.positionTitle}</p>
            <p>{props.mainTasks}</p>
            <p>{props.workFromDate}</p>
            <p>{props.workToDate}</p>
        </div>
    )
}

export default Practical;