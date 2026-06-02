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
        window.scrollTo({ top: 0, left: 0 })
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

function getRouteMatch(routePath, pathname) {
  const routeParts = routePath.split('/').filter(Boolean)
  const pathParts = pathname.split('/').filter(Boolean)

  if (routeParts.length !== pathParts.length) {
    return null
  }

  const params = {}

  for (let index = 0; index < routeParts.length; index += 1) {
    const routePart = routeParts[index]
    const pathPart = pathParts[index]

    if (routePart.startsWith(':')) {
      params[routePart.slice(1)] = decodeURIComponent(pathPart)
      continue
    }

    if (routePart !== pathPart) {
      return null
    }
  }

  return params
}

export function Routes({ children }) {
  const { pathname } = useContext(RouterContext)
  const routes = Children.toArray(children).filter(isValidElement)
  const activeRoute =
    routes.find((route) => route.props.path === pathname)

  if (activeRoute) {
    return cloneElement(activeRoute.props.element)
  }

  const routeWithParams = routes
    .map((route) => ({
      route,
      params: getRouteMatch(route.props.path, pathname),
    }))
    .find(({ params }) => params)

  if (routeWithParams) {
    return cloneElement(routeWithParams.route.props.element, {
      params: routeWithParams.params,
    })
  }

  const fallbackRoute =
    routes.find((route) => route.props.path === '/')

  return fallbackRoute ? cloneElement(fallbackRoute.props.element) : null
}
