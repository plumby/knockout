import React from 'react';
import styles from './style.css'

const PlayerBox = ({player,editButton,actions}) => {
  let editButtonText;
  let editText=(player.name)
  let topStyle=styles.unselected

  if (editButton) {
    editButtonText=(
      <button
        className={styles.edit_button}
        onClick={() => actions.editPlayer(player.id)}
      >
        Edit
      </button>
    )
  } else if (player.beingEdited) {
    editButtonText=(
      <button
        className={styles.edit_button}
        onClick={() => actions.editPlayer(player.id)}
        >
          Update
      </button>
    )

    topStyle=styles.selected
    editText=(<input className={styles.input} value={player.name} />)
  }



  return (
    <div
      className={styles.player_box}
      onClick={() => actions.editPlayer(player.id)}
    >
      <div className={[styles.player_box_top,topStyle].join(' ')} />

      <div className={styles.player_box_middle}>
        <div className={styles.text}>
          {editText}
        </div>
        {editButtonText}
      </div>

      <div className={styles.player_box_bottom} />
    </div>
  )
}


export default PlayerBox
