import styles from './index.less';
import Header from '../components/header/index';
export default function IndexPage() {
  return (
    <div className={styles.main}>
      <div className={styles['bg-mask']}>
        <div className={styles.bg}></div>
      </div>
      <Header></Header>
    </div>
  );
}
