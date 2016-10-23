import React from 'react';
import styles from './style.css'

const PlayerBox = ({player,editButton}) => {
  let editText;

  if (editButton) {
    editText=(<button className={styles.edit_button}>Edit</button>)
  }


  return (
    <div className={styles.player_box}>
      <div className={styles.player_box_top} />

      <div className={styles.player_box_middle}>
        <div className={styles.text}>
          {player.name}
        </div>
        {editText}
      </div>

      <div className={styles.player_box_bottom} />
    </div>
  )
}


export default PlayerBox
