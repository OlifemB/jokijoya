import IconLocation from '../assets/icons/location.svg'
import IconPhone from '../assets/icons/phone.svg'
import IconLogo from '../assets/icons/logo.svg'
import IconMenu from '../assets/icons/menu.svg'
import {Button} from "../ui/button";

export const Header = () => {
    const onLogoClick = () => {
        console.log('onLogoClick')
    }

    const onMenuClick = () => {
        console.log('onMenuClick')
    }

    return (
        <header className={"flex fixed flex-row top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-[19px]"}>
            <div className={"w-[64px] h-[64px] flex items-center justify-center"} onClick={onLogoClick}>
                <IconLogo/>
            </div>

            <div className={"container mx-auto flex flex-row items-center justify-between"}>
                <div className={"flex items-center justify-center gap-4 py-[12px] h-[64px]"}>
                    <Button
                        iconBefore={<IconLocation/>}
                        text={'москва'}
                        className={'border-2 border-[#5834A4] border-solid rounded-xl drukCyrMedium text-[#5834A4] tracking-[1px]'}
                    />
                    <Button
                        iconBefore={<IconPhone/>}
                        text={'+7 (812) 635 22 77'}
                        href={'tel:88126352277'}
                        className={'border-2 border-[#5834A4] border-solid rounded-xl drukCyrMedium text-[#5834A4] tracking-[1px]'}
                    />
                </div>

                <div className={"flex items-center justify-center gap-4 py-[12px] h-[64px]"}>
                    <Button
                        text={'Купить билеты'}
                        className={'rounded-xl drukCyrMedium text-white bg-[#F269AF] tracking-[1px]'}
                    />
                    <Button
                        text={'Заказать праздник'}
                        className={'rounded-xl drukCyrMedium text-[#262626] bg-[#ABEC20] tracking-[1px]'}
                    />
                </div>
            </div>

            <div className={"w-[64px] h-[64px] flex items-center justify-center"} onClick={onMenuClick}>
                <IconMenu/>
            </div>
        </header>
    );
};