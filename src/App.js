import './App.css';
import CardSection from './Components/CardSection';
import Header from './Components/Header';
import OuterLayout from './Styles/Layouts'
import styled from 'styled-components'
import ChartSection from './Components/ChartSection';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> 
        <OuterLayout>
          <MainStyled>
            <CardSection />
            <ChartSection />
            <MessagingSection />
            <PaymentSection />
            <FAQSection /> 
          </MainStyled>

        </OuterLayout>
        <Footer />
      </header>
    </div>
  );
}
const MainStyled= styled.main`
`

export default App;
