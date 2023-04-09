import {Inter} from "next/font/google";
import A from "components/common/A";
import MainContainer from "components/MainContainer";

const inter = Inter({subsets: ["latin"]});

// главная страница
export default function Index() {
    return (
        <MainContainer keywords={'main page'}>
            <h1>Главная страница</h1>
        </MainContainer>
    );
}
/*

 */
