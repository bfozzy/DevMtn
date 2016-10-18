import React from 'react';

require('./AwesomeComponent.css');
class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {
        return (
        <div>
            <h1>AWESOME!</h1>
        </div>
        )
    }
}

export default AwesomeComponent;
