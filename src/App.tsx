import React, {useRef, useState} from "react";
import LabelledInput from "./LabelledInput";
import styles from './App.module.scss'
import HCardPreview from "./HCardPreview";
import {joinStrings, takeValue} from "./utils";
import Button from "./Button";


const App = () => {

  const [givenName, setGivenName] = useState('Sam');
  const [surname, setSurname] = useState('Fairfax');
  const [email, setEmail] = useState('www@ggg.ccc');
  const [phone, setPhone] = useState('02 9282 2833');
  const [houseName, setHouseName] = useState('1');
  const [street, setStreet] = useState('Darling Island Road');
  const [suburb, setSuburb] = useState('Pyrmont');
  const [state, setAddressState] = useState('NSW');
  const [postcode, setPostcode] = useState('2009')
  const [country, setCountry] = useState('Australia');
  const [imageUrl, setImageUrl] = useState('');

  const imageRef = useRef<HTMLInputElement>(null);

  // When the file is changed, take the object URL to create a local preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = (e.target?.files ?? [])[0];
    setImageUrl(file
      ? URL.createObjectURL(file)
      : ''
    );
  }

  // Trigger hidden input element via UI button
  const handleInputClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current?.click();
  }

  return <div className={styles['panel-container']}>
    <div className={styles['form-panel']}>
      <div className={styles['form-container']}>
        <h1>hCard Builder</h1>
        <form className={styles['form']}>
          <fieldset className={styles['fieldset']}>
            <legend className={styles['legend']}>PERSONAL DETAILS</legend>
            <div className={styles['form-input-group']}>
              <LabelledInput id='firstName' label="GIVEN NAME" type="text" value={givenName}
                             onChange={takeValue(setGivenName)}/>
              <LabelledInput id='surname' label="SURNAME" type="text" value={surname}
                             onChange={takeValue(setSurname)}/>
              <LabelledInput id='email' label="EMAIL" type="email" value={email} onChange={takeValue(setEmail)}/>
              <LabelledInput id='phone' label="PHONE" type="tel" value={phone} onChange={takeValue(setPhone)}/>
            </div>
          </fieldset>

          <fieldset className={styles['fieldset']}>
            <legend className={styles['legend']}>ADDRESS</legend>
            <div className={styles['form-input-group']}>
              <LabelledInput id='houseNameOrNumber' label="HOUSE NAME OR #" type="text" value={houseName}
                             onChange={takeValue(setHouseName)}/>
              <LabelledInput id='street' label="STREET" type="text" value={street} onChange={takeValue(setStreet)}/>
              <LabelledInput id='suburb' label="SUBURB" type="text" value={suburb} onChange={takeValue(setSuburb)}/>
              <LabelledInput id='state' label="STATE" type="text" value={state}
                             onChange={takeValue(setAddressState)}/>
              <LabelledInput id='postcode' label="POSTCODE" type="text" value={postcode}
                             onChange={takeValue(setPostcode)}/>
              <LabelledInput id='country' label="COUNTRY" type="text" value={country}
                             onChange={takeValue(setCountry)}/>
            </div>

          </fieldset>

          <fieldset className={styles['fieldset']}>
            <div className={styles['form-input-group']}>
              <Button color='gray' onClick={handleInputClick}>Upload Avatar</Button>
              <input type="file"
                     ref={imageRef}
                     onChange={handleFileChange}
                     accept="image/png, image/jpg, image/gif, image/bmp"
                     style={{display: 'none'}}

              />
              <Button>Create hCard</Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div className={styles['preview-panel']}>
      <div className={styles['preview-container']}>
        <h2 className={styles['preview-title']}>HCARD PREVIEW</h2>
        <HCardPreview
          fullName={joinStrings([givenName, surname])}
          email={email}
          phone={phone}
          streetAddress={joinStrings([houseName, street])}
          suburb={suburb}
          state={state}
          postcode={postcode}
          country={country}
          imageUrl={imageUrl}
        />
      </div>
    </div>
  </div>
}

export default App;
