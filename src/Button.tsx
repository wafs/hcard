import React, {HTMLAttributes} from "react";
import styles from './Button.module.scss'

const Button = (props: HTMLAttributes<HTMLButtonElement> & { color?: 'gray' | 'blue' }) => {
  const {children, ...rest} = props;
  return (
    <button {...rest} className={
      props.color === 'gray' ? styles['gray-button'] : styles['blue-button']
    }>{children}</button>
  )
}

export default Button;
