import styles from './index.module.scss';
import { OsdMapComponent } from '@lof-digital-www/map';

/* eslint-disable-next-line */
export interface MapProps {}

export function Map(props: MapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Map!</h1>
      <OsdMapComponent />
    </div>
  );
}

export default Map;
