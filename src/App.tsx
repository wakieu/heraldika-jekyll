import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './App.css';

import mapPath from './heraldic_map_of_europe_by_jekyll_by_jekyllpng_dg2jdha-pre.jpg'

const wheelOpt = {step: 1.0, smoothStep: 0.005};

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2 style={{fontFamily: "Eras Demi ITC"}}>
          Very cool map 😎👍 by <a className="App-link" href="https://twitter.com/Yunacel" target="_blank" rel="noopener noreferrer">Jekyll</a>
        </h2>

        <a className="button" href="https://www.etsy.com/shop/HeraldikaJekyll" target="_blank" rel="noopener noreferrer">
          <button>Buy physical version</button>
        </a>

        <div style={{border: '0.1rem solid red', background: 'white', maxWidth: '85%', height: 'auto', margin: '5% 0 5rem'}}>
          <TransformWrapper maxScale={6} smooth={false} wheel={wheelOpt}>
            <TransformComponent>
              <img src={mapPath} alt="heraldic map of Europe" style={{maxWidth: '100%', height: 'auto', pointerEvents: 'none'}} />
            </TransformComponent>
          </TransformWrapper>
        </div>

      </header>
    </div>
  );
}

export default App;
