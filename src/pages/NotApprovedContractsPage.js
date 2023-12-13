import React from 'react';
import NotApprovedContractsTabel from '../components/NotApprovedContractsTabel';
import HeaderSeller from '../components/HeaderSeller';

export default function NotApprovedContractsPage() {

    return (
        <>
            <HeaderSeller />
            <h1>Неодобренные контракты</h1>
            <NotApprovedContractsTabel />
        </>
    )

}