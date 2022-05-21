import Graph from "./components/Graph"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import MainPage from "./pages/MainPage"
import SpecPage from "./pages/SpecPage"
import Specs from "./pages/Specs"
import TypePage from "./pages/TypePage"
import Types from "./pages/Types"
import { ADMIN_ROUTE, GRAPH, LOGIN_ROUTE, MAIN, REGISTRATION_ROUTE, SPEC_ROUTE, TYPE_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export const publicRoutes = [

    {
        path: MAIN,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TYPE_ROUTE + '/:id',
        Component: TypePage
    },
    {
        path: TYPE_ROUTE,
        Component: Types
    },
    {
        path: SPEC_ROUTE + '/:id',
        Component: SpecPage
    },
    {
        path: SPEC_ROUTE,
        Component: Specs
    },
    {
        path: GRAPH,
        Component: Graph
    },
]