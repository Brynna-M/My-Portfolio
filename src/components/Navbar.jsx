import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-bright-blue-jean border-8 border-dark-plum shadow-md shadow-dark-plum text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      <img
        src="/WelcomeWords.png"
        alt="Welcome text"
        className="w-[180px] md:w-[300px] object-contain"
      />
      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:flex lg:space-x-4 text-sm lg:text-base items-center">
        <Button size="small" text="Home" link="/" color="bg-nanas-nails" />
        <Button size="small" text="Portfolio" link="/portfolio" color="bg-deep-rose" />
        <Button size="small" text="About" link="/about" color="bg-turquoise-aqua" />
        <Button size="small" text="Contact" link="/contact" color="bg-bright-lilac" />
      </div>
    </nav>
  );
}
