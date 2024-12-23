"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from '../layout';
import Head from 'next/head';
import { useState } from 'react';

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <RootLayout>
    <Navbar />
      <Head>
        <title>Book Appointment - HealthCare Plus</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12 text-blue-800">
        <h1 className="text-4xl font-bold mb-8">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
            //   required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
            //   required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department</label>
            <select
            //   required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            >
              <option value="">Select a department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Preferred Date</label>
            <input
              type="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </form>
      </div>
      <Footer />
    </RootLayout>
  );
}