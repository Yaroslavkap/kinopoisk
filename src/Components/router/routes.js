import Films from "../pages/Films"
import Home from "../pages/Home"
import My from "../pages/My"
import FilmIdPage from "../pages/FilmIdPage"

export const allRoutes = [
    {path: '/home', element: <Home/>, exact:true},
    {path: '/my', element: <My/>, exact:true},
    {path: '/films', element: <Films/>, exact:true},
    {path: '/films/:id', element: <FilmIdPage/>, exact:true}
]