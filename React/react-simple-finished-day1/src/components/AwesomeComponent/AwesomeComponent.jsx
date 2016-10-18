import React from 'react';

require('./AwesomeComponent.css');

const h1Style = {
    color: 'Blue'
}
class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {
        return (
        <div>
            <h1 style={h1Style}>DM-13 IS AWESOME!</h1>
        </div>
        );
    }
}

export default AwesomeComponent