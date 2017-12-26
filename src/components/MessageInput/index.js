import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './styles.css';

class MessageInput extends React.Component {
    constructor() {
        super();
        this.send = this.send.bind(this);

        this.state = {
            message: ''
        }
    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.send();
        }
    };

    send() {
        const data = {
            text: this.state.message,
            date: new Date(),
            user: this.props.login || 'anonymous'
        };

        if (this.state.message !== '') {
            this.props.socket.emit('addMessage', data);
            this.setState({
                message: ''
            })
        }
    }

    render() {
        return (
            <div className="chat-bottom">
                <TextField
                    hintText="Ваше сообщение..."
                    fullWidth={true}
                    value={this.state.message}
                    onChange={(e) => { this.setState({
                        message: e.target.value
                    })}}
                    onKeyPress={this.handleKeyPress}
                />
                <RaisedButton
                    className="send-button"
                    label="Отправить"
                    disabled={!this.state.message}
                    onClick={this.send}
                />
            </div>
        )
    }
}

export default MessageInput;