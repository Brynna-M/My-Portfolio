import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2keue5t',
      'template_gc273id',
      formData,
      'PUBLIC_KEY'
    ).then(
      () => setStatus("Message sent! ✅"),
      () => setStatus("Something went wrong. ❌")
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFF8F0] border-8 border-dark-plum rounded-xl p-8 w-full max-w-2xl mx-auto shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bungee text-dark-plum text-center">Get in Touch!</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-4 border-4 border-dark-plum rounded font-quicksand text-lg placeholder:text-dark-plum"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-4 border-4 border-dark-plum rounded font-quicksand text-lg placeholder:text-dark-plum"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full p-4 border-4 border-dark-plum rounded font-quicksand text-lg placeholder:text-dark-plum"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-deep-rose text-white font-bungee text-lg uppercase px-8 py-3 border-4 border-dark-plum rounded hover:scale-105 transition-transform"
      >
        Send Message
      </button>
      {status && <p className="text-center font-quicksand text-dark-plum">{status}</p>}
    </form>
  );
}
