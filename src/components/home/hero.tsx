import HeroImg from '../../assets/images/hero.png'
import HeroO from '../../assets/icons/hero-o.svg'
import HeroJokiJoya from '../../assets/icons/hero-jokiJoya.svg'
import HeroStar from '../../assets/icons/hero-star.svg'
import Welvolme from '../../assets/images/welvome.png'

export const Hero = () => {
    return (
        <section>
            <div className={'container mx-auto flex flex-col gap-[40px]'}>
                <div className={'rounded-[32px] overflow-hidden'}>
                    <img src={HeroImg} alt={''} className={'w-full h-auto'}/>
                </div>

                <div className={'flex flex-row items-start justify-between'}>
                    <div className={'flex flex-row space-between gap-4 overflow-visible'}>
                        <HeroO/>
                        <HeroJokiJoya/>
                        <div className={'flex flex-row gap-4'}>
                            {Array.from(Array(3)).map((_, index) => <HeroStar/>)}
                        </div>
                    </div>

                    <img src={Welvolme} alt={''}/>
                </div>
            </div>
        </section>
    );
};