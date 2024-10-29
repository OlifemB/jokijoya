import IllustrationRhombus from '../../assets/vectors/ornament-rhombus.svg'
import IllustrationFlower from '../../assets/vectors/ornament-flower.svg'
import ArrowI from '../../assets/vectors/Arrow.svg'
import {Button} from "../../ui/button";

export const Content = () => {
    return (
        <main className={'flex flex-row flex-1'}>
            <div className={'flex flex-row container mx-auto my-28'}>
                <aside className={'flex flex-col'}>

                </aside>

                <section className={'flex flex-col gap-[126px] font-[16px]'}>
                    <div className={'flex flex-row gap-[120px]'}>
                        <div className={'flex flex-col justify-between items-start w-1/5 gap-8'}>
                            <span className={'drukwidecyrMedium text-xl'}>Наши<br/>парки</span>
                            <IllustrationRhombus/>
                        </div>

                        <div className={'flex flex-col justify-start items-start w-2/5'}>
                            <span>
                                <b>Первый парк развлечений Joki Joya</b> <br/>
                                открылся в августе 2014 года в Санкт-Петербурге. Сегодня бренд Joki Joya является лидером индустрии детских развлечений в России и состоит из 28 парков в 3 городах: 17 в Москве и Московской области, 10 в Санкт-Петербурге и 1 в Твери. На территории каждого парка размещено более 30 аттракционов в игровой зоне, семейный ресторан с детским и взрослым меню, индивидуальные банкетные комнаты для проведения праздников.
                            </span>
                        </div>

                        <div className={'flex flex-col justify-start items-start gap-4 w-2/5'}>
                            <span>
                                Площадь парков от 2000  до  6000  квадратных метров в  зависимости от  ТРЦ.
                            </span>
                            <span>
                                Также  Joki Joya занимается организацией праздников «под  ключ»: детские дни  рождения, выпускные детского сада или  школы, Новый Год, корпоративные праздники.
                            </span>
                            <Button text={''} iconAfter={<ArrowI/>} className={'border border-solid border-black rounded-full px-8 py-4'}/>
                        </div>
                    </div>

                    <div className={'flex flex-row gap-[120px]'}>
                        <div className={'flex flex-col justify-between items-start w-1/5 gap-8'}>
                            <span className={'drukwidecyrMedium text-xl'}>Праздники<br/>у нас</span>
                            <IllustrationFlower/>
                        </div>

                        <div className={'flex flex-col justify-start items-start gap-4 w-2/5'}>
                            <span>
                                Праздник можно отметить в индивидуальной банкетной комнате, расписанной профессиональными художниками вручную под тематику популярных фильмов или мультфильмов, либо в семейном ресторане.
                            </span>
                            <span>
                                Что мы имеем в виду, когда говорим про организацию праздников «под ключ»? За каждым праздником мы закрепляем личного банкетного менеджера, который будет курировать ваш праздник.
                            </span>
                        </div>

                        <div className={'flex flex-col justify-start items-start gap-4 w-2/5'}>
                            <span>
                               В  нашей базе более 300  аниматоров, шоу-программ и  квестов, которые помогут создать особую атмосферу праздника. Украсят ваш  праздник профессиональные аквагримеры, лучшие торты на  заказ, а  также фото  — и  видеосъемка.
                            </span>
                            <span>
                                Joki Joya - это  целая история про  детей и  их  родителей. История, которая помогает семьям объединяться, окунаться с  головой в  детство и  проводить время вместе, забывая о  повседневной суёте.
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};