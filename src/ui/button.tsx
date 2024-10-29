import clsx from "clsx";

interface IButton {
    text: string
    iconBefore?: any
    iconAfter?: any
    className?: string
    href?: string
}

export const Button = ({iconBefore, iconAfter, text, className}: IButton) => {
    return (
        <button
            className={clsx('flex flex-row gap-2 items-center justify-center px-[12px] py-[2px] text-[22px] ', className)}>
            {iconBefore && iconBefore}
            <div className={'uppercase drukCur block'}>{text}</div>
            {iconAfter && iconAfter}
        </button>
    );
};