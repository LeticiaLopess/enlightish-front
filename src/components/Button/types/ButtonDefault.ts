import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonDefaultProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: string;
    iconPosition?: 'right' | 'left';
    iconVariant?: 'outline' | 'bold';
    className?: string;
}
