import Image from 'next/image';

interface CardProps {
  src: string;
  title: string;
  text: string;
}

export function Card({ src, title, text }: CardProps) {
  return (
    <div className="flex flex-col gap-4 items-start bg-day-100 p-7 w-full lg:w-[240px] rounded-lg">
        <div className='p-3.5 bg-crayola-50 border border-crayola rounded-lg'>
            <Image
                src={src}
                alt="Icon"
                width={20}
                height={20}
            />
        </div>

        <p className='font-semibold text-[22px] leading-7'>{title}</p>
        <p className='text-[16px] text-night-300 leading-5'>{text}</p>
    </div>
  );
}
