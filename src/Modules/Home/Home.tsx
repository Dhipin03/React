// MovingText.tsx
import React, { useState } from 'react';
import './MovingText.css'; // Import your CSS file

const MovingText: React.FC = () => {
  const [animationActive, setAnimationActive] = useState<boolean>(false);
  const [reverseAnimationActive, setReverseAnimationActive] = useState<boolean>(false);

  const moveAndRotateText = () => {
    // Toggle the animation by toggling the CSS class
    setAnimationActive((prevAnimationActive) => !prevAnimationActive);
  };

  const reverseText = () => {
    // Toggle the reverse animation by toggling the CSS class
    setReverseAnimationActive((prevReverseAnimationActive) => !prevReverseAnimationActive);
  };

  return (
    <div className='your-element'>
 <div className='your-element'>
      <button onClick={moveAndRotateText}>Forward</button>
      <span className="button-gap"></span> {/* Add a span with CSS to create a gap */}
      <button onClick={reverseText}>Reverse</button>
      <div className={`moving-text-container ${animationActive ? 'move-rotate-animation' : ''} ${reverseAnimationActive ? 'reverse-animation' : ''}`}>
        <p className="moving-text">
          Althaf hussain MU.
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default MovingText;
