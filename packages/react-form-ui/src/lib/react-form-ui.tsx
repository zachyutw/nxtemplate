import styles from './react-form-ui.module.scss';

/* eslint-disable-next-line */
export interface ReactFormUiProps {}

export function ReactFormUi(props: ReactFormUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactFormUi!</h1>
    </div>
  );
}

export default ReactFormUi;
