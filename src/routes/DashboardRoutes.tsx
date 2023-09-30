import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Users } from '../pages';

// import Navbar from '../common/components/Navbar/Navbar';
import { DashboardLayout } from '../common/layout';


export const DashboardRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <DashboardLayout>
                <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='users' element={<Users />} />
                    <Route path='/*' element={<Navigate to="/home" />} />
                </Routes>

            </DashboardLayout >
        </>
    )
}
