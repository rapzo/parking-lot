function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export interface NavBarRoute {
  name: string
  href: string
  current: boolean
}

/* eslint-disable-next-line */
export interface NavBarProps {
  routes: NavBarRoute[]
  // onChange: (tabIndex: number) => void,
}

export function NavBar({ routes }: NavBarProps) {
  return (
    <nav className="-mb-px flex space-x-8" aria-label="Tabs" role="navigation">
      {routes.map((route) => (
        <a
          key={route.name}
          href={route.href}
          className={classNames(
            route.current
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          )}
          aria-current={route.current ? 'page' : undefined}
        >
          {route.name}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
