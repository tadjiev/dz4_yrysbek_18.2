import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.input)
        this.setState({
            input: ''
        })
    }

    handleClear = () => {
        this.setState({
            input: ''
        })
    }


    render() {
        return (
            <>
                <input value={this.state.input} type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>add</button>
                <button onClick={this.handleClear}>clear</button>
            </>
        );
    }
}

export default ContactsPage;