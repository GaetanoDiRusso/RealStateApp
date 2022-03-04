import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

import Properties from './components/properties/Properties';
import FullProperty from './components/fullProperty/FullProperty';
import CreateProperty from './components/createProperty/CreateProperty';
import BackButton from './components/backButton/BackButton';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';
import AuthButton from './components/authButton/AuthButton';

const properties = [
  {
    title: 'casa en carrasco',
    rentPrice: 25000,
    sellPrice: 300000,
    rooms: 3,
    bathrooms: 2,
    area: 125,
    neighborhood: 'Carrasco',
    city: 'Montevideo',
    frontImg: 'https://media.istockphoto.com/photos/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset-picture-id1283532082?b=1&k=20&m=1283532082&s=170667a&w=0&h=KxQ3cfMs-Xi7FL2TXfrgFbi9pwtBOdjSEc4-ufAeVlo=',
    images: [
      'https://images.adsttc.com/media/images/5f90/e509/63c0/1779/0100/010e/newsletter/3.jpg?1603331288',
      'https://media.revistagq.com/photos/5cfa20d7cb3e974d1a5fc3dd/4:3/w_3600,h_2700,c_limit/GettyImages-525440005.jpg',
      'https://www.casasparaconstruir.com/projetos/161/01.jpg',
      'https://phantom-expansion.unidadeditorial.es/7a01447f134fa1a4baadf1c5174644cf/resize/640/assets/multimedia/imagenes/2021/03/16/16158875126483.jpg'
    ],
    description: 'Hermosa casa a estrenar, ideal para renta o para uso propio',
    _id: 1
  },
  {
    title: 'casa en punta gorda',
    rentPrice: 55000,
    sellPrice: 450000,
    rooms: 5,
    bathrooms: 3,
    area: 190,
    neighborhood: 'Punta gorda',
    city: 'Montevideo',
    frontImg: 'https://img.remediosdigitales.com/8e8f64/lo-de-que-comprar-una-casa-es-la-mejor-inversion-hay-generaciones-que-ya-no-lo-ven-ni-de-lejos---1/1366_2000.jpg',
    images: [
      'https://images.adsttc.com/media/images/5cf1/f20a/284d/d14f/3800/0264/large_jpg/CASA_FRENTE_MAR_2027.jpg?1559360001',
      'https://st3.idealista.com/news/archivos/styles/imagen_full/public/2018-02/plantio_mg_2945.jpg?sv=rPfmi5zl&itok=1FDk32X9',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMM4jXZul60WweHvrmt5ymKoUXUUml_2W60aHgHCrbIOkY5VUIdWxMt4p3iQWjw3-zB0&usqp=CAU',
      'https://yt3.ggpht.com/DANVQORpJ8pSi_a7yV2iimlQ4Dbn4UNEMqPVnUbNvD2MuK2yxwXddCfTafv68eqLIXgvik-TyA=s900-c-k-c0x00ffffff-no-rj'
    ],
    description: 'Hermosa casa a estrenar, ideal para renta o para uso propio',
    _id: 2
  },
  {
    title: 'casa en solymar',
    rentPrice: 35000,
    sellPrice: 250000,
    rooms: 3,
    bathrooms: 1,
    area: 120,
    neighborhood: 'solymar',
    city: 'Canelones',
    frontImg: 'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-casa-moderna-de-una-planta.jpg',
    images: [
      'https://i.pinimg.com/originals/48/0b/83/480b836d7f4d4c81955ae9cd9d0f8f42.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykVqXxqV-XJ7nceM2F9LBOXfP-v_blhhJlw5-coBgXyCqk_1OE3meoru7Bhbw9V6ROe4&usqp=CAU',
      'https://arqa.com/wp-content/uploads/2021/04/12-casa-eli-530x353.jpg',
      'https://www.naiperu.com//files/articulos/Demanda_casas_de_campo_al_sur_de_lima_crecen_01.jpg'
    ],
    description: 'Hermosa casa a estrenar, ideal para renta o para uso propio',
    _id: 3
  },
]

function App() {
  const token = useSelector((state)=> state.auth.authData);

  console.log(token)

  return (
    <div className="App" style={{backgroundColor: '#eff0f5', minWidth: '100vw', minHeight: '100vh'}}>
      <BrowserRouter>
        <BackButton/>

        <Routes>
          <Route exact path="/" element={<Home newProperties={properties}/>}/>
          <Route exact path="/search" element={<Properties properties={properties} />}/>
          <Route exact path="/property/:id" element={<FullProperty properties={properties}/>}/>
          <Route exact path="/property/create" element={token ? <CreateProperty/> : <Navigate to='/auth'/>}/>
          <Route exact path="/auth" element={token ? <Navigate to='/profile'/> : <Auth/>}/>
          <Route exact path="/profile" element={token ? <Profile/> : <Navigate to='/auth'/>}/>
        </Routes>

      </BrowserRouter>     
    </div>
  );
}

export default App;
