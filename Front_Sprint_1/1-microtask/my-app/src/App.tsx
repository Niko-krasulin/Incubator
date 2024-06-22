import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {log} from "util";
import {Button} from "./components/Button";
import {NewComponent_filter} from "./components/NewComponent_filter";


type FilterType = 'All' | 'Rubl' | 'Dollar'

function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    // // @ts-ignore
    // const myFirstSubscriber =(event:MouseEvent<HTMLButtonElement>)=> {
    //     console.log('Hello I`am Vasya')
    // }
    // const mySecondSubscriber =(event:React.MouseEvent<HTMLButtonElement>)=> {
    //     console.log('Hello I`am Ivan')
    // }

    // const onClickHandler=(name:string)=>{
    //     console.log(name)
    // }
    const Button1Foo = (subscriber:string,age: number) => {
        console.log(subscriber,age)
    }

    const Button2Foo = (subscriber:string, age: number) => {
        console.log(subscriber,age)
    }

    const ButtonStuped = () => {
        console.log('I am stupped Button')
    }

    // let [a, aFunc] = useState(0)
    //
    //
    // const onClikHeandler = () => {
    //     aFunc(++a)
    //   return console.log(a)
    // }
    // const onClikDeandler = () => {
    //     aFunc(0)
    //     return console.log(a)
    // }
    let [filter, setFilter] = useState<FilterType>('All')
    const currentMoney = money
    //
    // if(filter === 'Rubl') {
    //      currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'RUBLS')
    // }
    // if (filter === 'Dollar') {
    //      currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'Dollars')
    // }
    //
     const onClickFilterHandler = (name:FilterType) => {
        setFilter(name)
    }

    
    return (

    //     <div className="App" >
    //         {/*<Header titleHeader = {'New Header'}/>*/}
    //         {/*<Body title={'NEW BODY'}/>*/}
    //         {/*<Footer titleFooter = {'New Footer'}/>*/}
    //         {/*<NewComponent listCars={topCars}/>*/}
    //         {/*<button onClick={(event) => { console.log('Hello')}}>MyYoutubeChanel-1</button>*/}
    //         {/*<Button name={'MyYoutubeChanel-1'} callBack={()=>Button1Foo('Vasy', 21)}/>*/}
    //         {/*<Button name={'MyYoutubeChanel-2'} callBack={()=>Button2Foo('Ivan', 22)}/>*/}
    //         {/*<Button name={'ButtonStuped'} callBack={ButtonStuped}/>*/}
    //         {/*<button onClick={() => onClickHandler('Pety')}>MyYoutubeChanel-2</button>*/}
    //
    //         {/*<h1>{a}</h1>*/}
    //         {/*<button onClick={onClikHeandler}>Click</button>*/}
    //         {/*<button onClick={onClikDeandler}>Click to 0</button>*/}
    //
    // <ul>
    //     {currentMoney.map((objFromMoneyArr,index)=>{
    //         return (
    //             <li key={index}>
    //                 <span>{objFromMoneyArr.banknots}</span>
    //                 <span>{objFromMoneyArr.value}</span>
    //                 <span>{objFromMoneyArr.number}</span>
    //             </li>
    //         )
    //     })}
    // </ul>
    //         <button onClick={()=>onClickFilterHandler('All')}>All`s</button>
    //         <button onClick={()=>onClickFilterHandler('Rubl')}>Rubls</button>
    //         <button onClick={()=>onClickFilterHandler('Dollar')}>Dollars</button>
    //
    //
    //
    //     </div>
        <NewComponent_filter money={money} onClickFilterHandler={onClickFilterHandler} />
    );
}

export default App;

//  const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]
