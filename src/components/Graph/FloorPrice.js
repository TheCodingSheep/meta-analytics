import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "22-03-22",
      Decentraland: 38000,
      TheSandbox: 24000,
      Cryptovoxels: 24000,
      SomniumSpace: 30000,
      NFT_Worlds: 12000,
      SuperWorld: 13000,
    },
    {
      name: "28-03-22",
      Decentraland: 38000,
      TheSandbox: 24000,
      Cryptovoxels: 22000,
      SomniumSpace: 20000,
      NFT_Worlds: 15000,
      SuperWorld: 18000,
    },
    {
      name: "02-04-22",
      Decentraland: 16000,
      TheSandbox: 9000,
      Cryptovoxels: 2000,
      SomniumSpace: 1000,
      NFT_Worlds: 2400,
      SuperWorld: 3000,
    },
    {
      name: "07-04-22",
      Decentraland: 12000,
      TheSandbox: 13000,
      Cryptovoxels: 11000,
      SomniumSpace: 10000,
      NFT_Worlds: 8000,
      SuperWorld: 12000,
    },
    {
      name: "12-04-22",
      Decentraland: 20000,
      TheSandbox: 19000,
      Cryptovoxels: 48000,
      SomniumSpace: 15000,
      NFT_Worlds: 12000,
      SuperWorld: 14000,
    },
    {
      name: "20-04-22",
      Decentraland: 25000,
      TheSandbox: 4000,
      Cryptovoxels: 14000,
      SomniumSpace: 13000,
      NFT_Worlds: 14000,
      SuperWorld: 11000,
    },
  ];
  const renderCustomAxisTick = (payload) => {
    
    const cash = n =>{
      if(n > 999 && n < 1000000000){
          return '$'+ (n/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
      }else if(n >= 1000000 && n < 1000000000){
          return '$'+ (n/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
        }else if(n >= 1000000000){
          return '$'+ (n/1000000000).toFixed(0) + 'B'; // convert to B for number from > 1 Billion      
      }else if(n < 900){
          return '$'+ n; // if value < 1000, nothing to do
      }
    
  }
    return cash(payload) 
  }

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="99%" height={300}>
        <LineChart
          width={580}
          height={328}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis tickFormatter={renderCustomAxisTick}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Decentraland" stroke="Red" strokeWidth="1.5" dot={false}/>
          <Line type="monotone" dataKey="TheSandbox" stroke="Blue" strokeWidth="1.5" dot={false}/>
          <Line type="monotone" dataKey="Cryptovoxels" stroke="Gray" strokeWidth="1.5" dot={false}/>
          <Line type="monotone" dataKey="SomniumSpace" stroke="Green" strokeWidth="1.5" dot={false}/>
          <Line type="monotone" dataKey="NFT_Worlds" stroke="Teal" strokeWidth="1.5" dot={false}/>
          <Line type="monotone" dataKey="SuperWorld" stroke="Violet" strokeWidth="1.5" dot={false}/>
        </LineChart>
       </ResponsiveContainer>
    );
  }
}