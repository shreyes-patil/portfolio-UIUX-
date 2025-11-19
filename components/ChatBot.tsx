import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ArrowUp, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: ChatSender.AI,
      text: "Hey there! I'm Shreyas's digital assistant. I can tell you about his iOS projects, experience, or tech stack.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await generateChatResponse(userText);
      const newAiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: ChatSender.AI,
        text: aiResponseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-glow transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 ${
          isOpen 
            ? 'bg-white text-dark rotate-90 shadow-2xl' 
            : 'bg-black text-white'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X strokeWidth={2.5} size={24} /> : <MessageCircle strokeWidth={2.5} size={24} />}
      </button>

      {/* Chat Window - iOS Style */}
      <div
        className={`fixed bottom-24 right-6 w-[350px] sm:w-[380px] glass-panel rounded-[32px] shadow-2xl z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-bottom-right overflow-hidden flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-white/50 backdrop-blur-md p-4 flex flex-col items-center border-b border-black/5 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 mb-2 overflow-hidden flex items-center justify-center">
                <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-dark font-bold text-sm">Portfolio Assistant</h3>
            <p className="text-secondary text-[10px] font-medium">iMessage • Now</p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white/40 backdrop-blur-xl scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === ChatSender.USER ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 text-[15px] leading-relaxed shadow-sm ${
                  msg.sender === ChatSender.USER
                    ? 'bg-primary text-white rounded-[20px] rounded-br-md'
                    : 'bg-[#e9e9eb] text-black rounded-[20px] rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
              {/* Timestamp stub or status */}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start">
              <div className="bg-[#e9e9eb] px-4 py-3 rounded-[20px] rounded-bl-md flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white/80 backdrop-blur-md border-t border-white/50">
          <div className="flex items-center bg-white rounded-full px-1 py-1 border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="iMessage"
              className="flex-1 bg-transparent outline-none text-[15px] text-dark placeholder-slate-400 px-4 py-2"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-full bg-primary text-white hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-400 transition-all duration-300 flex-shrink-0 w-8 h-8 flex items-center justify-center"
            >
              <ArrowUp size={16} strokeWidth={3} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;