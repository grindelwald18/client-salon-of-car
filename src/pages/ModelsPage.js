import React from 'react';
import AdminHeader from '../components/AdminHeader';
import ModelsTable from '../components/ModelsTabel'

export default function ModelsPage() {

    return (
        <>
            <AdminHeader />
            <h1>Страница брендов</h1>
            <ModelsTable/>
        </>
    )

}