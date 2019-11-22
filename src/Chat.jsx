import React from 'react'
// import './css/Profile.css';
import './Profile.css'


class Chat extends React.Component {

    state = {
        textValue: '',
        message: false
    }

    handleChange = e => {
        this.setState({textValue: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({textValue: '', message: true})
    }

    render() {
        let sent 
        if (this.state.message == false) {
            sent = <div></div>
        } else if (this.state.message == true) {
            sent = <div className="message">Message Sent!</div>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 
                    {sent}
                    <div>
                        Say Hello:
                    </div> 
                    <br/>
                    <textarea value={this.state.textValue} onChange={this.handleChange}  />
                </label> 
                <br/>
            <input type="submit" value="Submit" />
            </form>
        )
    }


}


export default Chat