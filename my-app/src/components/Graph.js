import React  from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import { Context } from '..';
import { fetchOneType, fetchTypes } from '../http/typeAPI';




const Graph = () => {
    const [data, setSpec ] = useState();
    const {types } = useContext(Context);
    useEffect(() => {
        fetchTypes().then(data=>setSpec(data))
    }, [])
    console.log(data)
    
    return (
        <Container className="d-flex justify-content-center align-items-center">
        
            <BarChart
                width={1500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                barSize={20}
            >
                <XAxis dataKey="name"  padding={{left: 10, right: 10}}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="count" fill="#8884d8" background={{fill: "#eee"}}/>
            </BarChart>
        </Container>
        
    );
};

export default Graph;