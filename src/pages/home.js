
import banner from "../components/banner";

import NewsList from "../components/newList";

const HomePage = {
    print() {
        return /*html*/ `
            
            <div class="banner">
                ${banner.print()}
            </div>
            <div class="news">
                ${NewsList.print()}
            </div>
            
        `;
    },
};
export default HomePage;