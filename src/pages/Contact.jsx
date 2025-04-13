import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
export default function Contact() {
  return (
    <>
      <Navbar/>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-6xl sm:text-7xl font-bungee text-dark-plum text-center mb-6">Contact Me</h1>
        <ContactForm />
      </div>
    </>
    
  );
}
