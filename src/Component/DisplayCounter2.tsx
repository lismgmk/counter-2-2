import React from 'react';
import s from '../App.module.css';
import {ButtonForEach} from "./ButtonForEach";

export type DisplayCounterType = {
    onClickButtonRes: () => void
    onClickButtonInc: () => void
    onClickButtonReset: () => void
    valueFunc: ()=> number
    errorCounter: string
    errorNumber: boolean
    disableReset: boolean
    disableInc: boolean
    checkErrorCounter: () => void
}

export function DisplayCounter2 (props : DisplayCounterType ) {



  return (
      <div className={s.container}>

          {props.checkErrorCounter()}
          <div className={s.buttonsBlock}>

              <ButtonForEach
                  title = {'Inc'}
                  onClickButton = {props.onClickButtonInc}
                  disable={props.disableInc}
              />

              <ButtonForEach
                  title = {'Reset'}
                  onClickButton = {props.onClickButtonReset}
                  disable={props.disableReset}
              />

              <ButtonForEach
                  title = {'Res'}
                  onClickButton = {props.onClickButtonRes}
                  disable={false}
              />

          </div>
      </div>

  )
}