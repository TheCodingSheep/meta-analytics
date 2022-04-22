import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "22-03-22",
    Decentraland: 40000,
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
    Cryptovoxels: 18000,
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
  static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

  render() {
    return (
      <ResponsiveContainer width="99%" height={300}>
      <AreaChart
        width={580}
        height={328}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={renderCustomAxisTick}/>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Decentraland"
          stackId="1"
          stroke="Red"
          fill="Red"
        />
        <Area
          type="monotone"
          dataKey="TheSandbox"
          stackId="1"
          stroke="Blue"
          fill="Blue"
        />
        <Area
          type="monotone"
          dataKey="Cryptovoxels"
          stackId="1"
          stroke="Gray"
          fill="Gray"
        />
        <Area
          type="monotone"
          dataKey="SomniumSpace"
          stackId="1"
          stroke="Green"
          fill="Green"
        />
        <Area
          type="monotone"
          dataKey="NFT_Worlds"
          stackId="1"
          stroke="Teal"
          fill="Teal"
        />
        <Area
          type="monotone"
          dataKey="SuperWorld"
          stackId="1"
          stroke="Violet"
          fill="Violet"
        />
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}
