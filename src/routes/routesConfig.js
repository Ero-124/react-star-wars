import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import HomePage from "../containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import SearchPage from "../containers/SearchPage/SearchPage";

const routesConfig = [{
    path: "/",
    component: HomePage,
  },
  {
    path: "/people",
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    component: PersonPage,
  },
  {
    path: "/favorites",
    component: FavoritesPage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
  },
  {
    path: "/fail",
    component: ErrorMessage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routesConfig;