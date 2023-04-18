import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Button} from "./components/Button";
import {Input} from "./components/Input";


type CarType = {
    id: string
    model: string
    color: string
    price: number
    isSold: boolean
}

type FilterType = 'All' | 'Exp' | "Sold"

function App() {
    const [cars, setCars] = useState<CarType[]>([
        {id: v1(), model: 'BMW', color: 'blue', price: 10000, isSold: true},
        {id: v1(), model: 'Volvo', color: 'black', price: 20000, isSold: true},
        {id: v1(), model: 'KIA', color: 'silver', price: 30000, isSold: false},
        {id: v1(), model: 'Hyundai', color: 'gold', price: 40000, isSold: true},
        {id: v1(), model: 'Tesla', color: 'red', price: 50000, isSold: false},
    ])
    const [title, setTitle] = useState<string>('')
    const [filter, setFilter] = useState<FilterType>('All')
    const [error, setError] = useState<null| string>(null)
    const addNewCar = () => {
        if (title === '') {
            setError('Title is required')
            return
        } else {
            let newCar = {id: v1(), model: title, color: 'blue', price: 10000, isSold: false}
            setCars([newCar, ...cars])
            setTitle('')
            setError(null)
        }
    }

    let filteredCars = cars

    if (filter === 'Exp') {
        filteredCars = cars.filter(c => c.price >= 30000)
    }
    if (filter === "Sold") {
        filteredCars = cars.filter(c => c.isSold)
    }
    const ChangeFilter = (value: FilterType) => {
        setFilter(value)
    }

    const filteredAllCars = () => {
        ChangeFilter('All')
    }

    const filteredExpensCars = () => {
        ChangeFilter('Exp')
    }
    const filteredSoldCars = () => {
        ChangeFilter("Sold")
    }
    const checkBoxStatus = (tId:string, checkValue:boolean)=>{
        setCars(cars.map(el => el.id !== tId ? el : {...el, isSold:checkValue} ))
    }

    return (
        <div className="App">
            <Input
                title={title}
                setTitle={setTitle}
                addNewCar={addNewCar}
                setError={setError}
            />
            <Button name={"Add Car"} callBack={addNewCar} />
            {error && <div>{error}</div>}
            <table>
                {filteredCars.map(c => {
                    const onChangeCheckBox=(e:ChangeEvent<HTMLInputElement>)=>{
                        checkBoxStatus(c.id, e.currentTarget.checked)
                    }
                    return (
                        <tr >
                            <td>{c.model}</td>
                            <td style={{backgroundColor:c.color}}>{c.color}</td>
                            <td>{c.price}</td>
                            <td><input type="checkbox" checked={c.isSold} onChange={onChangeCheckBox}/></td>
                        </tr>)
                })
                }
            </table>
            <Button name={"All cars"} callBack={filteredAllCars} error={error}/>
            <Button name={"the most expensive"} callBack={filteredExpensCars} error={error}/>
            <Button name={"sold"} callBack={filteredSoldCars} error={error}/>
        </div>
    )
        ;
}

export default App;
