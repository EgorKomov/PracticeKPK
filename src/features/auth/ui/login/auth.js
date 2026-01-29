import styles from './style.module.scss'
import { Input } from "../../../../shared/ui";


export const Auth = () => {
    return(
        <div className={styles.Login}>
            <form action="/dashboard">
                <h1>Вход</h1>
                <div className={styles.inputBox}>
                    <Input type="email" placeholder="email" required/>
                </div>
                <div className={styles.inputBox}>
                    <Input type="password" placeholder="password" required/>
                </div>

                <button type="submit" className={styles.btn}>Войти</button>
                <form action="/register">
                    <button type='submit' className={styles.btn}>Регистрация</button>
                </form>
            </form>
        </div>
    )
}