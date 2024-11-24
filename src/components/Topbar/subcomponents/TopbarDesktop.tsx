import { Button } from '@/components/Button';
import Image from 'next/image';

export function TopbarDesktop() {
    return (
        <div className="h-20 flex items-center justify-between">
            <Image
                src="/assets/logo-horizontal.svg"
                alt="Logo Enlightish"
                width={120}
                height={100}
            />

            <div className='flex gap-6'>
                <Button.Link>Início</Button.Link>
                <Button.Link>Sobre Nós</Button.Link>
                <Button.Link>Serviços</Button.Link>
                <Button.Link>Feedback</Button.Link>
                <Button.Link>Contato</Button.Link>
                <Button.Outlined>Quero Começar</Button.Outlined>
            </div>
        </div>
    )
}