import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'


import NotFound from './pages/NotFound'

const routes=[
    {path:'/',element:<Home />},
    {path:'/product/:id',element:<ProductDetails />},
    {path:'*',element:<NotFound />},
]

export default routes;