import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const RouterContext = createContext({
  pathname: '/',
  navigate: () => { },
})

function getPathname() {
  return window.location.pathname || '/'
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname())

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const value = useMemo(
    () => ({
      pathname,
      navigate: (to) => {
        if (to === pathname) {
          return
        }

        window.history.pushState({}, '', to)
        setPathname(getPathname())
      },
    }),
    [pathname],
  )

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export function NavLink({ to, className, children, onClick, ...props }) {
  const { pathname, navigate } = useContext(RouterContext)
  const isActive = pathname === to
  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className

  return (
    <a
      className={resolvedClassName}
      href={to}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault()
        navigate(to)
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </a>
  )
}

export function useNavigate() {
  return useContext(RouterContext).navigate
}

export function Route() {
  return null
}

export function Routes({ children }) {
  const { pathname } = useContext(RouterContext)
  const routes = Children.toArray(children).filter(isValidElement)
  const activeRoute =
    routes.find((route) => route.props.path === pathname) ??
    routes.find((route) => route.props.path === '/')

  return activeRoute ? cloneElement(activeRoute.props.element) : null
}
