import { IconOutlined } from "./IconOutline";


export function ButtonOutlined({ children, icon, iconPosition = 'left', className, onClick }: ButtonOutlinedProps) {

    return (
        <button
            onClick={onClick}
            className={`w-fit py-2 px-5 rounded-lg flex justify-center items-center gap-2 bg-none border-[1.3px] border-crayola-500 text-crayola-500 font-medium hover:shadow-sm ${className}`}
        >
            {icon && iconPosition === 'left' && <IconOutlined name={icon} />}
            {children}
            {icon && iconPosition === 'right' && <IconOutlined name={icon} />}
        </button>
    )
}