import { observer } from 'mobx-react-lite';
import React  from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import SpecList from '../components/SpecList';
import TypesItem from '../components/TypesItem';
import TypesList from '../components/TypesList';
import { fetchSpecs } from '../http/specAPI';
import { fetchTypes } from '../http/typeAPI';
import {Context} from "../index";


const Specs = observer(() => {
    const [data, setSpec ] = useState();
    const {spec} = useContext(Context)
    const XLSX=require('xlsx')
    useEffect(() => {
        fetchSpecs().then(data => spec.setSpecs(data))
    }, [])

    const Excel = () => {
        fetchSpecs().then(data=>setSpec(data)
        )
        const workSheet=XLSX.utils.json_to_sheet(data);
        const workBook=XLSX.utils.book_new()
        
        XLSX.utils.book_append_sheet(workBook,workSheet,"specialists")

        XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
        XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(workBook,"Specialists.xlsx")
        };

    return (
        <Container>
            <Button variant="outline-success" onClick={Excel} className="mt-2">Экспорт в Excel</Button>
            <SpecList/>
        </Container>
        
    );
});

export default Specs;