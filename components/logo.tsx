import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/brand/solarled-logo.png"
        alt="Solarled"
        width={580}
        height={160}
        priority
        className="h-auto w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[290px]"
      />
    </div>
  );
}
