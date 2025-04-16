import React, { useState } from "react";
import Chatbot from "./Chatbot";
import Wsp from "./wsp/wsp";

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-end">
      {/* WhatsApp - se mueve si el chat está abierto */}
      <div className={`transition-all duration-300 ${isChatOpen ? "mr-20" : "mr-0"}`}>
        <Wsp />
      </div>

      {/* Chatbot - se le pasa el setter */}
      <Chatbot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </div>
  );
}
