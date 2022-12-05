import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor() {
        super();
        this.state = {
            works: []
        }
    }
    HandleClick = () => {
        this.setState({
            works: ["Work1", "Work2"]
        })

    }

    render() {

        return (
            <>
                <button onClick={this.HandleClick}>get </button>
                <ul>
                    {this.state.works.map(item => <li>{item}</li>)}
                </ul>
            </>
        );
    }
}

export default PortfolioPage;