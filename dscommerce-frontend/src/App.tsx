import './App.css';

import HeaderClient from './components/HeaderClient';

import ButtonPrimary from './components/ButtonPrimary';
import ButtonInverse from './components/ButtonInverse';
import ProductDetailsCard from './components/ProductDetailsCard';

export default function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container dsc-mt20">
          <ProductDetailsCard />

          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>

        </section>
      </main>
    </>
  );
}