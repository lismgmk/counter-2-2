import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";
import {Select} from "./Select";


export type SettingCounterType = {
    onClickButtonSet: () => void
    valueInput1: number
    valueInput2: number
    errorSetting1: boolean
    errorSetting2: boolean
    disableSet: boolean
    onChangeSelect1: (value: number) => void
    onChangeSelect2: (value: number) => void
    classNameSelectMax: string
    classNameSelectMin: string

}



export function SettingCounter (props : SettingCounterType ) {



  return (
      <div className={s.container}>

              <div className={`${s.buttonsBlock} ${s.buttonsBlockSelect}`}>
                  <Select
                      onChangeSelect = {props.onChangeSelect1}
                      valueInput={props.valueInput1}
                      errorSetting = {props.errorSetting1}
                      classNameSelect = {props.classNameSelectMax}
                  />
                  <Select
                      onChangeSelect = {props.onChangeSelect2}
                      valueInput={props.valueInput2}
                      errorSetting = {props.errorSetting2}
                      classNameSelect = {props.classNameSelectMin}
                  />

              </div>


              <div className={s.buttonsBlock}>

                  <ButtonForEach
                      title = {'Set'}
                      onClickButton = {props.onClickButtonSet}
                      disable = {props.disableSet}
                  />

              </div>


      </div>

  )
}


