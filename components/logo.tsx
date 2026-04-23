import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/brand/solarled-logo-clean.png"
        alt="Solar LED"
        width={1086}
        height={376}
        priority
        className="h-auto w-[150px] sm:w-[180px] lg:w-[220px] xl:w-[250px]"
      />
    </div>
  );
}
