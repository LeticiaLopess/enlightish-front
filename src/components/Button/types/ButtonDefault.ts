interface ButtonDefaultProps {
    children: React.ReactNode;
    icon?: string;
    iconPosition?: 'right' | 'left';
    iconVariant?: 'outline' | 'bold';
    className?: string;
    onClick?: () => void;
}