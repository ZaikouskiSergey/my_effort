import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {AddModel} from "./components/AddModel";


type CarsType = TypeCar[]
type TypeCar = {
    id: string
    model: string
    color: string
}

function App() {
    let cars: CarsType = [
        {id: v1(), model: 'BMW', color: 'black'},
        {id: v1(), model: 'Volvo', color: 'black'},
        {id: v1(), model: 'KIA', color: 'silver'},
        {id: v1(), model: 'Hyundai', color: 'silver'},
        {id: v1(), model: 'Tesla', color: 'silver'},
    ]

    const[car, setCar]=useState([
        {id: v1(), model: 'BMW', color: 'black'},
        {id: v1(), model: 'Volvo', color: 'black'},
        {id: v1(), model: 'KIA', color: 'silver'},
        {id: v1(), model: 'Hyundai', color: 'silver'},
        {id: v1(), model: 'Tesla', color: 'silver'},
    ])
    const [title, setTitle]=useState('')

    let carsModel= car.map(el=><div key={el.id}>{el.model}</div>)
    const newValueCar=(title:string)=>{
        return (
            {id: v1(), model: title, color: 'silver'}
        )
    }
    let newModel=()=>{
        setCar([newValueCar(title),...car])
        setTitle('')
    }
    let sendMessage=()=>{
        newModel()
    }

    return (
        <div className="App">
            <AddModel
                newModel={newModel}
                title={title}
                setTitle={setTitle}
                sendMessage={sendMessage}
            />
            <div>
                {carsModel}
            </div>
        </div>
    );
}

export default App;
