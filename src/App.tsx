import React, {useState} from "react";
import styles from './App.module.scss'
import HCardPreview from "./HCardPreview";
import {joinStrings, takeValue} from "./utils";
import HCardForm from "./HCardForm";


const App = () => {

  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [houseName, setHouseName] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setAddressState] = useState('');
  const [postcode, setPostcode] = useState('')
  const [country, setCountry] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  // When the file is changed, take the object URL to create a local preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = (e.target?.files ?? [])[0];
    setImageUrl(file
      ? URL.createObjectURL(file)
      : ''
    );
  }


  return <div className={styles['panel-container']}>
    <div className={styles['form-panel']}>
      <div className={styles['form-container']}>
        <h1>hCard Builder</h1>
        <HCardForm
          givenName={givenName}
          onGivenNameChange={takeValue(setGivenName)}
          surname={surname}
          onSurnameChange={takeValue(setSurname)}
          email={email}
          onEmailChange={takeValue(setEmail)}
          phone={phone}
          onPhoneChange={takeValue(setPhone)}
          houseName={houseName}
          onHouseNameChange={takeValue(setHouseName)}
          street={street}
          onStreetChange={takeValue(setStreet)}
          suburb={suburb}
          onSuburbChange={takeValue(setSuburb)}
          state={state}
          onStateChange={takeValue(setAddressState)}
          postcode={postcode}
          onPostcodeChange={takeValue(setPostcode)}
          country={country}
          onCountryChange={takeValue(setCountry)}
          onImageFileChange={handleFileChange}
        />
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
