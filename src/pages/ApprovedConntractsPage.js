import React from 'react';
import ApprovedContractsTabel from '../components/ApprovedContractsTable';
import HeaderSeller from '../components/HeaderSeller';


export default function ApprovedContractsPage() {

    return (
        <>
            <HeaderSeller />
            <h1>Одобренные контракты</h1>
            <ApprovedContractsTabel />
        </>
    )

}