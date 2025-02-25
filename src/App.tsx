import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import PageTitle from './component/PageTitle';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Galery } from './pages/Galery';
import { Review } from './pages/Review';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>  
                    <Route
                        path=""
                        element={
                            <>
                                <PageTitle title="TRD Elite Services" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <PageTitle title="TRD Elite Services" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <>
                                <PageTitle title="TRD Elite Services" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/about-us"
                        element={
                            <>
                                <PageTitle title="About Us | TRD Elite Services" />
                                <AboutUs />
                            </>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <>
                                <PageTitle title="Services | TRD Elite Services" />
                                <Services />
                            </>
                        }
                    />
                    <Route
                        path="/gallery"
                        element={
                            <>
                                <PageTitle title="Gallery | TRD Elite Services" />
                                <Galery />
                            </>
                        }
                    />
                    <Route
                        path="/review"
                        element={
                            <>
                                <PageTitle title="Review | TRD Elite Services" />
                                <Review />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App