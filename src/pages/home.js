import Navigation from "../component/navbar"
import Jumbotron from "../component/jumbotron"
import CardsInvestor from "../component/cardsInvestor"
import CardsBisnis from "../component/cardsBisnis"
import Contact from "../component/contact"
import Informaation from "../component/information"
import Footer from "../component/footer"

function Home() {
  return (
    <div>
       <Navigation/> 
        <Jumbotron/>
        <CardsInvestor/>
        <CardsBisnis/>
        <Contact/>
        <Informaation/>
        <Footer/>
    </div>
  );
}

export default Home;
