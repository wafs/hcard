import React, {HTMLProps} from "react";
import styles from './LabelledInput.module.scss'

const LabelledInput = (props: HTMLProps<HTMLDivElement> & { type: string, label: string, id: string; }) => {
  return <div className={styles.container} {...props}>
    <label className={styles.label} htmlFor={props.id}>{props.label}</label>
    <input id={props.id} className={styles.input} type={props.type} onChange={props.onChange} value={props.value}/>
  </div>
}

export default LabelledInput;
