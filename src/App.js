
import './App.css';
import { Footer, Header, HeroSection, RewardSection, Transaction, Whatelse } from './components';
import { Testimonial } from './components/testimonial';

function App() {
  return (
    <>
      <Header />  
      <HeroSection/>
      <RewardSection />
      <Transaction />
      <Whatelse />
      <Testimonial />
      <Footer/>
    </>
  );
}

export default App;
