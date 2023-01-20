import type { TabConfig } from "./Tab"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

/* eslint-disable-next-line */
export interface TabsProps {
  tabs: TabConfig[]
  // onChange: (tabIndex: number) => void,
}

export function Tabs(props: TabsProps) {
  const { tabs } = props

  return (
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
  );
}
