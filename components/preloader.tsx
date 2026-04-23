'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setFadeOut(true), 1650);
    const t2 = window.setTimeout(() => setVisible(false), 2200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#04091f] transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute left-[18%] top-[22%] h-40 w-40 rounded-full bg-cyan/15 blur-3xl" />
      <div className="absolute bottom-[16%] right-[14%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative flex h-[13.5rem] w-[13.5rem] items-center justify-center sm:h-[15rem] sm:w-[15rem]">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-4 rounded-full border border-cyan/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border border-cyan/20 animate-[pulse-ring_2.4s_ease-in-out_infinite]" />
          <div className="absolute h-3.5 w-3.5 -translate-y-[5.7rem] rounded-full bg-cyan shadow-[0_0_22px_rgba(61,99,210,0.85)] animate-[spin_6s_linear_infinite] origin-[0_5.7rem]" />
          <div className="relative rounded-full bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <Image
              src="/brand/solarled-logo-clean.png"
              alt="Solar LED"
              width={1086}
              height={376}
              priority
              className="h-auto w-[170px] sm:w-[210px]"
            />
          </div>
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.42em] text-white/80">Cargando energía solar</p>
        <div className="mt-5 h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[shine-slide_1.3s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20" />
        </div>
      </div>
    </div>
  );
}
