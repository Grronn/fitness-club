import { observer } from 'mobx-react-lite';
import React  from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TypesItem from '../components/TypesItem';
import TypesList from '../components/TypesList';
import { fetchTypes } from '../http/typeAPI';
import {Context} from "../index";
import Pages from './Pages';


const Types = observer(() => {
    const {types} = useContext(Context)
    const [data, setSpec ] = useState();
    const XLSX=require('xlsx')
    useEffect(() => {
        fetchTypes().then(data => {
            types.setTypes(data)
            types.setTotalCount(data.count)
        })
        
    }, [])

    const Excel = () => {
        fetchTypes().then(data=>setSpec(data)
        )
        const workSheet=XLSX.utils.json_to_sheet(data);
        const workBook=XLSX.utils.book_new()
        
        XLSX.utils.book_append_sheet(workBook,workSheet,"types")

        XLSX.write(workBook,{bookType:'xlsx',type:'buffer'})
        XLSX.write(workBook,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(workBook,"Types.xlsx")
        };

    return (
        <Container>
            <Button variant="outline-success" onClick={Excel} className="mt-2">Экспорт в Excel</Button>
            <TypesList/>
            <Pages/>
            
        </Container>
        
    );
});

export default Types;

/*<Row className='d-flex'>
                        {type.types.map(type =>
                            <TypesItem key={type.id} type={type}/>
                        )}

                    </Row>*/