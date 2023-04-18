import {ChangeEvent,KeyboardEvent} from "react";

type PropsInputType = {
    title: string
    setTitle: (title: string) => void
    addNewCar: ()=>void
    setError:(error: null|string)=>void

}
export const Input = (props: PropsInputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
        props.setError(null)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
       if (e.key === 'Enter'){
           props.addNewCar()
       }
    }
    return (
        <input onChange={onChangeHandler} value={props.title} onKeyDown={onKeyDownHandler}/>
    )
}