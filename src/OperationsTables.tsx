import React from 'react';
import { DetailsList,IColumn } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
        fontWeight: 'bold',
    }

});

const operations = [
    {
        from: '0000 0284 7529 8475',
        to: '0980 9808 8200 7680',
        amount: '$1 510',
        date: '10-07-2020'
    },

    {
        from: '0000 0284 7529 8475',
        to: '0980 9808 8200 7680',
        amount: '$1 010',
        date: '09-07-2020'
    },

    {
        from: '0000 0284 7529 8475',
        to: '0980 9808 8200 7680',
        amount: '$1 350',
        date: '08-07-2020'
    },

    {
        from: '0000 0284 7529 8475',
        to: '0980 9808 8200 7680',
        amount: '$1 350',
        date: '07-07-2020'
    },
]

const columns: IColumn[] = [
    {key : 'column1', name: 'From', fieldName: 'from', minWidth: 300, maxWidth: 300, isResizable: true},
    {key : 'column2', name: 'To', fieldName: 'to', minWidth: 300, maxWidth: 300, isResizable: true},
    {key : 'column3', name: 'Amount', fieldName: 'amount', minWidth: 300, maxWidth: 300, isResizable: true},
    {key : 'column4', name: 'Date', fieldName: 'date', minWidth: 300, maxWidth: 300, isResizable: true},
]

const OperationsTable = () => {
    return (

        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                items={operations}
                columns={columns}
                selectionMode={0}/>
                </div>
        </div>
        
    );
};

export default OperationsTable;