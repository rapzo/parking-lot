import { ParkingLotConfig } from '@parking-lot/types';
import { useEffect, useState } from 'react';
import { fetch } from '../../services'

/* eslint-disable-next-line */
export interface HomeProps { }

export function Home(props: HomeProps) {
  const [data, setData] = useState<ParkingLotConfig>()

  useEffect(() => {
    fetch('/api/').then((data) => {
      setData(data)
    })
  }, [])

  if (!data) return <h2>loading...</h2>

  return (
    <>
      <div className="mt-5 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parking Lot
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our parking lot map and occupation in real time
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
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Parking Lot</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{data.name}</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Sections</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{data.sections}</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Spots per section</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{data.spotsPerSection}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
