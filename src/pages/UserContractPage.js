import React from 'react';
import UserContractsComponent from '../components/UserContracts';
import Header from '../components/Header';

export default function UserContractPage() {
    return (
        <>
            <Header/>
            <h1>Мои контракты</h1>
            <UserContractsComponent />
        </>
    )
}