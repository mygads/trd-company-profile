import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Layout from './layout/layout';
import PageTitle from './component/PageTitle';

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App