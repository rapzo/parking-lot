import { Route, Routes, Link } from "react-router-dom";
import { Button } from "@parking-lot/ui"

import "./App.module.css";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Tab = {
  name: string
  href: string
  current: boolean
}

const tabs: Tab[] = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "Sections",
    href: "/sections",
    current: false,
  }
]

export function App() {
  return (
    <div className="mx-auto max-w-7xl bg-gray-50 pt-12 sm:pt-16">
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs" role="navigation">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="mt-5 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Trusted by developers from over 80 planets
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                  </p>
                </div>
              </div>
              <div className="mt-10 bg-white pb-12 sm:pb-16">
                <div className="relative">
                  <div className="absolute inset-0 h-1/2 bg-gray-50" />
                  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                      <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                        <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Pepperoni</dt>
                          <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">100%</dd>
                        </div>
                        <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Delivery</dt>
                          <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">24/7</dd>
                        </div>
                        <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Calories</dt>
                          <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">100k</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/sections"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
