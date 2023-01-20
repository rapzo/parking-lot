export type TabConfig = {
  name: string
  href: string
  current: boolean
}


/* eslint-disable-next-line */
export interface TabProps extends TabConfig { }

export function Tab(props: TabProps) {
  return (
    <div>
      <h1>Welcome to Tab!</h1>
    </div>
  );
}

export default Tab;
