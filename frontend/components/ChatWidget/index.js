import React from "react";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const ChatWidget = () => {
  return (
    <div>
      <WhatsAppWidget
        companyName="Good Vibes Education Consultancy"
        phoneNumber="9869060120"
        message="How May I Help You?."
      />
    </div>
  );
};

export default ChatWidget;
