import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { updateMessages } from '../../modules/messages/actions';

import Messages from '../../components/Messages';
import MessageInput from '../../components/MessageInput';

import './styles.css';

class App extends Component {
    render() {
        const { socket, messages, updateMessages, login } = this.props;

        return (
            <div className="chat">
                <div className="chat-container">
                    <div className="chat-container-inner">
                        <Messages
                            socket={socket}
                            messages={messages}
                            updateMessages={updateMessages}
                        />
                        <MessageInput
                            socket={socket}
                            login={login}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        messages: state.messages.messages,
        socket: state.messages.socket,
        login: state.auth.login
    }), {
        updateMessages
    }
)(App);
