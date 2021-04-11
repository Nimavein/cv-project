import React from "react";

const Educational = (props) => {
    return (
        <div>
            <p>{props.schoolName}</p>
            <p>{props.titleOfStudy}</p>
            <p>{props.studyFromDate}</p>
            <p>{props.studyToDate}</p>
        </div>

        
    )
}

export default Educational;