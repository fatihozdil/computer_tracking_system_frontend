import React from "react";
import classes from "./SenderProperties.module.scss";

const SenderProperties = (props) => {
  const titles = [
    "Gönderen Adı",
    "Gönderen Ünvanı",
    "Gönderen Mesaj",
    "Gönderen Eposta",
    "Bildirilme Tarihi",
  ];
  const issueData = {
    sender_name: props.issueData.sender_name,
    sender_title: props.issueData.sender_title,
    sender_message: props.issueData.sender_message,
    sender_mail: props.issueData.sender_mail,
    reported_date: props.issueData.reported_date,
  };
  const table = Object.keys(issueData).map((el, i) => (
    <div key={i} className={classes.property}>
      <label htmlFor={el}>{titles[i]}</label>
      <p id={el}>{issueData[el]}</p>
    </div>
  ));
  return <div className={classes.SenderProperties}>{table}</div>;
};
export default SenderProperties;
