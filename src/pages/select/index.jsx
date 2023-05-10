import { NavLink } from 'react-router-dom';
import styles from './select.module.css'
import { questions } from '../../utils/ques-answ'

function Select() {

  return (
    <ul className={styles.list}>
      {Object.keys(questions).map(name => (
        <NavLink key={name} to={`/${name}`}>
          <li className={styles.item}>{name}</li>
        </NavLink>
      ))}
      <a href="https://bababum95.github.io/vinchento/">
        <li className={`${styles.item} ${styles.back}`}><span>👈</span>Games list</li>
      </a>
    </ul>
  )
}

export default Select;