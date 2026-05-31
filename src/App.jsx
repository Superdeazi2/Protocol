import { Route, Routes } from './lib/router.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'

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
      {placeholderRoutes.map((path) => (
        <Route key={path} path={path} element={<EmptyPage />} />
      ))}
    </Routes>
  )
}

export default App
