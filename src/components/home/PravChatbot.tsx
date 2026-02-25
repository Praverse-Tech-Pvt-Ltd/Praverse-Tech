
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bot, Send, X, CornerDownLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

export function PravChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([
    { role: 'model', content: "Hi, I’m Prav 🤖 — your AI companion from Praverse. Ask me about our labs or projects." }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setHistory(prev => [...prev, { role: 'user', content: message }]);
    
    // Placeholder for AI response
    setTimeout(() => {
        setHistory(prev => [...prev, { role: 'model', content: "Thanks for your question! This functionality is coming soon." }]);
    }, 1000);

    setMessage('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999]">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            size="icon"
            className="rounded-full w-16 h-16 shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <Bot className="h-8 w-8" />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 z-[9999]"
          >
            <Card className="w-[350px] shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-primary/10 rounded-full">
                     <Bot className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <CardTitle>Prav</CardTitle>
                     <CardDescription>AI Companion</CardDescription>
                   </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="h-[400px] overflow-y-auto space-y-4 p-4">
                {history.map((msg, index) => (
                  <div key={index} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'model' && <Bot className="h-5 w-5 text-primary flex-shrink-0" />}
                    <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="relative w-full">
                  <Input 
                    placeholder="Ask about our labs..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="pr-10"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={handleSend}
                    disabled={!message.trim()}
                  >
                    <CornerDownLeft className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
