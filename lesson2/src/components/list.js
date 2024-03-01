import React, { useState } from "react";

function MessageList() {
    const [messages, setMessage] = useState([
        { id: 'id1', text: "message 1"},
        { id: 'id2', text: "message 2"},
        { id: 'id3', text: "message 3"},
    ]);
    return messages.map((message) => <div key={message.id}>{message.text}</div>);
}

export default MessageList;