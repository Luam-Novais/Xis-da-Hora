// import React, { useContext } from 'react';
// import styles from '../../styles/components/modals/FeedbackModal.module.scss';
// import { userContext } from '../../context/UserContext';
// const FeedBackModal = () => {
//   const {  message, statusModal } = useContext(userContext);
//   if (message) {
//     window.scrollTo({ top: 0, behavior: 'instant' });
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   }
//   function handleClick() {
//   }

//   return (
//     <>
//         <div className={styles.overlay}>
//           <div className={`${styles.containerModal}`} style={{borderColor: statusModal === 'sucess' ? 'green' : 'red' }}>
//             <p>{message}.</p>
//             <button>ok</button>
//           </div>
//         </div>
//     </>
//   );
// };

// export default FeedBackModal;
