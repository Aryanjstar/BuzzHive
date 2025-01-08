import React, { useState, useEffect, useCallback } from "react";
import { Send, Loader2, Moon, Sun } from "lucide-react"; // Removed MessageCircle

const ChatClient = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(true);

  // WebSocket setup
  useEffect(() => {
    const wsConnection = new WebSocket("wss://8f07-13-51-196-191.ngrok-free.app");
    wsConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "requestId") {
        setRequestId(data.requestId);
      } else if (data.type === "response") {
        setMessages((prev) => [
          ...prev,
          { text: data.message, type: "response" },
        ]);
        setIsLoading(false);
      } else if (data.type === "error") {
        setError(data.message);
        setIsLoading(false);
      }
    };

    wsConnection.onerror = () => {
      setError("WebSocket connection error");
      setIsLoading(false);
    };

    setWs(wsConnection);
    return () => wsConnection.close();
  }, []);

  // Send message handler
  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);

      const response = await fetch("https://8f07-13-51-196-191.ngrok-free.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_value: inputMessage, requestId }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setInputMessage("");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading]);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      {/* Background with space gradient */}
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white p-4">
        {/* Chat Box */}
        <div className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-b from-gray-800/90 to-gray-900/90 rounded-3xl shadow-2xl backdrop-blur-md">
          {/* Header with space theme toggle */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600 transition-colors">
              {isDark ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>

          {/* Messages container */}
          <div className="h-96 overflow-y-auto mb-6 p-4 bg-gradient-to-t from-gray-900/80 to-gray-800/70 rounded-lg border border-gray-700 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl max-w-[75%] ${
                  message.type === "user"
                    ? "ml-auto bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg"
                    : "mr-auto bg-gray-700 text-gray-200 shadow-md"
                }`}>
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-400">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending your message...</span>
              </div>
            )}
          </div>

          {/* Error display */}
          {error && (
            <div className="mb-4 p-4 bg-red-500/20 text-red-400 rounded-lg border border-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Input area */}
          <div className="flex gap-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message to the stars..."
              className="flex-1 p-3 bg-gray-800/70 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 transition"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:scale-105 disabled:opacity-50 transition-transform">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatClient;
