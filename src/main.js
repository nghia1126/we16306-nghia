import Navigo from "navigo";
import Menu from "./components/menu";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";

const router = new Navigo("/");
const render = (content) => {
    document.getElementById("header").innerHTML = Menu.print();
    document.getElementById("main").innerHTML = content;
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage);
    },
    "/news": () => {
        render(NewsPage.print());
    },
    "/news/:id":({data})=>{
        const {id}=data;
        render(DetailNewsPage.render(id));
    },
});
router.resolve();