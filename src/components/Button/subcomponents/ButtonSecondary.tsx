import { IconBold } from "./IconBold";
import { IconOutlined } from "./IconOutline";


export function ButtonSecondary({ children, icon, variant = 'night', iconPosition = 'left', iconVariant = 'bold', className, onClick }: ButtonSecondaryProps) {

    const renderIcon = () => {
        if(icon) {
            if(iconVariant === 'outline') {
                return <IconOutlined name={icon} />;

            } else if(iconVariant === 'bold') {
                return <IconBold name={icon} />;
            }
        }
        return null;
    };

    return (
        <button
            onClick={onClick}
            className={`w-fit py-2 lg:py-1.5 px-3 rounded-lg text-sm flex justify-center items-center gap-2 ${variant === 'day' ? 'bg-day-300 hover:bg-day-300/95 text-day-950' : 'bg-night-50 hover:bg-night-50/95 text-night-400'} hover:shadow-sm ${className}`}
        >
            {icon && iconPosition === 'left' && renderIcon()}
            {children}
            {icon && iconPosition === 'right' && renderIcon()}
        </button>
    )
}