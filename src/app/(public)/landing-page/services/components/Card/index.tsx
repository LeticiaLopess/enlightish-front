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
        <div className="flex flex-col justify-between gap-8 items-start bg-day-100 border rounded-xl border-night-400 p-7 lg:p-8 w-full h-full">
            <div className="flex flex-col gap-5 lg:gap-8">
                <Image src={src} alt="Icon" width={45} height={45} />

                <p className="font-semibold text-[25px] leading-9 max-w-[12rem]">
                    {title}
                </p>
                <p className="text-[15px] text-night-300 leading-6">
                    {text}
                </p>

                {list}
            </div>

            <Button onClick={buttonLink}>Saiba mais</Button>
        </div>
    );
}
