import Button from '@/components/Button';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
    src: string;
    title: string;
    text: string;
    buttonLink?: () => void;
    list?: ReactNode;
}

export function Card({ src, title, text, buttonLink, list }: CardProps) {
    return (
        <div className="flex flex-col justify-between gap-8 items-start bg-day-100 border rounded-xl border-night-400 p-7 lg:p-9 w-full h-full">
            <div className="flex flex-col gap-5 lg:gap-8">
                <Image src={src} alt="Icon" width={50} height={50} />

                <p className="font-semibold text-[24px] lg:text-[28px] leading-9">
                    {title}
                </p>
                <p className="text-[16px] lg:text-[18px] text-night-300 leading-6">
                    {text}
                </p>

                {list}
            </div>

            <Button onClick={buttonLink}>Saiba mais</Button>
        </div>
    );
}
