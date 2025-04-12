import Button from './Button';
export default function Navbar() {
  return (
    <nav className="bg-bright-blue-jean border-8 border-dark-plum shadow-md shadow-dark-plum text-white p-6 flex items-center  justify-between">
    <img
      src="/WelcomeWords.png"
      alt="Welcome text"
      className="w-[180px] md:w-[300px] object-contain"
    />
      <div className="space-x-4 text-sm md:text-base">
        <Button size = "small" text = "Home" link="/" color="bg-nanas-nails"></Button>
        <Button size = "small" text = " Portfolio" link="/portfolio" color="bg-deep-rose"></Button>
        <Button size = "small" text = "About" link="/about" color="bg-turquoise-aqua"></Button>
        <Button size = "small" text = "Contact" link="/contact" color="bg-bright-lilac"></Button>
      </div>
    </nav>
  );
}