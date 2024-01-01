import styles from './FormSuggestionButton.module.css'

export default function FormSuggestionButton({ b, t }) {
   return (
      <button className={styles.container}>
         <b>{b}</b>
         <p>{t}</p>
      </button>
   )
}