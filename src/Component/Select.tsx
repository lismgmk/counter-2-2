import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Select.module.css'

export type SelectType = {
    valueInput: number
    errorSetting: boolean
    onChangeSelect: (value: number)=>void
    classNameSelect: string
}


export function Select(props: SelectType) {

    const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSelect(event.currentTarget.valueAsNumber)
    }

    return (
        <div className={s.inputContainer}>
            <div className={s.titleName}>{props.classNameSelect}</div>
            <input

                className={` ${props.classNameSelect} ${s.inputStyle} ${props.errorSetting ? s.error : ''}`}
                type="number"
                value={props.valueInput}
                onChange={changeValueHandler}
            />
        </div>
    );
}


