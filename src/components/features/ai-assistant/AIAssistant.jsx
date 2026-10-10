import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../../../context/LanguageContext';

export default function AIAssistant() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      id: 1,
      role: 'assistant',
      content: t.aiAssistant.initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const idCounterRef = useRef(2);

  const quickReplies = t.aiAssistant.quickReplies;

  useEffect(() => {
    setMessages([
      {
        id: 1,
        role: 'assistant',
        content: t.aiAssistant.initialMessage,
        timestamp: new Date(),
      },
    ]);
    idCounterRef.current = 2;
  }, [t.aiAssistant.initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    const responses = t.aiAssistant.botResponses;
    
    if (msg.includes('spider') && (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('precio') || msg.includes('cuánto'))) {
      return responses.spider;
    }
    
    if (msg.includes('roach') || msg.includes('german') || msg.includes('cucaracha')) {
      return responses.roach;
    }
    
    if (msg.includes('area') || msg.includes('serve') || msg.includes('location') || msg.includes('área') || msg.includes('sirven') || msg.includes('ubicación')) {
      return responses.area;
    }
    
    if (msg.includes('quote') || msg.includes('request') || msg.includes('estimate') || msg.includes('cotización') || msg.includes('solicitar')) {
      return responses.quote;
    }
    
    if (msg.includes('hour') || msg.includes('open') || msg.includes('time') || msg.includes('horario') || msg.includes('abierto')) {
      return responses.hours;
    }
    
    if (msg.includes('bed bug') || msg.includes('bedbug') || msg.includes('chinche')) {
      return responses.bedBug;
    }
    
    if (msg.includes('rodent') || msg.includes('mouse') || msg.includes('rat') || msg.includes('roedor') || msg.includes('ratón') || msg.includes('rata')) {
      return responses.rodent;
    }
    
    if (msg.includes('flea') || msg.includes('tick') || msg.includes('pulga') || msg.includes('garrapata')) {
      return responses.fleaTick;
    }
    
    if (msg.includes('mosquito') || msg.includes('mosquito')) {
      return responses.mosquito;
    }
    
    if (msg.includes('hoa') || msg.includes('community') || msg.includes('property manager') || msg.includes('hoa') || msg.includes('comunidad') || msg.includes('administrador')) {
      return responses.hoa;
    }
    
    return responses.default;
  };

  const handleSend = useCallback((e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    
    const userMsg = {
      id: idCounterRef.current++,
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const delay = 800 + Math.floor(Math.random() * 600);
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      const botMsg = {
        id: idCounterRef.current++,
        role: 'assistant',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  }, [input, isTyping]);

  const handleQuickReply = useCallback((reply) => {
    setInput(reply);
    handleSend({ preventDefault: () => {} });
  }, [handleSend]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        className="fixed bottom-16 right-6 z-50 flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 bg-primary text-white rounded-xl shadow-xl transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/30"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? t.aiAssistant.closeLabel : t.aiAssistant.openLabel}
        aria-controls="ai-assistant-panel"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 11h8M12 11v4" />
          <circle cx="8" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
        <span className="hidden md:inline font-semibold">{t.aiAssistant.toggleText}</span>
        {!isOpen && <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" aria-hidden="true" />}
      </button>

      <div
        id="ai-assistant-panel"
        className={`fixed bottom-30 right-6 z-50 w-full max-w-sm md:max-w-[380px] h-[500px] md:h-[600px] max-h-[70vh] bg-surface rounded-2xl shadow-2xl border border-border flex flex-col transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 scale-100 opacity-100 visible pointer-events-auto' : 'translate-y-8 scale-95 opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-label={t.aiAssistant.title}
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-background rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center" aria-hidden="true">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 11h8M12 11v4" />
                <circle cx="8" cy="15" r="1" fill="currentColor" />
                <circle cx="16" cy="15" r="1" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-text">{t.aiAssistant.title}</h3>
              <span className="text-xs text-success font-medium">{t.aiAssistant.status}</span>
            </div>
          </div>
          <button
            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:bg-border hover:text-text transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label={t.aiAssistant.closeLabel}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-md'
                  : 'bg-background text-text rounded-bl-md'
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                <span className={`block text-xs mt-1 ${msg.role === 'user' ? 'text-white/70' : 'text-text-muted/70'}`}>
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-background text-text rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{animationDelay: '0ms'}} />
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{animationDelay: '150ms'}} />
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{animationDelay: '300ms'}} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ul className="p-4 border-t border-border bg-background/50 flex flex-wrap gap-2 overflow-x-auto" role="list" aria-label="Quick reply suggestions">
          {quickReplies.map((reply) => (
            <li key={reply}>
              <button
                className="whitespace-nowrap px-3 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-150"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSend} className="p-4 bg-surface border-t border-border flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.aiAssistant.placeholder}
            className="flex-1 px-4 py-3 text-sm border border-border rounded-xl bg-background text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-50"
            aria-label="Your message"
            disabled={isTyping}
          />
          <button
            type="submit"
            className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark hover:scale-105 transition-all duration-150 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex-shrink-0"
            disabled={!input.trim() || isTyping}
            aria-label={t.aiAssistant.sendLabel}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 22 2" />
            </svg>
          </button>
        </form>

        <p className="px-4 pb-4 text-xs text-text-muted text-center leading-relaxed">
          {t.aiAssistant.disclaimer}
        </p>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-background/60 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}