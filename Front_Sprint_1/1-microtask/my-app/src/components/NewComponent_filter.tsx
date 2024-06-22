import React, { useState } from 'react';

type FilterType = 'All' | 'Rubl' | 'Dollar';

type MoneyType = {
    banknots: string;
    value: number;
    number: string;
};

type NewComponentFilterProps = {
    money: MoneyType[];
    onClickFilterHandler: (filter: FilterType) => void;
};

export const NewComponent_filter = ({ money, onClickFilterHandler }: NewComponentFilterProps) => {
    const [filter, setFilter] = useState<FilterType>('All');

    const filteredMoney = money.filter((filteredMoney) => {
        if (filter === 'All') return true;
        if (filter === 'Rubl') return filteredMoney.banknots === 'RUBLS';
        if (filter === 'Dollar') return filteredMoney.banknots === 'Dollars';
        return true;
    });

    return (
        <>
            <ul>
                {filteredMoney.map((el, index) => (
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                ))}
            </ul>
            <button onClick={() => { setFilter('All'); onClickFilterHandler('All'); }}>All's</button>
            <button onClick={() => { setFilter('Rubl'); onClickFilterHandler('Rubl'); }}>Rubls</button>
            <button onClick={() => { setFilter('Dollar'); onClickFilterHandler('Dollar'); }}>Dollars</button>
        </>
    );
};

