import { useState } from 'react';
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async (formData) => {
    try {
      setStatus('sending');
      const response = await fetch('https://porfolio-backend-ten.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.EMAIL })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus('success');
      setMessage(data.message);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <Newsletter
      status={status}
      message={message}
      onValidated={formData => subscribe(formData)}
    />
  );
};
