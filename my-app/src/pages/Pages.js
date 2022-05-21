import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import {Pagination} from "react-bootstrap";
import { Context } from '../index';

const Pages = observer(() => {
    const {types} = useContext(Context)
    const pageCount = Math.ceil(types.totalCount / types.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={types.page === page}
                    onClick={() => types.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;