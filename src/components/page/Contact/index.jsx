import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPostal Code: ${postalCode}\nAddress: ${address}\nMessage: ${message}`);
  };

  const setAddressByPostalCode = async () => {
    const res = await fetch(`https://api.zipaddress.net/?zipcode=${postalCode}`, {
      mode: 'cors',
    });
    const data = await res.json();
    setAddress(`${data.pref}${data.address1}${data.address2}`);
  };

  return (
    <div className={styles.container}>
      <h1>お問い合わせ</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="name">お名前：</label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="email">メールアドレス：</label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="phone">電話番号：</label>
          <input
            className={styles.formInput}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="postal">郵便番号：</label>
          <input
            className={styles.formInput}
            type="text"
            id="postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            onBlur={() => setAddressByPostalCode()}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="address">住所：</label>
          <input
            className={styles.formInput}
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="message">お問い合わせ内容：</label>
          <textarea
            className={styles.formInput}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className={styles.formButton} type="submit">送信</button>
      </form>
    </div>
 

  );
};

export default Contact;
