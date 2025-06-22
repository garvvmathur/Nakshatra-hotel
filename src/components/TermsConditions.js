import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './TermsConditions.css';
import { Helmet } from 'react-helmet';


const TermsConditions = () => (
  <>
    <Helmet>
      <link rel="canonical" href="https://nakshatrahotel.co.in/terms-conditions" />
    </Helmet>
    <Header />
    <main className="terms-conditions">
      <h1>Terms & Conditions</h1>
      <h2>1. General Information</h2>
      <p>
        This Website is owned and operated by Nakshatra Landscapes Private Limited, located at:<br />
        4th Floor, Nakshatra Mall,<br />
        Banswara, Rajasthan – 327001, India<br />
        Contact Email: hotelnakshatrabsw@gmail.com
      </p>
      <p>
        These Terms govern your use of the Website and the services provided through it.
      </p>

      <h2>2. Reservation Terms</h2>
      <ul>
        <li>A reservation request can be made by filling out the booking form on our website.</li>
        <li>
          This form collects your full name, phone number, email address, arrival and departure dates, number of guests, room preference, meal preferences (breakfast, lunch, dinner), and any special requests.
        </li>
        <li>
          Submitting the form does not confirm your booking. Our staff will call you using the provided contact details to confirm your reservation and finalize all details.
        </li>
        <li>
          Nakshatra Hotel does not collect any online payment through the Website. All payments (if any) are handled directly with hotel staff at the time of your stay or over the phone.
        </li>
      </ul>

      <h2>3. Cancellation Policy</h2>
      <ul>
        <li>
          Since bookings are only finalized after personal confirmation via phone, cancellation is permitted before confirmation or by directly contacting hotel staff afterward.
        </li>
        <li>
          There is no formal cancellation policy or cancellation fee, as no online payment is taken.
        </li>
      </ul>

      <h2>4. Check-In and Check-Out</h2>
      <ul>
        <li>Check-in Time: 11:00 AM – 12:00 PM</li>
        <li>Check-out Time: 12:00 PM – 1:00 PM</li>
      </ul>
      <p>
        Early check-in or late check-out may be permitted, subject to room availability. Additional charges may apply and will be communicated in person by the hotel staff.
      </p>

      <h2>5. Guest Responsibilities</h2>
      <p>All guests staying at Nakshatra Hotel must comply with the following rules:</p>
      <ul>
        <li>Smoking is strictly prohibited within hotel premises.</li>
        <li>Valid government-issued photo ID is required from each guest during check-in.<br />
          Failure to provide a valid ID may result in the cancellation of your stay without refund.
        </li>
        <li>Pets are allowed.</li>
      </ul>
      <p>
        Nakshatra Hotel reserves the right to deny admission or evict guests for violating these policies.
      </p>

      <h2>6. Use of Website</h2>
      <p>
        You agree to use this Website solely for making genuine reservation requests or exploring services provided by Nakshatra Hotel.<br />
        You are prohibited from:
      </p>
      <ul>
        <li>Using bots, scrapers, or automated systems to access or interfere with the Website.</li>
        <li>Attempting to gain unauthorized access to the website or its backend.</li>
        <li>Modifying, reverse-engineering, or copying the Website’s code or content.</li>
        <li>Using the Website to distribute spam, false reservations, or harmful content.</li>
        <li>Impersonating any person or entity, or misrepresenting your affiliation with the hotel.</li>
      </ul>

      <h2>7. Privacy Policy</h2>
      <p>
        Nakshatra Hotel only collects personal data submitted via the booking form for reservation purposes. No cookies or analytical tracking are used on the Website.<br />
        Your data is used solely to confirm your booking and for related communication. It is not shared with third parties, sold, or used for marketing purposes.
      </p>

      <h2>8. Other Services</h2>
      <p>
        Nakshatra Hotel may also provide access to a restaurant and other services, which are listed on the Website. Details, pricing, and availability are subject to change and are confirmed upon inquiry or arrival.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        While we aim to provide accurate and up-to-date information on our website:
      </p>
      <ul>
        <li>Nakshatra Hotel is not responsible for any errors or omissions in content, pricing, or room availability.</li>
        <li>We do not guarantee that the Website will always be available, error-free, or secure.</li>
        <li>We shall not be held liable for any direct or indirect damages arising from the use or inability to use the Website.</li>
      </ul>

      <h2>10. Changes to These Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. Any changes will be posted on this page with an updated effective date. Continued use of the Website after changes constitutes acceptance of the new terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms & Conditions are governed by the laws of India and the jurisdiction of the courts of Banswara, Rajasthan.
      </p>
    </main>
    <Footer />
  </>
);

export default TermsConditions;
