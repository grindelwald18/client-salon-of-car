import React from 'react';
import BasketTable from '../components/BasketTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function BasketPage() {

    return (
        <>
        <Header/>
        <h1>Корзина</h1>
            <BasketTable />
            {/* <Footer/> */}
        </>
    )
}