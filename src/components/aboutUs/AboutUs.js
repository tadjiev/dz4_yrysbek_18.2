import React, {Component} from 'react';

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    handleClick = () => {
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        return (
            <>
                {
                    this.state.status
                    ? <p>Text</p>
                    : false
                }
                <button onClick={this.handleClick}>Click me</button>
            </>
        );
    }
}

export default AboutUs;