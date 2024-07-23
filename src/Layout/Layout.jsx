import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar';

const Layout = (Props) => {

    const {children}= Props;

  return (
    <div className="container xl:max-w-screen-xl">
        <Header />
        <Sidebar />
              {
                 children
              } 
        <Footer />
    </div>
  )
}

export default Layout