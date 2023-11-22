import { memo } from 'react';

function ToggleSounds({ allowSound, setAllowSound }) {
  console.log(allowSound);
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound(allow => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  );
}

export default memo(ToggleSounds);
