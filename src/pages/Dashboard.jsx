import React from 'react'
import stats from '../components/home/Dashboard/statdata';
import Statcard from '../components/home/Dashboard/statCard';
export default function Dashboardform(){

  return (
    <div className='flex flex-col'>
      <h1 className="text-2xl font-bold text-gray-950">Dashboard Overview</h1>
      <div className="flex justify-between py-8">
        {stats.map((item, index) => {
            return (
                <Statcard
                key={index}
                title={item.title}
                count={item.count}
                icon={<item.icon />}
                color={item.color}
                />
            );
            
        })}
      </div>
      </div>
)
}