import React, { useState } from 'react';

const styles = [
  { backgroundColor: 'yellow', color: '#000' },
  { backgroundColor: 'blue', color: '#fff' },
  { backgroundColor: 'black', color: '#fff' },
  { backgroundColor: 'purple', color: '#fff' },
  { backgroundColor: 'salmon', color: '#000' },
  { backgroundColor: 'lightgreen', color: '#000' },
];

const FIRST_EL_STATE = {
  Undefined: 0,
  First: 1,
  Second: 2,
};

const FIRST_EL_STATE_DISPLAY = {
  [FIRST_EL_STATE.Undefined]: 'transparent',
  [FIRST_EL_STATE.First]: 'blue',
  [FIRST_EL_STATE.Second]: 'yellow',
};

const Header = () => {
  const [firstElementState, setFirstElementState] = useState(
    FIRST_EL_STATE.Undefined
  );
  const [secondElementState, setSecondElementState] = useState({
    backgroundColor: null,
    color: null,
  });

  const handleFirstElementClick = () => {
    if (firstElementState === FIRST_EL_STATE.First) {
      setFirstElementState(FIRST_EL_STATE.Second);
      return;
    }

    if (firstElementState === FIRST_EL_STATE.Second) {
      setFirstElementState(FIRST_EL_STATE.Undefined);
      return;
    }

    setFirstElementState(FIRST_EL_STATE.First);
  };

  const handleSecondElementClick = () => {
    const randomStyleNumber = Math.floor(Math.random() * styles.length);
    const { backgroundColor, color } = styles[randomStyleNumber];
    setSecondElementState({ backgroundColor, color });
  };

  return (
    <div>
      <h2>Храпко Василь Андрійович</h2>
      <p
        style={{
          backgroundColor: FIRST_EL_STATE_DISPLAY[firstElementState],
        }}
        onClick={handleFirstElementClick}
        title="Дата та місце народження"
      >
        <b>Дата та місце народження</b>: 29.11.2002 р., м. Дніпро,
        Дніпропетровська обл.
      </p>
      <p
        style={{
          backgroundColor: secondElementState.backgroundColor,
          color: secondElementState.color,
        }}
        onClick={handleSecondElementClick}
        title="Освіта"
      >
        <b>Освіта</b>:<br />
        <b>Школа</b>: ССЗШ №126 з поглибленим вивченням французької мови, м.
        Дніпро
        <br />
        <b>Університет</b>: Національний технічний університет України
        «Київський політехнічний інститут імені Ігоря Сікорського», ФІОТ,
        Інженерія програмного забезпечення
      </p>
    </div>
  );
};

export default Header;
