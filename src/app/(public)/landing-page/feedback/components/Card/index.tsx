import Image from 'next/image';

interface CardProps {
  src: string;
  name: string;
  career: string;
  text: string;
}

export function Card({ src, name, career, text }: CardProps) {
  return (
    <div className="flex flex-col justify-between gap-8 items-start bg-day-100 border rounded-xl p-5 lg:p-9 w-full lg:min-w-[420px]">
        <div className="flex flex-col gap-8 h-full justify-between">

            <p className='text-[16px] leading-6'>{text}</p>

            <div className='flex gap-3'>
                <Image
                    src={src}
                    alt="Student"
                    width={50}
                    height={50}
                    className='rounded-full'
                />

                <div>
                    <p className='font-semibold text-[14px] lg:text-[15px]'>{name}</p>
                    <p className='text-[14px] lg:text-[15px] text-night-500'>{career}</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}
