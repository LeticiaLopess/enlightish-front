import * as Icons from 'iconsax-react';
import { IconProps } from './types/icon';

export function Icon({ name, size = 15, color = '#222222', variant = 'Outline', className }: IconProps) {
    const IconComponent = Icons[name as keyof typeof Icons];

    if(!IconComponent) {
        console.error(`Ícone ${name} não encontrado.`);
        return null;
    }

    return <IconComponent size={size} color={color} variant={variant} className={className} />;
}
