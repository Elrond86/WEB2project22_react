import React, { useState } from "react"

import LoginModal from './LoginModal'
import Backdrop from './Backdrop'


export default function UserSessionWidget(props) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  /** useState(false) ist von react und parameter ist der initial value
   * zurückgegeben wird ein Array mit hat zwei Einträgen: 
   * dr erste ist der current state, der zweite eine setter-function. 
   * (namen sind nicht zwingend aber konvention, also das das zweite der erste + set ist) 
   * es wird die der erste Wert genutzt zum zugrerifen auf state
   * und immer der setter wenn State geändert werden soll
   * 
   * Immer, wenn state mit setter geändert wird, 
   * wird react den Teil im Code, wozu der State gehört neu ausführen
   * und ggfls. entsprechend ändern. Ohne setter beim direkt ändern merkt React nichts
   * Ähnlich ist es auch beim reducer, wenn man kein neues Object zurück gibt. Dann merkt Store nichts
   * 
   * btw: useState is a react-Hook. Kann nur innerhalb von react-functions gecallt werden
   * und in costum hooks 
   */

  function openLoginHandler() {
    setShowLoginModal(true);
  }

  function closeModalHandler() {
    setShowLoginModal(false);
  }

  return (
    <>
        <div className='actions'>
        <button className='btn' onClick={openLoginHandler}>
          Login
        </button>
      </div>
        {showLoginModal && <LoginModal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {showLoginModal && <Backdrop onClick={closeModalHandler}/>}
    </>
  )
}
