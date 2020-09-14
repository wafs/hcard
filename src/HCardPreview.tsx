import React from "react";
import styles from './HCardPreview.module.scss';

export interface HCardPreviewProps {

  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  imageUrl: string;
}

const HCardPreview = (props: Partial<HCardPreviewProps>) => {
  return (
    <div className={`${styles['container']} vcard`}>
      <div className={styles['name-content']}>
        <div className={`${styles['name']} fn`}>{props.fullName}</div>
        <div className={styles['picture']}>
          <div className={styles['placeholder-picture']} style={{backgroundImage: `url(${props.imageUrl})`}}/>
        </div>
      </div>

      <div className={styles['text-content']}>
        <div className={styles['text-row']}>
          <div className={styles['entry-container']}>
            <div className={styles['label']}>EMAIL</div>
            <div className={`${styles['text']} email`}>{props.email}</div>
          </div>
        </div>

        <div className={styles['text-row']}>
          <div className={styles['entry-container']}>
            <div className={styles['label']}>PHONE</div>
            <div className={`${styles['text']} tel`}>{props.phone}</div>
          </div>
        </div>

        <div className="adr">
          <div className={styles['text-row']}>
            <div className={styles['entry-container']}>
              <div className={styles['label']}>ADDRESS</div>
              <div className={`${styles['text']} street-address`}>{props.streetAddress}</div>
            </div>
          </div>

          <div className={styles['text-row']}>
            <div className={styles['entry-container']}>
              <div className={styles['label']}></div>
              <div className={styles['text']}>
                {(props.suburb) && <span className="locality">{props.suburb}</span>}
                {(props.suburb && props.state && <span>,&nbsp;</span>)}
                {(props.state) && <span className="region">{props.state}</span>}
              </div>
            </div>
          </div>


          <div className={styles['text-row']}>
            <div className={styles['entry-container']}>
              <div className={styles['label']}>POSTCODE</div>
              <div className={`${styles['text']} postal-code`}>{props.postcode}</div>
            </div>

            <div className={styles['entry-container']}>
              <div className={styles['label']}>COUNTRY</div>
              <div className={`${styles['text']} country-name`}>{props.country}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HCardPreview;
