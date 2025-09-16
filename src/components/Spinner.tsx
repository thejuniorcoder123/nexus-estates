// src/components/Spinner.tsx

"use client"; // This is the crucial directive

export const Spinner = () => (
  <div style={{
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderLeftColor: '#0061DF',
    animation: 'spin 1s ease infinite',
  }}>
    {/* This style block is what requires "use client" */}
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);