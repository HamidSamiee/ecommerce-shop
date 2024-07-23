import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'

import NotFound from './pages/NotFound'

const routes=[
    {path:'/',element:<Home />},
    {path:'/product/:id',element:<ProductDetails />},
    {path:'/sidebar',element:<Sidebar />},
    {path:'*',element:<NotFound />},
]

export default routes;