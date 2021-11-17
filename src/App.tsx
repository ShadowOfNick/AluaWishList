import React from 'react';
import { MainList } from './components';

import './App.scss';

function App() {
  return (
    <MainList
      item={[
        {
          title: 'тесла',
          image: 'https://img.auto.cz/img/29/normal690/3934002_tesla-elektromobil-novemodely-video-sportovni-roadster-v1.jpg?v=1',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          variants: [
            {
              title: 'one',
              href: '/',
            },
            {
              title: 'two',
              href: '/',
            },
            {
              title: 'three',
              href: '/',
            },
          ],
          link: 'https://www.google.com/',
        },
        {
          title: 'ноутбук',
          image: 'https://source.unsplash.com/featured/?laptop',
        },
        {
          title: 'квартира',
          image: 'https://source.unsplash.com/featured/?house',
          text: 'Квартира 2-х или 3-х комнатная'
        },
        {
          title: 'dyson v15',
          image: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v15-detect/pdp/fullwidth/01-V15-Detect-%20Most-powerful-%20LB-PDP.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920',
          link: 'https://www.alza.cz/dyson-v15-detect-absolute-d6713681.htm?o=1',
        },
        {
          title: 'Dyson фен',
          image: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/dyson-supersonic/605c/test/605c-hero-fallback-test.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920',
          link: 'https://www.alza.cz/dyson-supersonic-sedy-d6733107.htm',
        },
      ]}
    />
  );
}

export default App;
