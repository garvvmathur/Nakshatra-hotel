import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <>
    <Header />
    <main className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 11th June 2025<br/>
      <strong>Last Updated:</strong> 10th June 2025</p>

      <p>
        This Privacy Policy explains how Nakshatra Hotel ("we", "us", or "our") collects, uses, and protects the personal information of users ("you") when you visit or use our website: <a href="https://nakshatrahotel.co.in" target="_blank" rel="noopener noreferrer">https://nakshatrahotel.co.in</a> ("Website").
      </p>
      <p>
        We are committed to protecting your privacy and complying with applicable data protection laws, including:
      </p>
      <ul>
        <li>General Data Protection Regulation (EU GDPR)</li>
        <li>UK General Data Protection Regulation (UK GDPR)</li>
        <li>California Consumer Privacy Act (CCPA) &amp; California Privacy Rights Act (CPRA)</li>
        <li>Australian Privacy Principles (APPs)</li>
        <li>Indian IT Act and applicable rules</li>
      </ul>

      <h2>1. Information We Collect</h2>
      <p>
        We collect personal data only when you voluntarily submit it through our booking form on the Website. The following information may be collected:
      </p>
      <ul>
        <li>Full name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Arrival and departure dates</li>
        <li>Number of guests</li>
        <li>Room preferences</li>
        <li>Meal preferences (breakfast, lunch, dinner)</li>
        <li>Any special requests</li>
      </ul>
      <p>
        We do not use cookies, analytics tracking, or any automatic data collection tools.
      </p>

      <h2>2. How We Use Your Data</h2>
      <p>
        We collect and use your information solely to:
      </p>
      <ul>
        <li>Process and manage your booking request</li>
        <li>Communicate with you regarding your reservation</li>
        <li>Provide customer support and respond to inquiries</li>
        <li>Maintain internal records</li>
      </ul>
      <p>
        We do not use your data for marketing, advertising, profiling, or automated decision-making.
      </p>

      <h2>3. How Your Data is Stored</h2>
      <p>
        Your submitted data is stored in the following ways:
      </p>
      <ul>
        <li>A confirmation email is sent to your provided email address.</li>
        <li>A notification email is sent to our hotel's official email account: <a href="mailto:hotelnakshatrabsw@gmail.com">hotelnakshatrabsw@gmail.com</a>.</li>
        <li>All form entries are stored in a Google Sheet accessible only by authorized hotel staff.</li>
      </ul>

      <h2>4. Who Has Access to Your Data</h2>
      <p>
        Your personal data is not shared with any third parties.<br/>
        Only authorized hotel staff with access to the Gmail and Google Sheets account can view or manage your data.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain booking data indefinitely in case it is required for legal, operational, or regulatory purposes. If you wish to request deletion of your data, see Section 8 below.
      </p>

      <h2>6. International Users</h2>
      <p>
        We operate from India, but visitors from the EU, UK, USA, Australia, and elsewhere are welcome.<br/>
        By submitting your personal data, you acknowledge that your data may be stored or processed in countries outside of your own, including India and Google’s cloud infrastructure, in accordance with their own data protection standards.
      </p>

      <h2>7. Children’s Privacy</h2>
      <p>
        We do not knowingly collect personal information from individuals under the age of 18. However, we do not have a system to verify the age of users. If you are a parent or guardian and believe your child has provided us with personal data, please contact us so we can take appropriate action.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your location, you may have the following rights:
      </p>
      <ul>
        <li><strong>Under EU &amp; UK GDPR:</strong>
          <ul>
            <li>Right to access your data</li>
            <li>Right to correct your data</li>
            <li>Right to deletion (Right to be forgotten)</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
          </ul>
        </li>
        <li><strong>Under CCPA/CPRA (California):</strong>
          <ul>
            <li>Right to know what personal data we collect and why</li>
            <li>Right to request deletion</li>
            <li>Right to opt out of data sale (not applicable here)</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>
        </li>
        <li><strong>Under Australia's Privacy Act:</strong>
          <ul>
            <li>Right to access and correct your personal information</li>
            <li>Right to lodge a complaint if you believe your data is mishandled</li>
          </ul>
        </li>
        <li><strong>Under India’s IT Act:</strong>
          <ul>
            <li>Right to withdraw consent</li>
            <li>Right to correct inaccurate data</li>
          </ul>
        </li>
      </ul>
      <p>
        You may exercise any of these rights by emailing us at: <a href="mailto:hotelnakshatrabsw@gmail.com">hotelnakshatrabsw@gmail.com</a>
      </p>

      <h2>9. Data Security</h2>
      <p>
        We take appropriate technical and organizational steps to protect your data against unauthorized access, disclosure, loss, or misuse. However, no internet-based system is 100% secure. You use the Website at your own risk.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        Our Website may contain links to other sites (such as travel portals or maps). We are not responsible for the privacy practices of third-party websites. We encourage you to read their privacy policies separately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. All changes will be posted on this page with a revised effective date. You are encouraged to review it periodically.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact:<br/>
        <strong>Nakshatra Hotel</strong><br/>
        4th Floor, Nakshatra Mall<br/>
        Banswara, Rajasthan - 327001<br/>
        Email: <a href="mailto:hotelnakshatrabsw@gmail.com">hotelnakshatrabsw@gmail.com</a>
      </p>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
