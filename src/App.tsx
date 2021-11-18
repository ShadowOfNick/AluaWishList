import React from 'react';
import { MainList } from './components';

import './App.scss';

function App() {
  return (
    <MainList
      item={[
        // {
        //   title: 'тесла',
        //   image: 'https://img.auto.cz/img/29/normal690/3934002_tesla-elektromobil-novemodely-video-sportovni-roadster-v1.jpg?v=1',
        //   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        //   variants: [
        //     {
        //       title: 'one',
        //       href: '/',
        //     },
        //     {
        //       title: 'two',
        //       href: '/',
        //     },
        //     {
        //       title: 'three',
        //       href: '/',
        //     },
        //   ],
        //   link: 'https://www.google.com/',
        // },
        // {
        //   title: 'ноутбук',
        //   image: 'https://source.unsplash.com/featured/?laptop',
        // },
        // {
        //   title: 'квартира',
        //   image: 'https://source.unsplash.com/featured/?house',
        //   text: 'Квартира 2-х или 3-х комнатная'
        // },
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
          text: 'на алике либо на базаре',
          link: 'https://www.aliexpress.com/?gclid=CjwKCAiA7dKMBhBCEiwAO_crFPw2S2YIIMuabErAlT0Hx-T6Y8lmq6b2pxPDM5z1_27l5EevaCI4EBoC8x8QAvD_BwE',
        },
        {
          title: 'пальто',
          text: 'длинное черное, бежевое, или красное ',
          image: 'https://i.pinimg.com/originals/10/2f/6e/102f6e65af4472b7ce9619f2c357c99f.png',
        },
        {
          title: 'кошелек coach',
          image: 'https://www.levne-hadry.cz/images/products/417bdff1b626662f9ff29ccc4437343c.png',
          text:'добавлю позже, его нет в магазине',
          link: 'https://www.zalando.cz/',
        },
        {
          title: 'кольца',
          image: 'https://manrule.ru/images/article/orig/2020/02/muzhskie-perstni-kak-vybrat-i-nosit-9.jpg',
          text: 'в Дрездене и в новых странах, которые посетим',
          link: 'https://www.aliexpress.com/item/1005001561571304.html?spm=a2g0o.cart.0.0.56e43c00Eshag4&mp=1'
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
          image: 'https://i.pcmag.com/imagery/roundups/058V9Qtoumsi3Qdua8dNvmB-1.fit_lim.size_1600x900.v1632427858.jpg',
          variants: [
            {
              title: 'one',
              href: 'https://eur.shein.com/Christmas-Elk-Decor-Phone-Case-p-5516087-cat-1925.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0https://www.svetbonsaji.cz/bonsai-dub-korkovy-quercus-suber-458-m.html',
            },
            {
              title: 'two',
              href: 'https://eur.shein.com/3D-Peach-Decor-Cartoon-Bear-Print-Phone-Case-p-3113046-cat-1925.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0',
            },
            {
              title: 'three',
              href: 'https://eur.shein.com/Clear-Phone-Case-With-Card-Slot-p-2768004-cat-1925.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0',
            },
            {
              title: 'four',
              href: 'https://eur.shein.com/Slide-Camera-Cover-Phone-Case-With-Ring-Holder-p-2742243-cat-1925.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0',
            },
          ],
        },
        {
          title: 'Apple watch',
          image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/155007-smartwatches-news-feature-apple-watch-series-7-release-date-features-and-specs-image1-rdp82cdhxn.jpg',
          link: 'https://www.alza.cz/apple-watch-7/18892053.htm'
        },
        {
          title: 'куртка длинная теплая',
          image: 'https://img.ltwebstatic.com/images3_pi/2021/10/14/1634184476c7b208ccb51e47cda0863d5df98ea2f9.webp',
          link: 'https://eur.shein.com/Slant-Pocket-Zipper-Hooded-Longline-Puffer-Coat-p-2824269-cat-3052.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0',
        },
        {
          title: 'сапоги',
          image: 'https://images.ua.prom.st/1896875367_w640_h640_botforty-ydg-bellini.jpg',
          link: 'https://www.zalando.cz/koi-footwear-vegan-sentry-kozacky-na-platforme-black-kof11n009-q11.html'
        },
        {
          title: 'Кросовки',
          image: 'http://newbalance.ru/upload/iblock/822/ml574egk_nb_02_i.jpg',
          variants: [
            {
              title: 'one',
              href: 'https://www.zalando.cz/new-balance-ws327-tenisky-outer-space-ne211a0hv-k11.html',
            },
            {
              title: 'two',
              href: 'https://www.zalando.cz/nike-performance-air-zoom-superrep-2-sportovni-boty-blackwhitedark-smoke-grey-n1241a100-q11.html',
            },
            {
              title: 'three',
              href: 'https://www.zalando.cz/new-balance-mr530-tenisky-white-ne215o04g-a11.html',
            },
            {
              title: 'four',
              href: 'https://www.zalando.cz/new-balance-tenisky-moonbeam-ne211a0jh-a11.html',
            },
          ],
        },
        {
          title: 'булавки',
          image: 'https://cdn1.ozone.ru/s3/multimedia-e/c1200/6045215042.jpg',
          link: 'https://eur.shein.com/1box-Safety-Pin-p-2455529-cat-2996.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'

        },
        {
          title: 'пирсинги',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Luis_Antonio_Aguero.jpg/1200px-Luis_Antonio_Aguero.jpg',
          link: 'https://eur.shein.com/12pcs-Stainless-Steel-Earrings-p-3310612-cat-1757.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
        },
        {
          title: 'Декоративная косметика',
          image: 'https://makeupkey.ru/wp-content/uploads/2016/12/Vidy.jpg',
          text: 'ваучер в NOTINO',
          link: 'https://www.notino.cz/?gclid=CjwKCAiA7dKMBhBCEiwAO_crFFy4wIIU_n69pZ4vcR76TKKfOatxCaUBn8sISPvLX4c34ePQlxrrvxoC7PMQAvD_BwE'
        },
        {
          title: 'шапка', //buy myself
          image: 'https://cdn.sportmaster.ua/static/i/2000_2000/products/243087/2KjLaM58.jpeg',
        },
        {
          title: 'кепка', //buy myself
          image: 'https://contents.mediadecathlon.com/p1793800/kb04c0d746384fc2cb42f4830683f2379/1793800_default.jpg?format=auto&quality=60&f=800x0',
        },
        {
          title: 'шарф',//buy myself
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZnryDdhwYzcIlD3XkmWzED743bq5Oj1FeQ&usqp=CAU',
        },
        {
          title: 'Клетчатая рубашка',
          image: 'https://img.ltwebstatic.com/images3_pi/2021/08/05/1628143237801ff0b4d6b2e513c9493c2ef5245825.webp',
          link: 'https://eur.shein.com/DAZY-Plaid-Print-Drop-Shoulder-Oversized-Blouse-p-3186118-cat-1733.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
        },
        {
          title: 'красивый домашний костюм',
          image: 'https://img.ltwebstatic.com/images3_pi/2020/09/15/1600140287a5441dd32c82526a58857873fd976126_thumbnail_900x.webp',
          variants: [
            {
              title: 'one',
              href: 'https://eur.shein.com/DAZY-3pcs-Solid-Lounge-Set-p-2766851-cat-2338.html?scici=Search~~SuggestionSearch~~1~~Homewear~~SPcSearchWordsSuggest~~0',
            },
            {
              title: 'two',
              href: 'https://eur.shein.com/Open-Front-Belted-Robe-Cami-Top-Pants-Lounge-Set-p-3488589-cat-2338.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0',
            },
            {
              title: 'three',
              href: 'https://eur.shein.com/3pack-Crop-Tank-Top-Knot-Front-Shorts-Lounge-Set-p-2922886-cat-2338.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0',
            },
            {
              title: 'four',
              href: 'https://eur.shein.com/3D-Ear-Design-Self-Tie-Flannel-Bathrobe-p-4956572-cat-2211.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0',
            },
          ],
        },
        {
          title: 'широкие брюки',
          image: 'https://img.joomcdn.net/135eeca184468f7241dba35dd1d0a7bf722e6991_original.jpeg',
          link: 'https://eur.shein.com/DAZY-High-Waist-Plicated-Detail-Wide-Leg-Pants-p-3285789-cat-1740.html?scici=Wishlist~~Wishlist~~1~~Wishlist~~0'
        },
        {
          title: 'пленка для фотоаппарата',
          image: 'https://cdn.shopify.com/s/files/1/0073/7276/7316/products/600_cassets@2x.jpg?v=1590072281',
          text: 'you know better',
        },
        {
          title: 'красивая посуда',
          image: 'https://l-avantage.ru/wp-content/uploads/2020/01/modnay-posuda-2020.jpg',
          text: 'add later',
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
          text: 'alik, shein, главное чтобы они были прикольные',
        },
        {
          title: 'электронная зубная щётка',
          image: 'https://mi-home.kz/images/jch-optimize/ng/images_Xiaomi__Soocas__X3U_1.webp',
          link: 'https://www.alza.cz/philips-sonicare-diamondclean-nove-generace-a-airfloss-pro-black-hx8494-03-d6107750.htm'
        },
        {
          title: 'рюкзак',
          image: 'https://ae01.alicdn.com/kf/H519d1dc7b4494522b2ada9438f96c43eA.jpg?width=750&height=1018&hash=1768',
          link: 'https://www.zalando.cz/doughnut-macaroon-batoh-chestnut-d0e54o019-o11.html'
        },
        {
          title: 'шопер',
          image: 'https://shop-cdn1.vigbo.tech/shops/139031/products/17698094/images/3-f458fbd9819ac735036ada047c7a8d25.jpeg',
          link: 'https://www.aliexpress.com/item/32973285844.html?spm=a2g0o.cart.0.0.56e43c00Eshag4&mp=1'
        },
        {
          title: 'эко пакеты',
          image: 'https://ireland.apollo.olxcdn.com/v1/files/7gj4zkfswha7-UA/image',
          text: 'size L',
          link: 'https://www.aliexpress.com/item/4001195247436.html?spm=a2g0o.cart.0.0.1aed3c006cMw5X&mp=1'
        },
        {
          title: 'красивые бокалы',
          image: 'https://berkem.ru/wp-content/uploads/2019/10/Bokaly-Bogemiya-vinnye-foto.jpg.webp',
          text: 'add later',
        },
        {
          title: 'домашние тапочки',
          image: 'https://marmalato.ru/upload/iblock/f07/f0784cd7a7f1366c48d08af95ca1327b.jpg',
          text: 'buy it myself',
        },
        {
          title: 'солнечные очки',
          image: 'https://i.pinimg.com/originals/3a/44/2f/3a442f5cf076845af9257196de6fcd55.jpg',
          text: 'add later',
        },
        {
          title: 'рубашки',
          image: 'https://img.ltwebstatic.com/images3_pi/2021/08/11/16286790956c8067ecc11c1e161f24ab46e3c06c4b_thumbnail_900x.webp',
          variants: [
            {
              title: 'one',
              href: 'https://www.zalando.cz/anna-field-bluza-dark-blue-an621e09a-k11.html',
            },
            {
              title: 'two',
              href: 'https://eur.shein.com/DAZY-Drop-Shoulder-Pocket-Patched-Blouse-p-3473732-cat-1733.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0',
            },
            {
              title: 'three',
              href: 'https://www.zalando.cz/pullandbear-kosile-white-puc21e0ss-a11.html',
            },
            {
              title: 'four',
              href: 'https://eur.shein.com/Argyle-Pattern-Sweater-Vest-Without-Dress-p-3165080-cat-2217.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0',
            },
          ],
        },
        {
          title: 'ipad',
          image: 'https://cdn.alza.cz/Foto/f4/JA/JA065f15.jpg',
          link: 'https://www.alza.cz/ipad-pro-12-9-2021?dq=6453840&o=12'
        },
        {
          title: 'keyboard',
          image: 'https://cdn.alza.cz/Foto/FotoAddOrig/JA/JA065f15-01.jpg',
          link: 'https://www.alza.cz/apple-magic-keyboard-ipad-pro-12-9-2021-cerna-sk-d6456462.htm'
        },
        {
          title: 'tattoo',
          image: 'https://scene360.com/wp-content/uploads/2019/10/artem-koro-interview-06.jpg',
          link: 'https://www.instagram.com/duhovka.ink/?hl=ru'
        },
        {
          title: 'микродермалы',
          image: 'https://i.styleoholic.com/2019/09/a-double-microdermal-piercing-under-the-collarbone-to-highlight-your-beauty.jpg',
          link: 'https://bloodybluetattoo.cz/'
        },
        {
          title: 'GoPro',
          image: 'https://www.smarty.cz/pic/DI1S600301-600-600.webp',
          text: 'buy it myself',
        },
        {
          title: 'playstation 5',
          image: 'https://cc.cz/wp-content/uploads/2021/02/ps5-1-1640x872.jpg',
          text: 'buy it myself but I have no idea where',
        },
        // {
        //   title: 'машину маме',
        //   image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        // },
        // {
        //   title: 'дом родителям',
        //   image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        // },
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
        // {
        //   title: 'домработница',
        //   image: 'https://www.bosco.ru/upload/iblock/1a6/1a65c7e59b4e0c031ab4dd80a5fd06ac_1221_1607.jpg',
        // },
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
        // {
        //   title: 'краловский куни',
        //   image: 'https://цветочныйрай.рф/upload/medialibrary/db1/db194e41e04ee990aa3b6efe709f2404.png',
        //   link:'https://www.intimshop.ru/sex-faq/voprosi_o_seksualnih_praktikah/kak_delat_kunnilingus_5_luchshi.html'
        // },
      ]}
    />
  );
}

export default App;
