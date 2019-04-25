import React from "react";
//thanks to weback:
import "./place.css";

class Place extends React.Component {
    render() {
        const title = DATE + NAME;
        
        return (
            <div className="place">
                <div className="place-picture"></div>
                <div className="place-title">
                    {title}
                </div>
            </div>
        );

    }
}

export default Place;