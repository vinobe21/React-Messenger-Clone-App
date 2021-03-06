import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';


const Message = forwardRef(({ message, userName }, ref) => {
    const isUser = userName === message.userName;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography color="white" variant="subtitle1" component="subtitle1" >
                        {!isUser && `${message.userName || 'Unknown'}: `}  {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
)
export default Message;
