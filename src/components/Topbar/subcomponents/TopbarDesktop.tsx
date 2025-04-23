import { Button } from '@/components/Button';
import Image from 'next/image';

export function TopbarDesktop() {
    return (
        <div className="h-20 flex items-center justify-between">
            <button>
                <Image
                    src="/assets/logo-horizontal.svg"
                    alt="Logo Enlightish"
                    width={120}
                    height={100}
                />
            </button>

            <div className='flex gap-6'>
                <Button.Link to="#intro">Início</Button.Link>
                <Button.Link to="#about">Sobre</Button.Link>
                <Button.Link to="#services">Serviços</Button.Link>
                <Button.Link to="#feedback">Feedback</Button.Link>
                <Button.Link to="#contact">Contato</Button.Link>
                <Button.Outlined className='text-sm'>Quero começar</Button.Outlined>
            </div>
        </div>
    )
}