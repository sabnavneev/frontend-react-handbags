import React from 'react';
import './App.css';

import Button from './components/Button/Button';
import Product from './components/Product/Product';
import Tile from './components/Tile/Tile';

import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
            title="to the collection"
            disabled={false}
        />
        <Button
              title="shop all bags"
              disabled={false}
        />
        <Button
              title="pre-order"
              disabled={true}
        />
      </nav>

      <main>
          <Product
              label="Best seller"
              image={bagOne}
              name="The handy bag"
              price="€400,-"
          />
          <Product
              label="Best seller"
              image={bagTwo}
              name="The stylish bag"
              price="€250,-"
          />
          <Product
              label="New collection"
              image={bagThree}
              name="The simple bag"
              price="€300,-"
          />
          <Product
              label="New collection"
              image={bagFour}
              name="The trendy bag"
              price="€150,-"
          />
      </main>

      <footer>
          <Tile
              title="Our brand"
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur corporis culpa cupiditate facilis impedit ipsum praesentium repudiandae vitae.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur corporis culpa cupiditate facilis impedit ipsum praesentium repudiandae vitae.</p>
          </Tile>

          <Tile>
              <img src={brand} />
          </Tile>

          <Tile>
              <img src={ourStory} />
          </Tile>

          <Tile
              title="Our story"
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur corporis culpa cupiditate facilis impedit ipsum praesentium repudiandae vitae.</p>
          </Tile>
      </footer>
    </>
  );
}

export default App;



