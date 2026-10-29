import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Mic } from 'lucide-react';

export const AudioPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<any>(null);

  // Play synthetic anvil rhythm sound
  const playAnvilClink = () => {
    try {
      const ctx = audioContextRef.current || new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = ctx;

      // Anvil high metallic ring
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400 + Math.random() * 200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // AudioContext fallback
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    } else {
      setIsPlaying(true);
      playAnvilClink();
      intervalRef.current = setInterval(() => {
        playAnvilClink();
        setCurrentTime((prev) => (prev + 1) % 165);
      }, 1200);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#FAF8F4] border border-[#E8DFC9] rounded-xl p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-[#75543D] uppercase tracking-wider">
        <span className="flex items-center gap-1.5">
          <Mic className="w-3.5 h-3.5 text-[#C94E16]" />
          KÝ ỨC ĐIỀN DÃ
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-[#C94E16]">
          Âm thanh di sản
        </span>
      </div>

      <h4 className="font-serif font-bold text-base text-[#211D1A]">
        Tiếng Đe Búa Lúc 04:30 Sáng
      </h4>

      {/* Audio player card */}
      <div className="bg-[#EFE9DC] rounded-lg p-3 flex items-center gap-3 border border-[#E3DAC8]">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-[#C94E16] hover:bg-[#B04212] text-white flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-sm"
          aria-label={isPlaying ? 'Tạm dừng' : 'Phát âm thanh'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#211D1A] truncate">
              Âm vang bễ thụt đầu ngày
            </span>
            <span className="text-[11px] font-mono text-[#75543D] shrink-0">
              {formatTime(currentTime)} / 02:45
            </span>
          </div>
          <p className="text-[11px] text-[#75543D] truncate">
            Ghi âm thực địa xóm Rèn Phong Hiền
          </p>

          {/* Waveform graphic */}
          <div className="flex items-center gap-0.5 h-3 mt-1.5">
            {[40, 75, 30, 90, 60, 100, 45, 80, 65, 35, 95, 70, 50, 85, 30, 90, 60, 40].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-full transition-all duration-200 ${
                  isPlaying ? 'bg-[#C94E16] animate-pulse' : 'bg-stone-300'
                }`}
                style={{ height: isPlaying ? `${Math.max(20, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '30%' }}
              />
            ))}
          </div>
        </div>

        <Volume2 className={`w-4 h-4 shrink-0 ${isPlaying ? 'text-[#C94E16]' : 'text-stone-400'}`} />
      </div>

      <p className="text-xs text-[#5C4D43] leading-relaxed italic">
        &ldquo;Khi sương mù bên bờ sông Bồ chưa tan, từ ngõ xóm Phong Hiền đã vang lên nhịp gõ đe quen thuộc. Người thợ cả kiểm tra than cước, người phụ kéo bễ lò thổi ngọn lửa xanh rực. Đó là tín hiệu bắt đầu một ngày mới lao động bền bỉ không dứt suốt bao đời.&rdquo;
      </p>
    </div>
  );
};
