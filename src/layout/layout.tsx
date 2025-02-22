import { Outlet } from 'react-router-dom';
import Footer from './Component/footer';
import Navbar from './Component/navbar';

const Layout: React.FC = () => {


    return (
        <div className="flex h-screen overflow-hidden">

            {/* Content Area */}
            <div className="relative flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
                <Navbar />

                <main className="flex-1 bg-gray-200 p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
                    {/* Render halaman sesuai route */}
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;