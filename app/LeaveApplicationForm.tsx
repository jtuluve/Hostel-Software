'use client'
import React, { useState } from "react";

const LeaveApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to submit data to the backend here
  };

  return (
    <div className="min-h-screen bg-white shadow-lg flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border-[1px] border-[#d7675f] p-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Leave Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="rollNumber" className="block text-gray-700 font-medium">
              Roll Number:
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="leaveType" className="block text-gray-700 font-medium">
              Type of Leave:
            </label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Leave Type</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Medical Leave">Medical Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
            </select>
          </div>
          <div>
            <label htmlFor="fromDate" className="block text-gray-700 font-medium">
              From Date:
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="toDate" className="block text-gray-700 font-medium">
              To Date:
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              Reason for Leave:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              rows={4}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#d53369] to-[#daae51]
 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveApplicationForm;
