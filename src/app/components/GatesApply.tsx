// components/ApplyForm.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import GatesDialog from './GatesDialog'; // Import the dialog component
// Import the styles
 // Assume you create this component

// Define data for dropdowns (simplified for example)
const educationLevels = ['Primary', 'Secondary', 'University', 'Vocational'];
const activities = ['business support', 'education support', 'maternal health care support', 'Economic Empowerment', 'food security support'];

// Nairobi geographical data (simplified example, in a real app this would be much larger or fetched from an API)
const nairobiGeography = {
  Nairobi: {
    'Kibra': ['Laini Saba', 'Lindi', 'Makina', 'Woodley/Kenyatta Golf Course', 'Sarangombe'],
    'Mathare': ['Hospital', 'Mabatini', 'Huruma', 'Ngei', 'Mlango Kubwa', 'Kiamaiko'],
    'Embakasi South':[ "Imara Daima", "Kwa Njenga", "Kwa Reuben", "Pipeline", "Kware"], 
    'Starehe': ['Nairobi Central', 'Ngara', 'Pangani', 'Ziwani/Kariokor', 'Landimawe', 'Nairobi South']

  },
  // ... other counties if you expand later
};

const GatesApply: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [dob, setDob] = useState('');
  const [nationalIdDoc, setNationalIdDoc] = useState<File | null>(null);
  const [educationLevel, setEducationLevel] = useState(educationLevels[0]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [county, setCounty] = useState('Nairobi'); // Default to Nairobi
  const [subCounty, setSubCounty] = useState('');
  const [ward, setWard] = useState('');
  const [internationalPhone, setInternationalPhone] = useState('');
  const [mpesaPhoneNumber, setMpesaPhoneNumber] = useState('');

  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // Derived state for dropdowns
  const subCounties = county ? Object.keys(nairobiGeography[county as keyof typeof nairobiGeography] || {}) : [];
  const wards = subCounty ? (nairobiGeography[county as keyof typeof nairobiGeography]?.[subCounty as keyof typeof nairobiGeography['Nairobi']] || []) : [];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setNationalIdDoc(file);
      } else {
        alert('Please upload a PDF file for your National ID.');
        setNationalIdDoc(null);
      }
    }
  };

  const handleActivityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.options);
    const selected = options.filter(option => option.selected).map(option => option.value);
    setSelectedActivities(selected);
  };

  const handleInitiatePayment = async () => {
    if (!mpesaPhoneNumber) {
      setDialogMessage("Please enter your M-Pesa phone number to proceed with payment.");
      setDialogOpen(true);
      return;
    }

    setDialogMessage("Please check your phone for an M-Pesa STK push. You need to complete the payment of KES 500 to enable submission.");
    setDialogOpen(true);

    try {
      // Step 1: Request STK Push from backend
      const response = await fetch('/api/mpesa-stk-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: mpesaPhoneNumber,
          amount: 500, // Fixed amount for the application fee
          transactionDesc: 'Application Fee',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('STK Push initiated:', data);
        // Step 2: Poll payment status (or rely on M-Pesa callback to your backend)
        // For this example, we'll simulate a successful payment after a delay
        setTimeout(() => {
          setPaymentConfirmed(true);
          setDialogMessage("Payment confirmed! You can now submit your application.");
        }, 5000); // Simulate 5 seconds for payment
      } else {
        setDialogMessage(`Failed to initiate STK push: ${data.message || 'Unknown error'}`);
        console.error('STK Push initiation failed:', data);
      }
    } catch (error) {
      console.error('Error initiating STK Push:', error);
      setDialogMessage("An error occurred while initiating payment. Please try again.");
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!paymentConfirmed) {
      setDialogMessage("You must complete the M-Pesa payment before submitting your application.");
      setDialogOpen(true);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('nationalId', nationalId);
    formData.append('dob', dob);
    if (nationalIdDoc) {
      formData.append('nationalIdDoc', nationalIdDoc);
    }
    formData.append('educationLevel', educationLevel);
    formData.append('selectedActivities', JSON.stringify(selectedActivities)); // Send as JSON string
    formData.append('county', county);
    formData.append('subCounty', subCounty);
    formData.append('ward', ward);
    formData.append('internationalPhone', internationalPhone);
    formData.append('mpesaPhoneNumber', mpesaPhoneNumber);
    formData.append('paymentConfirmed', String(paymentConfirmed)); // Ensure boolean is sent as string

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData, // FormData doesn't need Content-Type header
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        alert('Application submitted successfully!');
        // Optionally reset form
        setFullName('');
        setNationalId('');
        setDob('');
        setNationalIdDoc(null);
        setEducationLevel(educationLevels[0]);
        setSelectedActivities([]);
        setSubCounty('');
        setWard('');
        setInternationalPhone('');
        setMpesaPhoneNumber('');
        setPaymentConfirmed(false);
      } else {
        setSubmissionStatus('error');
        alert(`Submission failed: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
      alert('An unexpected error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apply for Support</h2>
         <p className="mt-1 text-sm text-gray-500 italic"> Due to high demand of the funding applicants are required to pay a refundable fee of Ksh 500 which will be refunded during the shortlisting and onset of the training</p>
<div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Personal Details */}
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Personal Details</h3>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Applicant&#39;s Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700 mb-1">
                National ID
              </label>
              <input
                type="text"
                id="nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="nationalIdDoc" className="block text-sm font-medium text-gray-700 mb-1">
              Attach National ID Document (PDF)
            </label>
            <input
              type="file"
              id="nationalIdDoc"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              required
            />
            {nationalIdDoc && <p className="mt-1 text-sm text-gray-600">Selected: {nationalIdDoc.name}</p>}
          </div>

          {/* Section 2: Education & Activities */}
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-4">Education & Activities</h3>
          <div>
            <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Level of Education
            </label>
            <select
              id="educationLevel"
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            >
              {educationLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="activities" className="block text-sm font-medium text-gray-700 mb-1">
              Type of support (Select all that apply)
            </label>
            <select
              id="activities"
              multiple
              value={selectedActivities}
              onChange={handleActivityChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white h-32" // h-32 for multi-select height
              required
            >
              {activities.map((activity) => (
                <option key={activity} value={activity}>{activity}</option>
              ))}
            </select>
            <p className="mt-1 text-sm text-gray-500">Hold Ctrl/Cmd to select multiple</p>
          </div>

          {/* Section 3: Location Details */}
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-4">Location Details</h3>
          <div>
            <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">
              County
            </label>
            <select
              id="county"
              value={county}
              onChange={(e) => {
                setCounty(e.target.value);
                setSubCounty(''); // Reset sub-county when county changes
                setWard(''); // Reset ward when county changes
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            >
              <option value="Nairobi">Nairobi</option>
              {/* Add other counties here if you expand the data */}
            </select>
          </div>

          <div>
            <label htmlFor="subCounty" className="block text-sm font-medium text-gray-700 mb-1">
              Sub-County
            </label>
            <select
              id="subCounty"
              value={subCounty}
              onChange={(e) => {
                setSubCounty(e.target.value);
                setWard(''); // Reset ward when sub-county changes
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
              disabled={!county}
            >
              <option value="">Select Sub-County</option>
              {subCounties.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ward" className="block text-sm font-medium text-gray-700 mb-1">
              Ward
            </label>
            <select
              id="ward"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
              disabled={!subCounty}
            >
              <option value="">Select Ward</option>
              {wards.map((w) => (
                <option key={w} value={w}>{w}</option>
            ))}
            </select>
          </div>

          {/* Section 4: Contact & Payment */}
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-4">Contact & Payment</h3>
          <div>
            <label htmlFor="internationalPhone" className="block text-sm font-medium text-gray-700 mb-1">
              International Phone Number
            </label>
           
                   <PhoneInput
                         defaultCountry="ke" // Kenya
                           value={internationalPhone}
                           onChange={setInternationalPhone}
                           inputClassName="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                             name="internationalPhone"
                            required
                    />                    
            
          </div>

          <div>
            <label htmlFor="mpesaPhoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              M-Pesa Phone Number (for payment)
            </label>
            <input
              type="tel" // Use tel for phone numbers
              id="mpesaPhoneNumber"
              value={mpesaPhoneNumber}
              onChange={(e) => setMpesaPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 07XXXXXXXX"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            {!paymentConfirmed ? (
              <button
                type="button" // Important: type="button" to prevent form submission
                onClick={handleInitiatePayment}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isSubmitting} // Disable if submission is ongoing (after payment)
              >
                Pay
              </button>
            ) : (
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={!paymentConfirmed || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>

          {submissionStatus === 'success' && (
            <p className="mt-4 text-center text-green-600 font-semibold">Application submitted successfully!</p>
          )}
          {submissionStatus === 'error' && (
            <p className="mt-4 text-center text-red-600 font-semibold">Submission failed. Please try again.</p>
          )}
         
        </form>
 <GatesDialog
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          message={dialogMessage}
        />
       
      </div>
    </section>
  );
};

export default GatesApply;
