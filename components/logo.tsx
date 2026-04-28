import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/brand/solarled-logo-color.png" alt="Solarled" width={1280} height={228} priority className="h-auto w-[155px] sm:w-[190px] lg:w-[230px] xl:w-[270px]" />
    </div>
  );
}
