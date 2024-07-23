import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (Props) => {

    const {children}= Props;

  return (
    <div className="container xl:max-w-screen-xl">
        <Header />
              {
                 children
              } 
        <Footer />
    </div>
  )
}

export default Layout