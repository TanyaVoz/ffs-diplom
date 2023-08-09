import { useState } from "react";
import classnames from 'classnames';

export default function SeanceSeatStatus(props) {
  const { status, callback } = props;
  const [taken, setTaken] = useState(false);

  const handleClick = () => {
    setTaken(!taken);
    callback();
  }

  let activeClass = "buying-scheme__chair_disabled";
  switch (status) {
    case 'standard':
      activeClass = "buying-scheme__chair_standart";
      break;
    case 'vip':
      activeClass = "buying-scheme__chair_vip";
      break;
    case 'sold':
      activeClass = "buying-scheme__chair_taken";
      break;
    default:
      activeClass = "buying-scheme__chair_disabled";
  }

  return (
    <span
      className={classnames(
        'buying-scheme__chair',
        taken ? 'buying-scheme__chair_selected' : activeClass
      )}
      onClick={() => (status === 'disabled' || status === 'sold') ? false : handleClick()}
    />
  );
}

