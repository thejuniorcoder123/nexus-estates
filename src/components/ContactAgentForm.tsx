// src/components/ContactAgentForm.tsx

"use client"; // This is an interactive component

import { useState, FormEvent } from 'react';

export default function ContactAgentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State to manage feedback to the user
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default browser page reload
    setStatus('sending');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the server responded with an error (e.g., 400, 500)
        throw new Error(data.error || 'Something went wrong');
      }

      // Success!
      setStatus('success');
      setFeedbackMessage(data.message);
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');

    } catch (error: any) {
      setStatus('error');
      setFeedbackMessage(error.message);
    }
  };

  return (
    <div className="agent-card" style={{ backgroundColor: '#F5F7FA', padding: '25px', borderRadius: '8px' }}>
      <h3>Contact Agent</h3>
      <form className="contact-form" style={{ marginTop: '15px' }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px' }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px' }}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #E6E9EC', borderRadius: '4px', minHeight: '100px' }}
        ></textarea>

        <button
          type="submit"
          disabled={status === 'sending'} // Disable button while sending
          className="submit-btn"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0061DF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1,
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Feedback message area */}
      {feedbackMessage && (
        <p style={{
          marginTop: '15px',
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: status === 'success' ? '#D4EDDA' : '#F8D7DA',
          color: status === 'success' ? '#155724' : '#721C24',
        }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
}