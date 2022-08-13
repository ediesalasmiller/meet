import React, {useEffect, useState} from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);
    
    useEffect(() => { 
        setData(() => getData()) 
    }, [events]); 


    const getData = (events) => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
   const data = genres.map((genre) => {
      //find count of events with genre in summary
      const value = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie 
                    data={data} 
                    cx={200} 
                    cy={200} 
                    outerRadius={80} 
                    fill="#8884d8"
                    dataKey="value" 
                    nameKey="genre"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                />
            </PieChart>
        </ResponsiveContainer>
    );

}
export default EventGenre;