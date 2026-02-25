'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePrav } from './PravProvider';
import { X, CornerDownLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef, useEffect } from 'react';
import { pravChat } from '@/ai/flows/prav-chat';
import { PravIcon } from './PravIcon';

interface Message {
    role: 'user' | 'model';
    content: string;
}

export function PravPanel() {
  const { isOpen, setIsOpen } = usePrav();
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<Message[]>([
    { role: 'model', content: "Hi, I’m Prav 🤖 — your AI companion from Praverse. Ask me about our labs or projects." }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, loading]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;
    
    const newUserMessage: Message = { role: 'user', content: message };
    const newHistory = [...history, newUserMessage];
    
    setHistory(newHistory);
    setMessage('');
    setLoading(true);

    // Add a placeholder for the model's response
    setHistory(prev => [...prev, { role: 'model', content: '' }]);

    try {
        const result = await pravChat({history: newHistory});
        
        // Update the last message (the placeholder) with the actual response
        setHistory(prev => {
            const updated = [...prev];
            updated[updated.length - 1].content = result.response;
            return updated;
        });

    } catch (error) {
        console.error("Prav chat error:", error);
        setHistory(prev => {
            const updated = [...prev];
            updated[updated.length - 1].content = "Sorry, I'm having a little trouble connecting right now. Please try again in a moment.";
            return updated;
        });
    } finally {
        setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-background/50 backdrop-blur-xl border border-border/20"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-50 blur-lg" />
          
          <div className="relative z-10 flex flex-col h-full bg-background/70">
            <header className="p-4 flex items-center justify-between border-b border-border/20 flex-shrink-0">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-full">
                   <PravIcon className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Prav</h3>
                   <p className="text-sm text-muted-foreground">AI Companion</p>
                 </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </header>

            <div ref={scrollAreaRef} className="flex-grow overflow-y-auto space-y-4 p-4">
              {history.map((msg, index) => (
                <div key={index} className={`flex gap-2.5 items-start ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'model' && 
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <PravIcon className="h-5 w-5 text-primary" />
                    </div>
                  }
                  <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-br-none' 
                      : 'bg-muted rounded-bl-none'
                  }`}>
                    {msg.content}
                     {loading && msg.role === 'model' && index === history.length -1 && <span className="inline-block w-1.5 h-1.5 bg-current rounded-full ml-1 animate-pulse" />}
                  </div>
                </div>
              ))}
            </div>

            <footer className="p-4 border-t border-border/20 flex-shrink-0">
              <div className="relative w-full">
                <Input 
                  placeholder="Ask about our labs..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="pr-10 bg-muted border-0 focus-visible:ring-primary"
                  disabled={loading}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
                  onClick={handleSend}
                  disabled={!message.trim() || loading}
                >
                  {loading ? <Sparkles className="h-4 w-4 animate-pulse" /> : <CornerDownLeft className="h-4 w-4" />}
                </Button>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
