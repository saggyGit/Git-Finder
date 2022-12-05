import './App.css';
import  {BrowserRouter , Routes ,Route} from "react-router-dom"
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import{GitProvider} from './context/GitContext'
import { AlertContextProvider } from './Alert/AlertContext';
import User from './components/users/User';


function App() {
  return (
    <>
   <GitProvider>
    <AlertContextProvider>
    <BrowserRouter>
    <div className='layout' >
                          <Navbar/>
                          <main className='container  px-3 pb-12 scroll ' style={{color:"white",paddingLeft:"50px",width:"100%" }}>
                        <Routes>     

                            <Route path='/' element={<Home></Home>}></Route>
                            <Route path='/about' element={<About></About>}></Route>
                            <Route path='/*' element={<NotFound></NotFound>}></Route>
                            <Route path='/users/:id' element={<User></User>}></Route>



                        </Routes>
                          </main>

                        <Footer/>


    </div>
    </BrowserRouter>
    </AlertContextProvider>
    </GitProvider>
    </>
  );
}

export default App;
