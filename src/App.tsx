import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './App.css';

import mapPath from './heraldic_map_of_europe_by_jekyll_by_jekyllpng_dg2jdha-pre.jpg'

const wheelOpt = {step: 1.0, smoothStep: 0.005};

function App() {
  return (
    <div className="App">

      <div style={{background: 'white', maxHeight: '85%', width: 'auto', justifyContent: 'center'}}>
        <TransformWrapper maxScale={6} smooth={true} wheel={wheelOpt} centerOnInit={true}> 
          <TransformComponent>
            <img src={mapPath} alt="heraldic map of Europe" style={{pointerEvents: 'none'}} />
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div style={{background: '#18253d', width: '100%', height: '15vh', display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'center', justifyContent: 'center'}}>
        <h2 style={{fontFamily: "Eras Demi ITC", margin: '0 1rem'}}>
          Very cool map 😎👍 by <a className="App-link" href="https://twitter.com/Yunacel" target="_blank" rel="noopener noreferrer">Jekyll</a>
        </h2>

        <a className="button" href="https://www.etsy.com/shop/HeraldikaJekyll" target="_blank" rel="noopener noreferrer" style={{margin: '0 1rem'}}>
          <button>Buy physical version</button>
        </a>
      </div>

    </div>
  );
}

export default App;
