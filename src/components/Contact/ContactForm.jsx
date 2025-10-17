import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Phone, Mail, CheckCircle, MapPin, ArrowRight, XCircle, User, Building } from 'lucide-react';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState({ type: '', text: '' });

  const mapRef = useRef(null);
  const formRef = useRef();

  const dubaiCoordinates = [25.1972, 55.2744];

  const EMAILJS_SERVICE_ID = 'service_a4vk5cg';
  const EMAILJS_TEMPLATE_ID = 'template_pzzogyb';
  const EMAILJS_PUBLIC_KEY = 'rKjALanBXaP97yXJJ';

  // Leaflet Map Initialization
  useEffect(() => {
    let map = null;

    if (mapRef.current && !mapRef.current._leaflet_id) {
      map = L.map(mapRef.current).setView(dubaiCoordinates, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(dubaiCoordinates).addTo(map)
        .bindPopup('Our office at Burj Khalifa!')
        .openPopup();
    }

    return () => {
      if (map && mapRef.current && mapRef.current._leaflet_id) {
        map.remove();
      }
    };
  }, [mapRef]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage({ type: '', text: '' });

    try {
      // Create a form data object that includes phone number
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      setSubmissionMessage({
        type: 'success',
        text: 'Message sent successfully! We will get back to you within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnotherMessage = () => {
    setSubmissionMessage({ type: '', text: '' });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      primary: '+971 4 888 8888',
      secondary: 'Mon-Fri 9am-5pm GST',
    },
    {
      icon: Mail,
      primary: 'info@resoundify.com',
      secondary: 'We respond within 24 hours',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
      <div className="text-center mb-12">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight"
          style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.05)' }}
        >
          Contact <span className="font-semibold bg-gradient-to-br from-slate-800 to-slate-400 bg-clip-text text-transparent">Our Team</span>
        </h2>
        <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl h-auto min-h-[700px] p-8 shadow-sm border border-gray-200 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
                  <p className="text-sm text-gray-600">For all your queries and customer care needs</p>
                </div>
              </div>
            </div>

            {submissionMessage.text && (
              <div className={`p-4 rounded-lg mb-4 flex items-center gap-3 ${submissionMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                {submissionMessage.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <p className="text-sm font-medium">{submissionMessage.text}</p>
              </div>
            )}

            {submissionMessage.type === 'success' ? (
              <div className="text-center flex-grow flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={handleSendAnotherMessage}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-200"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                </button>
              </div>
            ) : (
              <form
                key={submissionMessage.type === 'success' ? 'submitted-form' : 'initial-form'}
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 flex-grow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                          name: 'phone',
                          required: true,
                        }}
                        containerClass="phone-input-container"
                        inputClass="phone-input-field"
                        buttonClass="phone-input-button"
                        dropdownClass="phone-input-dropdown"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="e.g., Order Inquiry, Technical Support, General Question"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="relative flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 resize-none h-40"
                      placeholder="Please describe your query or concern in detail..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{method.primary}</p>
                      <p className="text-xs text-gray-600">{method.secondary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>

            <div ref={mapRef} className="mb-4 rounded-lg overflow-hidden border border-gray-200 min-h-[250px] w-full">
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Burj Khalifa</p>
              <p className="text-sm text-gray-600">1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai, UAE</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Burj+Khalifa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-700 transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
  .phone-input-container {
    width: 100%;
  }
  
  .phone-input-container .phone-input-field {
    width: 100% !important;
    height: 47px !important;
    padding: 10px 12px 10px 58px !important;
    border: 1px solid #d1d5db !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    transition: all 0.2s !important;
    outline: none !important;
  }
  
  .phone-input-container .phone-input-field:focus {
    border-color: #111827 !important;
    box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.1) !important;
  }
  
  .phone-input-container .phone-input-button {
    background: transparent !important;
    border: none !important;
    border-radius: 8px 0 0 8px !important;
    padding: 8px !important;
  }
  
  .phone-input-dropdown {
    border: 1px solid #d1d5db !important;
    border-radius: 8px !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  }
`}</style>
    </div>
  );
};

export default ContactForm;
