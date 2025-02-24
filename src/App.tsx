import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import PageTitle from './component/PageTitle';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Galery } from './pages/Galery';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>  
                    <Route
                        path=""
                        element={
                            <>
                                <PageTitle title="Home | TRD Company Profile" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <PageTitle title="Home | TRD Company Profile" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <>
                                <PageTitle title="Home | TRD Company Profile" />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/about-us"
                        element={
                            <>
                                <PageTitle title="About Us | TRD Company Profile" />
                                <AboutUs />
                            </>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <>
                                <PageTitle title="Services | TRD Company Profile" />
                                <Services />
                            </>
                        }
                    />
                    <Route
                        path="/galery"
                        element={
                            <>
                                <PageTitle title="Galery | TRD Company Profile" />
                                <Galery />
                            </>
                        }
                    />
                    <Route
                        path="/review"
                        element={
                            <>
                                <PageTitle title="Review | TRD Company Profile" />
                                <Services />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App