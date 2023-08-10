// import React, { useState } from 'react';
// import OTPInput from 'react-otp-input';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import firebase from './firebase.config';
// import Cookies from 'js-cookie';

// const OTP = ({ confirmationResult, verificationCode }) => {
//     const [isLoading, setIsLoading] = useState(false);
//   const [verificationMsg, setVerificationMsg] = useState('');
//   const [otp, setOTP] = useState('');

//   const handleVerifyOTP = async () => {
//     setIsLoading(true);
//     try {
//       const { confirmationResult, verificationCode } = location.state;

//       const result = await confirmationResult.confirm(otp);
//       if (result.user) {
//         const jwtToken = Cookies.set("jwt_token", jwtToken, { expires: 30 });
//         console.log("Successfully verified");
//         // Handle successful verification (e.g., navigate to a new page)
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setVerificationMsg("Error verifying OTP");
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       {isLoading && (
//         <Box sx={{ display: 'flex' }} color="red" style={{ position: 'absolute', top: '50%', left: '45%', zIndex: '999' }} height={50} width={50}>
//           <CircularProgress />
//         </Box>
//       )}
//       <h2>OTP Verification</h2>
//       <OTPInput
//         value={otp}
//         onChange={setOTP}
//         numInputs={6}
//         isInputNum={true}
//         separator={<span>-</span>}
//         inputStyle={{
//           width: '40px',
//           height: '40px',
//           margin: '4px',
//           fontSize: '16px',
//           borderRadius: '4px',
//           border: '1px solid #ccc',
//           outline: 'none',
//           textAlign: 'center',
//         }}
//       />
//       <button onClick={handleVerifyOTP}>Verify OTP</button>
//       <p className='verification-message'>{verificationMsg}</p>
//     </div>
//   );
// };
// export default OTP