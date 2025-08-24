"use client";

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import Image from 'next/image';

export function TopbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const MenuButton = ({ title, href }: { title: string; href: string }) => (
        <a
            href={href}
            onClick={closeMenu}
            className="flex items-center justify-between cursor-pointer"
        >
            <p>{title}</p>
            <Icon name="ArrowRight2" size={18} />
        </a>
    );

    return (
        <div>
            <div className="h-16 flex items-center justify-between">
                <a href="#start">
                    <Image
                        src="/assets/logo-horizontal.svg"
                        alt="Logo Enlightish"
                        width={110}
                        height={100}
                    />
                </a>

                <button onClick={toggleMenu}>
                    <Icon name="HambergerMenu" size={24} />
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 right-0 bg-day-50 lg:hidden h-full transition-transform duration-500 z-50 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between h-24 px-6">
                    <Image
                        src="/assets/logo-horizontal.svg"
                        alt="Logo Enlightish"
                        width={110}
                        height={100}
                    />
                    <a onClick={toggleMenu} className="cursor-pointer">
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 54.1667L54.1667 7M54.1667 54.1667L30.5833 30.5833L7 7"
                                stroke="#EF2D55"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>

                <div className="bg-white flex flex-col justify-between h-[calc(100%-135px)]">
                    <div className="flex flex-col gap-7 pt-4 pb-8 px-6">
                        <MenuButton href="#intro" title="Início" />
                        <MenuButton href="#about" title="Sobre" />
                        <MenuButton href="#services" title="Serviços" />
                        <MenuButton href="#feedback" title="Feedback" />
                        <MenuButton href="#contact" title="Contato" />

                        <Button.Outlined
                            onClick={() =>
                                window.open(
                                    'https://wa.me/5521979168064',
                                    '_blank'
                                )
                            }
                            className="w-full"
                        >
                            Quero começar
                        </Button.Outlined>
                    </div>
                </div>
            </div>
        </div>
    );
}
