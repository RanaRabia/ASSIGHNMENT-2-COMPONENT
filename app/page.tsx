
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Herosection from "./components/herosection/herosection"
import Homestyle from "./page.module.css"

const Homepage = () => {
  return (
    <div className={Homestyle.container}>
      
      <h1 className={Homestyle.heading}>THIS IS HOMEPAGE </h1>
      <h2 className={Homestyle.headings}>This is our mainpage</h2>
      <Header></Header>
      <Herosection></Herosection>
      <Footer></Footer>
    </div>
  )
}

export default Homepage
