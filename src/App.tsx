import React from 'react';
import { MainList } from './components';

import './App.scss';
import Tesla from './img/tesla.jpg'

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
        // ========================================================
        {
          title: 'бонсай дерево',
          image: 'https://source.unsplash.com/featured/?bonsai',
        
          variants: [
            {
              title: 'one',
              href: 'https://www.svetbonsaji.cz/bonsai-dub-korkovy-quercus-suber-458-m.html',
            },
            {
              title: 'two',
              href: 'https://www.e-bonsai.cz/bonsaje/pokojove/ficus/pokojova-bonsai-ficus-kimmen-malolisty-fikus-1-251.html',
            },
            {
              title: 'three',
              href: 'https://dum.bazos.cz/inzerat/144497798/bonsai-caragona-spinosa-peprovnik.php',
            },
          ],
        },
        {
          title: 'лимонное дерево',
          image: 'https://source.unsplash.com/featured/?lemon',
          text: 'необязательно с ссылки заказывать',
        },
        {
          title: 'мандариновое дерево',
          image: 'https://source.unsplash.com/featured/?mandarin',
          text: 'пока не нашла, добавлю позже'
        },
        {
          title: 'уход для лица и тела',
          image: 'https://source.unsplash.com/featured/?skincare',
          variants: [
            {
              title: 'ваучер в RITUALS',
              href: 'https://www.rituals.cz/?gclid=Cj0KCQiAys2MBhDOARIsAFf1D1cRuXs6LdC8I9kxdadFS4cHSky1LxBhozM-O-xgObGWoBdjUwCTEisaAhEnEALw_wcB'
            },
            {
              title: 'ваучер в NOTINO',
              href: 'https://www.notino.cz/?gclid=Cj0KCQiAys2MBhDOARIsAFf1D1cc1FQ7TTK5eTTyI7s7IrMslYZeKt28uxh971Fg8WStBNon4BVZ6BMaArr1EALw_wcB'

            },
          ],
        },
        {
          title: 'горшки для цветов',
          image: 'https://source.unsplash.com/featured/?pottery',
        },
        {
          title: 'пальто',
          text: 'длинное черное или бежевое, или красное ',
          image: 'https://i.pinimg.com/originals/10/2f/6e/102f6e65af4472b7ce9619f2c357c99f.png',
        },
        {
          title: 'кошелек coach',
          image: 'https://www.levne-hadry.cz/images/products/417bdff1b626662f9ff29ccc4437343c.png',
          text:'добавлю позже'
        },
        {
          title: 'кольца',
          image: 'https://manrule.ru/images/article/orig/2020/02/muzhskie-perstni-kak-vybrat-i-nosit-9.jpg',
        },
        {
          title: 'красивые свечи',
          image: 'https://pictures.ztrade.cz/ZTRADE/19/2000000349/31897_31897.JPG',
          link: 'https://woodwick.svicky.cz/svicky'
        },
        {
          title: 'řasokoule',
          image: 'https://img.superzoo.cz/galerie/1_72585/rasokoule-starter-kit-2-default.jpg?v=1617686196',
          link: 'https://www.superzoo.cz/rasokoule-starter-kit-2/',
        },
        {
          title: 'нижнее белье',
          image: 'https://img.ltwebstatic.com/images3_pi/2021/08/16/16290848216ca2f85aa7e759dd99917584c9a4d759_thumbnail_600x.webp',
          variants: [
            {
              title: 'V1',
              href: 'https://eur.shein.com/3sets-Solid-Lingerie-Set-p-3919846-cat-2270.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
            },
            {
              title: 'V2',
              href: 'https://eur.shein.com/Plain-Lingerie-Set-p-2816326-cat-2270.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0',
            },
            {
              title:'V3',
              href: 'https://eur.shein.com/Letter-Tape-Contrast-Mesh-Lingerie-Set-p-5165677-cat-2270.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0'
            },
            {
              title:'V4',
              href:'https://eur.shein.com/Letter-Graphic-Shorts-Lingerie-Set-p-2279062-cat-2270.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
            },
            {
              title:'V5',
              href:'https://eur.shein.com/Plain-Seamless-Lingerie-Set-p-3288203-cat-2270.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0'
            },
            {
              title:'V6',
              href:'https://eur.shein.com/3pack-Letter-Graphic-Panty-Set-p-2054318-cat-2205.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
            },
          ]
        },
        {
          title: 'духи',
          image: 'https://images.douglas.cz/080975/900/080975.jpg',
          link: 'https://www.parfemy.cz/parfemy/jo-malone-english-pear-freesia-edc.html?c=pJM02130',
          text: '30 ml'
        },
        {
          title: 'чехлы для телефона',
          image: 'https://www.ixbt.com/img/n1/news/2021/8/1/iphone-13-series-cases-178_large.jpg',

        },
        {
          title: 'Apple watch',
          image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/155007-smartwatches-news-feature-apple-watch-series-7-release-date-features-and-specs-image1-rdp82cdhxn.jpg',
        },
        {
          title: 'куртка длинная теплая',
          image: 'https://images.ua.prom.st/1946544071_w640_h640_dlinnaya-teplaya-zimnyaya.jpg',
        },
        {
          title: 'сапоги',
          image: 'https://images.ua.prom.st/1896875367_w640_h640_botforty-ydg-bellini.jpg',
        },
        {
          title: 'New balance Кросовки',
          image: 'http://newbalance.ru/upload/iblock/822/ml574egk_nb_02_i.jpg',
        },
        {
          title: 'булавки',
          image: 'https://cdn1.ozone.ru/s3/multimedia-e/c1200/6045215042.jpg',
        },
        {
          title: 'пирсинги',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Luis_Antonio_Aguero.jpg/1200px-Luis_Antonio_Aguero.jpg',
        },
        {
          title: 'Декоративная косметика',
          image: 'https://makeupkey.ru/wp-content/uploads/2016/12/Vidy.jpg',
        },
        {
          title: 'шапка',
          image: 'https://cdn.sportmaster.ua/static/i/2000_2000/products/243087/2KjLaM58.jpeg',
        },
        {
          title: 'кепка',
          image: 'https://contents.mediadecathlon.com/p1793800/kb04c0d746384fc2cb42f4830683f2379/1793800_default.jpg?format=auto&quality=60&f=800x0',
        },
        {
          title: 'шарф',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZnryDdhwYzcIlD3XkmWzED743bq5Oj1FeQ&usqp=CAU',
        },
        {
          title: 'Клетчатая рубашка',
          image: 'https://images.ua.prom.st/1649903091_w640_h640_muzhskaya-kletchataya-rubashka.jpg',
        },
        {
          title: 'красивый домашний костюм',
          image: 'https://images.ua.prom.st/1321211781_w640_h640_teplyj-zhenskij-domashnij.jpg',
        },
        {
          title: 'широкие брюки',
          image: 'https://img.joomcdn.net/135eeca184468f7241dba35dd1d0a7bf722e6991_original.jpeg',
        },
        {
          title: 'пленка для фотоаппарата',
          image: 'https://cdn.shopify.com/s/files/1/0073/7276/7316/products/600_cassets@2x.jpg?v=1590072281',
        },
        {
          title: 'красивая посуда',
          image: 'https://l-avantage.ru/wp-content/uploads/2020/01/modnay-posuda-2020.jpg',
        },
        {
          title: 'macallan',
          image: 'https://cdn.myshoptet.com/usr/www.winehouse.cz/user/shop/big/50470-1_macallan-estate-reserve.jpg?603cd7b5',
        },
        {
          title: 'johnnie walker blue label',
          image: 'https://cdn.myshoptet.com/usr/shop.grenzemarkt.cz/user/shop/big/16235_blue-label-04-c9b956c81b.jpg?604787b8',
          link: 'https://www.alkohol.cz/produkty/johnnie-walker-blue-label-60-leta-0-7l-40-7139/?utm_campaign=freelistings&utm_medium=organic&utm_source=google&utm_term=Johnnie+Walker+Blue+Label+60y+0%2C7l+40%25&gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-RssgH5qxC83hS-kfm2aN9J0RU4oM3YEBdQnIrle2Uq4vhv0dbUyBYaAvw9EALw_wcB',
        },
        {
          title: 'yamazaki',
          image: 'https://dekanta.com/wp-content/uploads/2019/10/Suntory-Yamazaki-Distiller%E2%80%99s-Reserve-2019-Release.jpg',
        },
        {
          title: 'много красивых носков',
          image: 'https://images.ua.prom.st/3388453043_w640_h640_3388453043.jpg',
        },
        {
          title: 'электронная зубная щётка',
          image: 'https://mi-home.kz/images/jch-optimize/ng/images_Xiaomi__Soocas__X3U_1.webp',
        },
        {
          title: 'рюкзак',
          image: 'https://storage.yandexcloud.net/printio/assets/realistic_views/full_print_backpack/large/c2f21e3e533a17fb794972b6b2945943fbc03d84.png?1582967826',
        },
        {
          title: 'шопер',
          image: 'https://shop-cdn1.vigbo.tech/shops/139031/products/17698094/images/3-f458fbd9819ac735036ada047c7a8d25.jpeg',
        },
        {
          title: 'эко пакеты',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/7gj4zkfswha7-UA/image',
        },
        {
          title: 'красивые бокалы',
          image: 'https://berkem.ru/wp-content/uploads/2019/10/Bokaly-Bogemiya-vinnye-foto.jpg.webp',
        },
        {
          title: 'домашние тапочки',
          image: 'https://marmalato.ru/upload/iblock/f07/f0784cd7a7f1366c48d08af95ca1327b.jpg',
        },
        {
          title: 'солнечные очки',
          image: 'https://i.pinimg.com/originals/3a/44/2f/3a442f5cf076845af9257196de6fcd55.jpg',
        },
        {
          title: 'водолазка',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'футболк',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'рубашки',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'ipad with keyboard',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'tattoo',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'микродермалы',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'клыки с алика',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'GoPro',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'playstation 5',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'машину маме',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'дом родителям',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'когтеточка для Ремби',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'холодный блонд',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'витамины',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'тенис',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'спортзал с бассейном',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'пилон',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'акробатика',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'домработница',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'лазерная эпиляция',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'обувь для танцев',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'подписка на youtube',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'storytell',
          image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        },
        {
          title: 'краловский куни',
          image: 'https://цветочныйрай.рф/upload/medialibrary/db1/db194e41e04ee990aa3b6efe709f2404.png',
          link:'https://www.intimshop.ru/sex-faq/voprosi_o_seksualnih_praktikah/kak_delat_kunnilingus_5_luchshi.html'
        },
      ]}
    />
  );
}

export default App;
