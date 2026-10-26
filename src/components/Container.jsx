import styles from '../styles/container.module.css'

export const Container = ({ children, variant = 'dark', type = 'page' }) => (
  <div className={`${styles.container} ${styles[variant]} ${styles[type]}`}>
    {children}
  </div>
)