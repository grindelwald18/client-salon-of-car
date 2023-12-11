import React from 'react';
import BasketTable from '../components/BasketTable';
import Header from '../components/Header';

export default function BasketPage() {

    return (
        <>
        <Header/>
        <h1>Корзина</h1>
            <BasketTable />
        </>
    )
}