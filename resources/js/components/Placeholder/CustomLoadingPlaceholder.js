import React from 'react';

// Компонент заглушки с анимацией загрузки
const CustomLoadingPlaceholder = () => {
  return (
    // <div className="loading-placeholder">
    //   <div className="loading-animation">Loading...</div>
    // </div>
    <div className="content">
	<div className="circle"></div>
	<div className="circle"></div>
	<div className="circle"></div>
	<div className="circle"></div>
</div>
  );
};

export default CustomLoadingPlaceholder;

// import React from 'react';

// // Компонент загрузки с анимацией
// const CustomLoadingPlaceholder = () => {
//   return (
//     <div className="loading-placeholder">
//       <div className="loading-animation"></div>
//     </div>
//   );
// };

// export default CustomLoadingPlaceholder;

