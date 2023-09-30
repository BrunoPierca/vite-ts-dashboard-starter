import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages';

// import Navbar from '../common/components/Navbar/Navbar';
import { DashboardLayout } from '../common/layout';


export const DashboardRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <DashboardLayout>
                <Routes>
                    <Route path='home' element={<Home />} />
                    {/* <Route path='jobs' element={<Jobs />} />
                    <Route path='workers' element={<Workers />} />
                    <Route path='companies' element={<Companies />} />
                    <Route path='users' element={<Users />} />
                    <Route path='applicants' element={<Applicants />} />
                    <Route path='received-payments' element={<ReceivedPayments />} />
                    <Route path='payments' element={<Payments />} /> */}
                    <Route path='/*' element={<Navigate to="/home" />} />
                </Routes>

            </DashboardLayout >
        </>
    )
}
