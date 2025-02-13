import { Brand} from "../../widgets";
import { Baner } from "../../widgets/homeSection/baner/Baner";
import { Project } from "../../widgets";
import { Advertising } from "../../widgets/homeSection/advertising/Advertising";
import { Footer } from "../../widgets/homeSection/footer/Footer";

export const HomePage = () => {
    return (
        <div>
            <Baner />
            <Brand />
            <Project />
            <Advertising />
            <Footer />
        </div>
    );
}


