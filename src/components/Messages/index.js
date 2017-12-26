import React from 'react';

import Message from './Message';

import './styles.css';

class Messages extends React.Component {
    componentDidMount() {
        const socket = this.props.socket;

        socket.on('updateMessages', message => {
            this.props.updateMessages(message)
        });

        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        const { messages } = this.props;

        return (
        <div className="container">
            <div className="border-block border-block-top" />
            <div className={ messages.length === 0 ? 'messages-empty' : 'messages' }>
                {messages.length > 0 && messages.map((mes, i) => {
                    return <Message key={i} message={mes} />
                })}
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
            <div className="border-block border-block-bottom" />
        </div>

        )
    }
}

export default Messages;