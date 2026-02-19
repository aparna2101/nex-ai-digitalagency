import { useState } from "react";

export default function ConsultationForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="relative">

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Free Consultation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-2xl">

            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Thank You!
            </h2>

            <p className="text-gray-600 mb-4">
              Thank you for your message.  
              Our team will contact you within 24 hours.
            </p>

            <div className="mb-4">
              <p className="font-semibold text-gray-800">
                UAE Contact Number:
              </p>
              <a
                href="tel:+971501234567"
                className="text-blue-600 font-medium"
              >
                +971 50 123 4567
              </a>
            </div>

            <a
              href="tel:+971501234567"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Call Now
            </a>

            <div className="mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
