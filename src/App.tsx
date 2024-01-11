import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "./theme"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./routes/DashboardRoutes"
import { AuthRoutes } from "./routes/AuthRoutes"
import { Navbar } from "./common/components/Navbar"
import { CustomAlert } from "./common/components"

const queryClient = new QueryClient()

function App() {

  const status = 'authenticated' // TODO connect to Global state


  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {
                status === 'authenticated'
                  ? <Route path="/*" element={<DashboardRoutes />} />
                  : <Route path="/auth/*" element={<AuthRoutes />} />
              }
              <Route path="/*" element={<Navigate to={'/auth/login'} />} />
            </Routes>
            <CustomAlert />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
