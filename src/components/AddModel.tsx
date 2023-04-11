import React from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

type AddModelType = {
    newModel: () => void
    title: string
    setTitle: (title: string) => void
    sendMessage: () => void

}
export const AddModel = (props: AddModelType) => {
    return (
        <div>
            <Input title={props.title}
                   setTitle={props.setTitle}
                   sendMessage={props.sendMessage}
            />
            <Button name={"+"} callback={props.newModel}/>


        </div>
    )
}