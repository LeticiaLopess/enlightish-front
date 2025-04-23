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
            className={`w-fit py-2 px-5 rounded-lg flex justify-center items-center gap-2 ${variant === 'day' ? 'bg-day hover:bg-day/95 text-day-950' : 'bg-night-50 hover:bg-night-50/95 text-night-400'} hover:shadow-sm ${className}`}
        >
            {icon && iconPosition === 'left' && renderIcon()}
            {children}
            {icon && iconPosition === 'right' && renderIcon()}
        </button>
    )
}