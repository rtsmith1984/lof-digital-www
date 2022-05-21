import styles from './osd-map.module.scss';

/* eslint-disable-next-line */
export interface OsdMapProps {}

export function OsdMapComponent(props: OsdMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OsdMapComponent!</h1>
    </div>
  );
}

export default OsdMapComponent;
