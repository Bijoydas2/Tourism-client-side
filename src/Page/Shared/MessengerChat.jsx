import React, { useState, useRef, useEffect } from "react";
import { FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";

const uuid = () => Math.random().toString(36).slice(2, 9);

const MessengerChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: uuid(),
      role: "assistant",
      text: "👋 Welcome to Tour Mate! How can I assist you with your next adventure?",
      createdAt: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: uuid(), role: "user", text, createdAt: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const assistantMsg = {
        id: uuid(),
        role: "assistant",
        text: data.reply || "😅 Sorry, I couldn’t find any tour info about that.",
        createdAt: Date.now(),
      };
      setMessages((m) => [...m, assistantMsg]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: uuid(),
          role: "assistant",
          text: "⚠️ Something went wrong. Please try again later.",
          createdAt: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Tour Mate Chat"
        className="fixed bottom-6 right-6 bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
      >
        <FaFacebookMessenger size={28} />
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-20 right-4 w-72 md:w-96 max-h-[75vh] bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-blue-700 text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-700 font-bold">
                🧭
              </div>
              <div>
                <div className="text-sm font-semibold">Tour Mate Assistant</div>
                <div className="text-xs text-blue-100">Your travel companion</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-auto p-3 space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  } px-3 py-2 rounded-xl max-w-[80%] text-sm shadow-sm`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-600 border border-gray-200 px-3 py-2 rounded-lg text-sm italic">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="border-t border-gray-200 bg-white p-3">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition disabled:opacity-50"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessengerChat;
