
import banner from "../components/banner";
import Menu from "../components/menu";
import NewsList from "../components/newList";
import Footer from "../components/footer";
const HomePage = {
    async print() {
        return /*html*/ `
            <div class="banner">
                ${Menu.print()}
            </div>
            <div class="banner">
                ${banner.print()}
            </div>
            <div class="news">
                ${ await NewsList.print()}
            </div>
            <div class="news">
                ${ await Footer.print()}
            </div>
        `;
    },
    afterRender(){
        Menu.afteRender();
    }
};
export default HomePage;