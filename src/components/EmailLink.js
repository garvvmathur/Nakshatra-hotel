// EmailLink.js
import React, { useState } from 'react';
import './EmailLink.css';

const EmailLink = ({ email, children, subject = '', body = '' }) => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      // Modern browsers - use Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return successful;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Also copy email to clipboard as additional fallback
    setTimeout(async () => {
      const copied = await copyToClipboard(email);
      if (copied) {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 3000);
      }
    }, 500);
  };

  const handleCopyOnly = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const copied = await copyToClipboard(email);
    if (copied) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    }
  };

  const handleMailtoFallback = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Construct mailto URL as fallback
    let mailtoUrl = `mailto:${email}`;
    if (subject || body) {
      const params = new URLSearchParams();
      if (subject) params.append('subject', subject);
      if (body) params.append('body', body);
      mailtoUrl += `?${params.toString()}`;
    }
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="email-link-container">
      <a 
        href={`mailto:${email}`}
        onClick={handleEmailClick}
        className="email-link"
        title={`Send email to ${email} via Gmail`}
      >
        📧 {children || email}
      </a>
      
      <div className="email-actions">
        <button 
          onClick={handleMailtoFallback}
          className="action-button mailto-button"
          title="Open in default email app"
        >
          📮
        </button>
        
        <button 
          onClick={handleCopyOnly}
          className="action-button copy-button"
          title="Copy email to clipboard"
        >
          📋
        </button>
      </div>
      
      {showCopied && (
        <span className="copied-message">
          Email copied to clipboard!
        </span>
      )}
    </div>
  );
};

export default EmailLink;
