import Header from '../Header.jsx'

function AuthLayout({ children }) {
  return (
    <div className="page-shell">
      <Header />
      <main className="main-bg">
        <section className="content-shell flex min-h-[calc(100dvh-88px)] items-center justify-center py-[40px]">
          {children}
        </section>
      </main>
    </div>
  )
}

export default AuthLayout
