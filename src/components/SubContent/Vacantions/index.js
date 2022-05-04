import styles from "./Vacantions.module.scss";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <span className={styles.header}>Вакансии - Photoshop</span>
      <button>hh.ua</button>
    </div>
  );
};

const Left = () => {
  return (
    <div className={styles.left__container}>
      <span>Всего вакансий</span>
      <h3>1 210</h3>
    </div>
  );
};

const Star = () => {
  return (
    <div className={styles.star}>
      <span>★</span>
    </div>
  );
};

const Right = () => {
  return (
    <div className={styles.right__container}>
      <div className={styles.card}>
        <span>Начальный</span>
        <span>110 000 $</span>
        <div className={styles.stars}>
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <div className={styles.card}>
        <span>Средний</span>
        <span>190 000 $</span>
        <div className={styles.stars}>
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <div className={styles.card}>
        <span>Профессионал</span>
        <span>260 000 $</span>
        <div className={styles.stars}>
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
};

export const Vacantions = () => {
  return (
    <div className={styles.vacantions__container}>
      <Header />
      <div className={styles.content}>
        <Left />
        <Right />
      </div>
    </div>
  );
};
