import React, {useRef} from "react";
import styles from "./HCardForm.module.scss";
import LabelledInput from "./LabelledInput";
import Button from "./Button";


interface HCardFormProps {
  givenName: string;
  onGivenNameChange: (e: React.FormEvent<any>) => void;
  surname: string;
  onSurnameChange: (e: React.FormEvent<any>) => void;
  email: string;
  onEmailChange: (e: React.FormEvent<any>) => void;
  phone: string;
  onPhoneChange: (e: React.FormEvent<any>) => void;
  houseName: string;
  onHouseNameChange: (e: React.FormEvent<any>) => void;
  street: string;
  onStreetChange: (e: React.FormEvent<any>) => void;
  suburb: string;
  onSuburbChange: (e: React.FormEvent<any>) => void;
  state: string;
  onStateChange: (e: React.FormEvent<any>) => void;
  postcode: string;
  onPostcodeChange: (e: React.FormEvent<any>) => void;
  country: string;
  onCountryChange: (e: React.FormEvent<any>) => void;
  onImageFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HCardForm = (props: HCardFormProps) => {

  const imageRef = useRef<HTMLInputElement>(null);

// Trigger hidden input element via UI button
  const handleInputClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current?.click();
  }
  return (
    <form className={styles['form']}>
      <fieldset className={styles['fieldset']}>
        <legend className={styles['legend']}>PERSONAL DETAILS</legend>
        <div className={styles['form-input-group']}>
          <LabelledInput id='firstName' label="GIVEN NAME" type="text" value={props.givenName}
                         onChange={props.onGivenNameChange}/>
          <LabelledInput id='surname' label="SURNAME" type="text" value={props.surname}
                         onChange={props.onSurnameChange}/>
          <LabelledInput id='email' label="EMAIL" type="email" value={props.email} onChange={props.onEmailChange}/>
          <LabelledInput id='phone' label="PHONE" type="tel" value={props.phone} onChange={props.onPhoneChange}/>
        </div>
      </fieldset>

      <fieldset className={styles['fieldset']}>
        <legend className={styles['legend']}>ADDRESS</legend>
        <div className={styles['form-input-group']}>
          <LabelledInput id='houseNameOrNumber' label="HOUSE NAME OR #" type="text" value={props.houseName}
                         onChange={props.onHouseNameChange}/>
          <LabelledInput id='street' label="STREET" type="text" value={props.street} onChange={props.onStreetChange}/>
          <LabelledInput id='suburb' label="SUBURB" type="text" value={props.suburb} onChange={props.onSuburbChange}/>
          <LabelledInput id='state' label="STATE" type="text" value={props.state}
                         onChange={props.onStateChange}/>
          <LabelledInput id='postcode' label="POSTCODE" type="text" value={props.postcode}
                         onChange={props.onPostcodeChange}/>
          <LabelledInput id='country' label="COUNTRY" type="text" value={props.country}
                         onChange={props.onCountryChange}/>
        </div>

      </fieldset>

      <fieldset className={styles['fieldset']}>
        <div className={styles['form-input-group']}>
          <Button color='gray' onClick={handleInputClick}>Upload Avatar</Button>
          <input type="file"
                 ref={imageRef}
                 onChange={props.onImageFileChange}
                 accept="image/png, image/jpg, image/gif, image/bmp"
                 style={{display: 'none'}}

          />
          <Button>Create hCard</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default HCardForm;
