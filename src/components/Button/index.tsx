import styles from "./Button.module.scss";
import { IoIosStarOutline } from "react-icons/io";


interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return (
      <a className={styles.Card} href="/#">

        <div className={styles.top}>
          <h2>Titulo</h2>
          <IoIosStarOutline className={styles.topIcon}/>
        </div>
        <div className={styles.mid}>
          <p>Criar Nota...</p>
        </div>
      </a>
  )
};

export default Button;
