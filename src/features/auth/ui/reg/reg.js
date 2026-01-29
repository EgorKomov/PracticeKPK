import styles from './styles.module.scss'
import { Input } from "../../../../shared/ui";

export const Reg = () => {
    return(
        <div className={styles.Register}>
            <form action="/">
                    <h1>Регистрация</h1>
                    <div className={styles.inputBox}>
                    <input type="email" placeholder="Email" required></input>
                    </div>
                    <div className={styles.inputBox}>
                    <input type="text" placeholder="Name" required></input>
                    </div>
                    <div className={styles.inputBox}>
                    <input type="password" id="password" placeholder="Пароль" required></input>
                    </div>
                    <div className={styles.inputBox}>
                    <input className="password_confirm" id="psw_confirm" type="password"  placeholder="Повторить пароль" required 
                        oninput="this.setCustomValidity(this.value != document.getElementById('password').value ? 'Пароли не совпадают.' : '')"></input>
                    </div>

                    <button type="submit" className={styles.btn}>Зарегистрироваться</button>
                    <form action="/">
                        <button type="submit" className={styles.btn}>Вернуться</button>
                    </form>
            </form>
            </div>
    )
}