import Layout from './Layout/Layout'
import routes from './routes.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <Layout >
        <Routes>
          {
            routes.map((route,index) => <Route key={index} {...route} />)
          }
        </Routes>
    </Layout>
  )

}

export default App
