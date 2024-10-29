import Logo from '../assets/icons/Logo vert 1.svg'
import IconVK from '../assets/icons/Vk.svg'
import IconTG from '../assets/icons/Telegram.svg'
import IconJJ from '../assets/icons/Jjsocial.svg'
import Arrow from '../assets/icons/arrowScewRightUp.svg'
import {Button} from "../ui/button";

const phones = [{
    title: '+7 (495) 181 22 77',
    text: '(МОСКВА, ТВЕРЬ)',
    link: '84951812277',
}, {
    title: '+7 (812) 635 22 77',
    text: '(САНКТ-ПЕТЕРБУРГ)',
    link: '88126352277',
}]

const social = [{
    icon: IconVK,
    href: '',
}, {
    icon: IconTG,
    href: '',
}, {
    icon: IconJJ,
    href: '',
},]

const labelsC = [{
    title: 'Joki Joya ©',
}, {
    title: '2023',
}, {
    title: 'joki-joya.ru'
}]

export const Footer = () => {
    return (
        <footer className={"flex flex-row bottom-0 left-0 right-0 z-50 bg-[#F269AF] h-[160px] py-[58px]"}>
            <div className={'flex flex-row justify-between items-center container mx-auto'}>
                <Logo className={'w-full h-auto'}/>

                <div className={'flex flex-col'}>
                    {phones.map((item, index) =>
                        <div className={'flex flex-col drukwidecyrMedium text-[13px] cursor-pointer'}
                             key={'phones' + index}>
                            <a href={item.link} className={'text-[#ABEC20]'}>{item.title}</a>
                            <span className={'text-white'}>{item.text}</span>
                        </div>
                    )}
                </div>

                <div className={'flex flex-row gap-[80px]'}>
                    {social.map(({icon: Icon}, index) =>
                        <div className={'cursor-pointer'}><Icon/></div>
                    )}
                </div>

                <div className={'flex flex-col nunitoSansBold'}>
                    {labelsC.map((item, index) =>
                        <span key={'labelsC' + index} className={'text-white'}>
                            {item.title}
                        </span>
                    )}
                </div>

                <Button text={'Наверх'} iconAfter={<Arrow/>} className={'text-white drukCyrMedium tracking-[1px] border border-solid border-white rounded-full px-12 py-4'}/>
            </div>
        </footer>
    );
};