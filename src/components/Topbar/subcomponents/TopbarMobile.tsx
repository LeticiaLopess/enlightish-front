import { useState } from 'react';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import Image from 'next/image';

export function TopbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Specific Components
    const MenuButton = ({ title, onClick }: { title: string; onClick?: () => void }) => (
        <button
            onClick={onClick}
            className="flex items-center justify-between"
        >
            <p>{title}</p>
            <Icon name='ArrowRight2' size={18} />
        </button>
    );

    return (
        <div>
            <div className="h-24 flex items-center justify-between">
                <button>
                    <Image
                        src="/assets/logo-horizontal.svg"
                        alt="Logo Enlightish"
                        width={110}
                        height={100}
                    />
                </button>

                <button onClick={toggleMenu}>
                    <Icon name='HambergerMenu' size={24} />
                </button>
            </div>

            <div className={`absolute top-0 left-0 right-0 bg-day-50 px-6 lg:hidden h-full transition-transform duration-500 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='flex items-center justify-between h-24'>
                    <Image
                        src="/assets/logo-horizontal.svg"
                        alt="Logo Enlightish"
                        width={110}
                        height={100}
                    />
                    <a onClick={toggleMenu} className='cursor-pointer'>
                        <svg width="19" height="19" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 54.1667L54.1667 7M54.1667 54.1667L30.5833 30.5833L7 7" stroke="#EF2D55" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <div className='flex flex-col justify-between h-[calc(100%-135px)]'>
                    <div className="flex flex-col gap-7 pt-4">
                        <MenuButton title='Início' />
                        <MenuButton title='Sobre' />
                        <MenuButton title='Serviços' />
                        <MenuButton title='Feedback' />
                        <MenuButton title='Contato' />
                    </div>

                    <Button.Outlined className='w-full'>Quero Começar</Button.Outlined>
                </div>
            </div>
        </div>
    );
}
