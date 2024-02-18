import React, { Component } from 'react';
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Cookies from 'js-cookie';
import './index.css'

class ChatRoute extends Component {
    state = {
        message: '',
        messagesList: [],
    }

    handleInputMessage = event => {
        this.setState({ message: event.target.value })
    }

    handleOnClick = () => {
        const { message, messagesList } = this.state
        const data = {
            text: message
        }
        this.setState({ messagesList: [...messagesList, data], message: '' })
        this.setState({ message: '' })
    }

    

    

    render() {
        const { messagesList,message } = this.state
        return (
            <div className='chat-bg-container'>
                <div className='user-details-container'>
                    <div className='chat-header-container'>
                        <h1 className='heading'>ChatSphere</h1>
                        <FaUserCircle className='user-icon'/>
                    </div>
                    <div className='visiters-container'>
                        <p className='name-icon'>NA</p>
                        <p className='heading'>Navitha</p> 

                    </div>
                </div>
                <div className="messages-container">
                    {messagesList.length !== 0 ? (
                        <ul className='ul-container'>
                            {messagesList.map((item, index) => (
                                <>
                                <li key={index} className='li-element'><span className='text'>{item.text}</span></li><br/>
                                </>
                            ))}
                        </ul>
                    ) : (
                        <p className='main-heding'>Enjoy Your Chat</p>
                    )}
                    <div className='send-bg-container'>
                        <input type="text" className='text-element' placeholder='Type your message here' onChange={this.handleInputMessage} value={message}/>
                        <button type="button" className='button' onClick={this.handleOnClick}><IoSend className='icon' /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoute;
