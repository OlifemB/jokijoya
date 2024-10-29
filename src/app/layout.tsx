import {Header} from '../components/header'
import {Hero} from "../components/home/hero";
import {Footer} from "../components/footer";
import {Content} from "../components/home/content";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Content/>
            <Footer/>
        </>
    );
};