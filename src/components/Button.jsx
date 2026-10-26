import styles from '../styles/button.module.css'

export const Button = ({
 variant = 'outlined',
 color = 'primary',
 active = false,
 className = '',
 children,
 ...props
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[color]} ${active ? styles.active : ''} ${className}`}
    {...props}
  >
    {children}
  </button>
)