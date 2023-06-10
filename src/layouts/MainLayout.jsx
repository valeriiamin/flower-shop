import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const MainLayout = ({dataHeader}) => {
    return (
        <>
            <Header data={dataHeader}/>
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
