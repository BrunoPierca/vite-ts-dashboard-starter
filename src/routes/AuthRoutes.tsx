import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/Auth';

// import { LoginPage, RegisterWorker } from '../pages';

export const AuthRoutes = () => {
    return (
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<LoginPage />} />

                {/* <Route path='register/worker' element={<RegisterWorker />} /> */}
                {/* <Route path='/register/postulant' element={<RegisterWorker />} /> */}
            </Routes>
    )
}
