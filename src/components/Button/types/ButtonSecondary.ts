export interface ButtonSecondaryProps {
    children: React.ReactNode;
    variant?: 'day' | 'night';
    icon?: string;
    iconPosition?: 'right' | 'left';
    iconVariant?: 'outline' | 'bold';
    className?: string;
    onClick?: () => void;
}