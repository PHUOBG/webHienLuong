import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../types';
import { askHuLaoAi, ChatMessage } from '../services/geminiAssistant';
import { Sparkles, X, Send, Bot, User, BookOpen, ExternalLink } from 'lucide-react';

interface HuLaoAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const HuLaoAiModal: React.FC<HuLaoAiModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Chào cháu! Ta là Hư Lão Số AI — Trí tuệ gìn giữ ký ức làng rèn cổ Hiền Lương hơn 500 năm bên dòng sông Bồ. 

Cháu muốn tìm hiểu về nguồn cội cụ Thủy tổ Hoàng Đình Chèm, bí quyết tôi thép bằng bùn non, các bậc nghệ nhân lão thành hay cộng đồng Hàng Kỉnh nghĩa tình? Ta luôn sẵn lòng sẻ chia cùng cháu.`,
      timestamp: 'Vừa xong',
      sources: [
        { title: 'Hồ sơ Làng Rèn Hiền Lương', route: 'gioi-thieu', note: 'Thế kỷ XV – Nay' },
        { title: 'Quần Thể Di Tích Cấp Quốc Gia', route: 'di-tich', note: 'Chùa Cổ Giác Lương Tự' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'Tìm hiểu lịch sử làng Hiền Lương.',
    'Nghề rèn truyền thống có những công đoạn nào?',
    'Tìm các bài viết về Hàng Kỉnh.',
    'Tìm tư liệu về các dòng họ đã được công bố.'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || input;
    if (!prompt.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: prompt.trim(),
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await askHuLaoAi(prompt);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        sources: response.sources
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'Thành thật cáo lỗi cùng cháu, đường truyền về bến sông Bồ đang bị gián đoạn. Cháu vui lòng thử lại sau giây lát nhé.',
        timestamp: 'Vừa xong'
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F4] w-full max-w-2xl h-[90vh] sm:h-[82vh] rounded-2xl shadow-2xl border border-[#E8DFC9] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#211D1A] text-white p-4 flex items-center justify-between border-b border-[#75543D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C94E16] to-[#C5A15B] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base text-amber-100">
                  Hư Lão Số AI
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C94E16]/30 text-amber-300 border border-[#C94E16]/50">
                  Tri thức làng nghề
                </span>
              </div>
              <p className="text-[11px] text-stone-300">
                Trợ lý tri thức số hóa di sản Làng Rèn Cổ Hiền Lương
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#75543D] text-[#F8F5EF] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4 text-amber-300" />
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[78%] space-y-2`}>
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#C94E16] text-white rounded-tr-xs shadow-sm'
                      : 'bg-white text-[#211D1A] border border-[#E8DFC9] rounded-tl-xs shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className={`text-[10px] block mt-1.5 ${msg.sender === 'user' ? 'text-amber-100 text-right' : 'text-stone-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {/* Verified sources chips */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="bg-[#FAF0E4] border border-[#E8DFC9] rounded-lg p-2.5 space-y-1.5">
                    <p className="text-[11px] font-bold text-[#75543D] flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#C94E16]" />
                      Tư liệu xác thực liên quan:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.sources.map((src, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            onNavigate(src.route as PageRoute);
                            onClose();
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-[#C94E16] hover:text-white border border-[#E3DAC8] text-[#211D1A] text-[11px] font-medium transition-colors"
                        >
                          <span>{src.title}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#211D1A] text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 text-amber-300" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-stone-500 text-xs italic pl-11">
              <span className="w-2 h-2 rounded-full bg-[#C94E16] animate-ping" />
              <span>Hư lão đang lần mở trang sử ký làng rèn...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 py-2 bg-[#F3EDE2] border-t border-[#E8DFC9] overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max text-xs">
            <span className="text-[11px] text-[#75543D] font-bold">Gợi ý hỏi:</span>
            {suggestedPrompts.map((sp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(sp)}
                disabled={loading}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-[#C94E16] hover:text-white border border-[#E3DAC8] text-[#211D1A] transition-colors text-[11px]"
              >
                {sp}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <div className="p-3 bg-white border-t border-[#E8DFC9] flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Hỏi Hư lão về 5 công đoạn rèn, cụ Thủy tổ, Chùa Giác Lương..."
            className="flex-1 bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#211D1A] placeholder-stone-400 focus:outline-hidden focus:border-[#C94E16]"
            disabled={loading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-[#C94E16] hover:bg-[#B04212] disabled:opacity-50 text-white transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
