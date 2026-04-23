import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/brand/solarled-logo-clean.png"
        alt="Solarled"
        width={950}
        height={285}
        priority
        className="h-auto w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[285px]"
      />
    </div>
  );
}
