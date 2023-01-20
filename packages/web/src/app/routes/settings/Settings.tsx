/* eslint-disable-next-line */
export interface SettingsProps { }

export function Settings(props: SettingsProps) {
  return (
    <div className="mt-5 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Parking Lot Settings
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
        </p>
      </div>
    </div>
  );
}

export default Settings;
