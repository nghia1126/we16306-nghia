
import { getAllCate } from "../api/posts";
import banner from "../components/banner";
import Menu from "../components/menu";
import NewsList from "../components/newList";
import Footer from "../components/footer";
const HomePage = {
    async print() {
        const { data: catePosts } = await getAllCate();
        return /*html*/ `
            <div class="banner">
                ${Menu.print()}
            </div>
            <div class="banner">
                ${banner.print()}
                <h2>All post category</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${catePosts.map(category => `
                        <div class="shadow-lg p-4">
                            <a href="/#/category/${category.id}">${category.name}</a>
                        </div>
                    `).join("")}
                </div>
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