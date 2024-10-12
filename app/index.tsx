import type { NextPage } from 'next';
import styles from './index.module.css';


const Loader:NextPage = () => {
    return (
        <div className={styles.loader4}>
            <div className={styles.content}>
                <img className={styles.companyLogoIcon} alt="" src="Company Logo.png" />
            </div>
            <div className={styles.loadingAnimation}>
                <div className={styles.progress}>
                    <div className={styles.progressBar} />
                </div>
                <div className={styles.content1}>
                    <b className={styles.chargement}>Chargement...</b>
                    <div className={styles.percentage}>
                        <b className={styles.chargement}>20</b>
                        <b className={styles.chargement}>%</b>
                    </div>
                </div>
            </div>
        </div>);
};

export default Loader;
