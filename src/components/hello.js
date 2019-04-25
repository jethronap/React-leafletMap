import React from "react";

class Hello extends React.Component {
    render() {
        return (
            <div>
                lucky you, {this.props.name} {this.props.lname}
                <span role="img" aria-label="broken-heart">💔</span>!
                you appeared on screen!
        </div>
        );
    }
}

export default Hello;