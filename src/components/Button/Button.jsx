import styles from './Button.module.css';

const Button = ({isOutline, icon, text, ...rest}) => {
  // const {isOutline, icon, text} = props; 2nd method
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
