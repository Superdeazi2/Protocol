import { Route, Routes } from './lib/router.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import AccountPage from './pages/AccountPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const placeholderRoutes = ['/news', '/updates', '/about', '/community']

function EmptyPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="content-shell flex-1" />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />

      {placeholderRoutes.map((path) => (
        <Route key={path} path={path} element={<EmptyPage />} />
      ))}
    </Routes>
  )
}

export default App
