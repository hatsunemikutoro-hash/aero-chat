'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';   // Ajuste o caminho se necessário
import FrutigerButtonAction from "../components/AeroButtonAction";

type Message = {
  id: string;
  text: string;
  username: string;
  created_at: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // Escutar mensagens em tempo real
  useEffect(() => {
    // Busca inicial
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (data) setMessages(data);
    };

    fetchMessages();

    // Realtime
    const channel = supabase
      .channel('messages')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'messages' }, 
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setMessages(prev => [...prev, payload.new as Message]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Enviar mensagem
  const sendMessage = async () => {
    if (!input.trim()) return;

    const { error } = await supabase
      .from('messages')
      .insert({
        text: input,
        username: "Você"   // Vamos melhorar isso depois
      });

    if (error) {
      console.error("Erro ao enviar:", error);
    } else {
      setInput("");
    }
  };

  return (
    <main className="min-h-screen bg-[url('/elijah_9.jpg')] bg-cover bg-center text-white flex items-center justify-center">
      <div className="bg-white/10 w-[800px] h-[620px] rounded-3xl backdrop-blur-md border border-white/30 shadow-xl flex flex-col overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="p-4 border-b border-white/20 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Chat Global</h1>
          <div className="text-sm text-emerald-400">● Online</div>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className="bg-white/20 px-4 py-3 rounded-2xl max-w-[75%] break-words"
            >
              <p className="text-xs text-white/60 mb-1">{msg.username}</p>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Input + Botão */}
        <div className="p-4 border-t border-white/20 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/60 outline-none focus:border-white/50"
          />
          
          <FrutigerButtonAction 
            texto="enviar" 
            onClick={sendMessage}
          />
        </div>
      </div>
    </main>
  );
}