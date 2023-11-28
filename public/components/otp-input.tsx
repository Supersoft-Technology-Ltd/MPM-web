import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function Otp() {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputStyle={{
        width: '54px',
        height: '50px',
        border: '1px solid #0041A0',
        marginLeft: '1rem',
        borderRadius: '12px',
        outline: 'none'
      }}
      containerStyle={{
        marginTop: '2rem',
        color: '#242A37',
        fontWeight: '500'
      }}
      renderInput={(props) => <input {...props} />}
    />
  );
}