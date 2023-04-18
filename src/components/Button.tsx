import s from './Button.module.css'
type PropsButton = {
    name: string
    callBack: () => void
    error?: null| string

}
export const Button = (props: PropsButton) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.error? s.buttonActive: ""} onClick={onClickHandler}>{props.name}</button>
    )
}