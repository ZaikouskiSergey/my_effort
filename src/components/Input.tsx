import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {keyboard} from "@testing-library/user-event/dist/keyboard";
type InputType={
    setTitle:(title:string)=>void
    title: string
    sendMessage:()=>void
}
export const Input=(props:InputType)=>{
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(e.currentTarget.value)
    }
    const onKeyDownHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            props.sendMessage()
        }

    }
    return(
        <input
            value={props.title}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
        />
    )
}