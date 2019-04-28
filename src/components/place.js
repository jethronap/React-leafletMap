import React from "react";
//thanks to weback:
import "./place.css";

class Place extends React.Component {

    handleClick = () => {
        // we call the parent method selectPlace
        this.props.selectPlace(this.props.place);
    }

    render() {
        
        const title = this.props.place.date + "-" + this.props.place.name;
        
        // build css properties for react: with `` & js interpolation
        const style = {

            backgroundImage: `url('${ this.props.place.imageUrl }')`

        };

        return (
            <div className="place" onClick={this.handleClick}>
                <div className="place-picture" style={ style }></div>
                <div className="place-title">
                    { title }
                </div>
            </div>
        );

    }
}

export default Place;