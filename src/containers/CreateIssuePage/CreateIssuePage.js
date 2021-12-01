import React from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./CreateIssuePage.module.scss";

const CreateIssuePage = () => {
  return (
    <div className={classes.CreateIssuePage}>
      <h1>Bilgisayar Sorun Bildirme Sistemi</h1>
      <div className={classes.main}>
        <div className={classes.inputs}>
          <div>
            <label for="name">İsim Soyisim</label>
            <input id="name" type="text" name="name" />
          </div>
          <div>
            <label for="email">E posta</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label for="title">Ünvan</label>
            <input id="title" type="text" name="title" />
          </div>

          <div>
            <label for="phone">Telefon</label>
            <input id="phone" type="tel" name="phone" />
          </div>
          <div>
            <label for="brkdownType">Arıza Türü</label>
            <input id="brkdownType" type="text" name="brkdownType" />
          </div>
          <div>
            <label for="message">Mesaj</label>
            <textarea id="mesasge" name="message" />
          </div>
        </div>
        <Button
          style={{
            marginLeft: "auto",
            display: "block",
            marginTop: "10px",
            width: "100px",
            height: "40px",
            borderRadius: "30px",
          }}
        >
          Gönder
        </Button>
      </div>
    </div>
  );
};
export default CreateIssuePage;
