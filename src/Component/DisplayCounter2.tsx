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
}

export function DisplayCounter2 (props : DisplayCounterType ) {

    const checkErrorCounter = () => {
        switch (props.errorCounter) {
            case 'good':
                return <div className={`${s.displayCounter} ${props.errorNumber ? s.error : ''}`}>{props.valueFunc()}</div>
            case 'incorrectValue':
                return <div className={`${s.displayCounter}`}>Incorrect Value</div>
            case 'pressSet':
                return <div className={`${s.displayCounter}`}>pres button Set</div>
            default:
                return console.log('error')
        }
    }

  return (
      <div className={s.container}>

          {checkErrorCounter()}
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