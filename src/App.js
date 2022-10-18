import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Resume />
      <Form />
    </>
    
  );
}