import React, {useState} from 'react';
import s from './TodoFooter.module.css'

const TodoFooter = (props) => {


    const onChangeRadioBtn = (value) => {
        props.setRadio(value)
    }

    return (
        <li className={s.todoFooter}>
            <div className={s.count}>{props.itemsLeft} items left</div>
            <div className={s.form_radio}>
                <div className={s.form_radio_btn}>
                    <input id="todoFooterAll"
                           name="radio"
                           type="radio"
                           value="all"
                           checked={props.radio === 'all'}
                           onChange={ () => {onChangeRadioBtn('all')} }/>
                    <label htmlFor="todoFooterAll">All</label>
                </div>
                <div className={s.form_radio_btn}>
                    <input id="todoFooterActive"
                           name="radio"
                           type="radio"
                           value="active"
                           checked={props.radio === 'active'}
                           onChange={ () => {onChangeRadioBtn('active')} }/>
                    <label htmlFor="todoFooterActive">Active</label>
                </div>
                <div className={s.form_radio_btn}>
                    <input id="todoFooterCompleted"
                           name="radio"
                           type="radio"
                           value="completed"
                           checked={props.radio === 'completed'}
                           onChange={ () => {onChangeRadioBtn('completed')} }/>
                    <label htmlFor="todoFooterCompleted">Completed</label>
                </div>
            </div>
            <div className={s.clearWrap}>
                <button className={s.clear} onClick={ () => {props.deleteCompleted()} }>Clear Completed</button>
            </div>
        </li>
    )
}

export default TodoFooter