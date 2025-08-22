import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ButtonLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    to?: string;
}
