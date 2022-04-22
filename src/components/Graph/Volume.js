import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "22-03-22",
      Decentraland: 4000,
      TheSandbox: 2400,
      Cryptovoxels: 2400,
      SomniumSpace: 3000,
      NFT_Worlds: 1200,
      SuperWorld: 1300,
    },
    {
      name: "28-03-22",
      Decentraland: 3000,
      TheSandbox: 1398,
      Cryptovoxels: 2210,
      SomniumSpace: 2000,
      NFT_Worlds: 1500,
      SuperWorld: 1800,
    },
    {
      name: "02-04-22",
      Decentraland: 2000,
      TheSandbox: 9800,
      Cryptovoxels: 2290,
      SomniumSpace: 3400,
      NFT_Worlds: 1500,
      SuperWorld: 1200,
    },
    {
      name: "07-04-22",
      Decentraland: 2780,
      TheSandbox: 3908,
      Cryptovoxels: 2000,
      SomniumSpace: 3000,
      NFT_Worlds: 1200,
      SuperWorld: 1300,
    },
    {
      name: "12-04-22",
      Decentraland: 1890,
      TheSandbox: 4800,
      Cryptovoxels: 2181,
      SomniumSpace: 3000,
      NFT_Worlds: 1200,
      SuperWorld: 1300,
    },
    {
      name: "20-04-22",
      Decentraland: 2390,
      TheSandbox: 3800,
      Cryptovoxels: 2500,
      SomniumSpace: 3000,
      NFT_Worlds: 1200,
      SuperWorld: 1300,
    },
  ];

  const renderCustomAxisTick = (payload) => {
    
    const cash = n =>{
      if(n > 999 && n < 1000000000){
          return '$'+ (n/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
      }else if(n >= 1000000 && n < 1000000000){
          return '$'+ (n/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        }else if(n >= 1000000000){
          return '$'+ (n/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 Billion      
      }else if(n < 900){
          return '$'+ n; // if value < 1000, nothing to do
      }
    
  }
    return cash(payload) 
  }
  

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={626}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={renderCustomAxisTick}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Decentraland" stackId="a" fill="red" />
          <Bar dataKey="TheSandbox" stackId="a" fill="blue" />
          <Bar dataKey="Cryptovoxels" stackId="a" fill="gray" />
          <Bar dataKey="SomniumSpace" stackId="a" fill="green" />
          <Bar dataKey="NFT_Worlds" stackId="a" fill="teal" />
          <Bar dataKey="SuperWorld" stackId="a" fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}