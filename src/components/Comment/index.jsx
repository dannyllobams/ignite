import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from '../Avatar';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/dannyllobams.png' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dannyllo Souza</strong>
              <time title='11 de maio às 08:00' dateTime='2022-05-11 08:00:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Excluir comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Dannyllo, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}