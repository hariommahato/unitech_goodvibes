import React from "react";
import styles from '../../../styles/Maps.module.scss'

const Maps = () => {
  return (
    <div className={styles.mainDiv}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.928780662771!2d85.34832731513991!3d27.71948513156513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1958b38e1417%3A0x957cab18d45fd457!2sGood%20vibes%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1680584655309!5m2!1sen!2snp" width="100%" height="450" style={{
      border:"0"
     }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Maps;
