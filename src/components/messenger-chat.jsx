import MessengerCustomerChat from 'react-messenger-customer-chat';

import React from 'react'

const MessengerChat = () => {
  return (
    <div className='messenger'>
        <MessengerCustomerChat
            pageId="102445589297124"
            appId="773547577268695"
            htmlRef="http://localhost:3000"
        />
    </div>
  )
}

export default MessengerChat;