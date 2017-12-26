import React from 'react';
import Moment from 'react-moment';
import './styles.css';

const Message = (props) => {
    return (
        <div className="message-block">
            <div className="header">
                <span className="user">{props.message.user}</span>
                <span className="date"><Moment format="YYYY/MM/DD hh:mm:ss">{props.message.date}</Moment></span>
            </div>
            <div className="text">{props.message.text}</div>
        </div>
    )
};

export default Message;