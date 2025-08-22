import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonSecondaryProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'day' | 'night';
    icon?: string;
    iconPosition?: 'right' | 'left';
    iconVariant?: 'outline' | 'bold';
    className?: string;
}
