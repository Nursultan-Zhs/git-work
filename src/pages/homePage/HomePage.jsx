import { Brand } from "../../widgets";
import { Baner } from "../../widgets/homeSection/baner/Baner";
import { Project } from "../../widgets";
import { Advertising } from "../../widgets/homeSection/advertising/Advertising";

export const HomePage = () => {
    return (
        <div>
            <Baner />
            <Brand />
            <Project />
            <Advertising />
        </div>
    );
}


