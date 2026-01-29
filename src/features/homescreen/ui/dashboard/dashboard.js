import styles from './style.module.scss'

export const Dashboard = () => {
    return (
        <>
        <header>
            
        </header>
            <div id="newBoardModal" className={styles.modal}>
                <div className={styles.modalContent}>
                    <a href="#" className={styles.closeModal}>&times;</a>
                    <h2 className={styles.modalTitle}>Новая доска</h2>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Название доски" required />
                    </div>
                    <div className={styles.modalButtons}>
                        <a href="#" className={`${styles.modalBtn} ${styles.modalBtnCancel}`}>
                            Отмена
                        </a>
                        <a href="dashboard.html" className={`${styles.modalBtn} ${styles.modalBtnSave}`}>
                            Сохранить
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.dashboardContainer}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>Мои доски</h1>
                    <a href="index.html" className={styles.logoutBtn}>Выйти</a>
                </div>

                <div className={styles.newBoardSection}>
                    <a href="#newBoardModal" className={styles.newBoardBtn}>
                        + Новая доска
                    </a>
                </div>

                <div className={styles.boardsGrid}>
                    <a href="/createddashboard" className={`${styles.boardCard} ${styles.boardCard1}`}>
                        <h3 className={styles.boardCardTitle}>Моя доска</h3>
                        <p className={styles.boardCardDescription}>3 списка</p>
                    </a>
                </div>
            </div>
        </>
    )
}