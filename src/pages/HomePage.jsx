import BottomInfo from '../components/BottomInfo.jsx'
import FeaturesSection from '../components/FeaturesSection.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Main />
        <FeaturesSection />
        {/* <BottomInfo /> */}
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
