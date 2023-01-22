import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';

interface Props {
    count:number
    onChange:(event: React.ChangeEvent<unknown>, value: number)=>void
    page:number
}

function Page({page, count, onChange}:Props) {
    return (

        <Pagination page={page} count={count} onChange={onChange} shape="rounded" />

    )
}

export default Page