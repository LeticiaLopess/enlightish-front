import * as Icons from 'iconsax-react';
import { IconProps } from '../types/Icon';

export function IconOutlined({ name, size = 15, color = '#ffffff' }: IconProps) {
    const IconComponent = Icons[name as keyof typeof Icons];

    if(!IconComponent) {
        console.error(`Ícone ${name} não encontrado.`);
        return null;
    }

    return <IconComponent size={size} color={color} />;
}
