'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setFadeOut(true), 1050);
    const t2 = window.setTimeout(() => setVisible(false), 1500);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#020817] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <Image
          src="/images/brand/solarled-logo-clean.png"
          alt="Solarled"
          width={950}
          height={285}
          priority
          className="h-auto w-[230px] sm:w-[290px]"
        />
        <div className="mt-8 h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[loader_1.2s_ease-in-out_infinite] rounded-full bg-cyan" />
        </div>
      </div>
    </div>
  );
}
