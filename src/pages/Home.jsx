import Button from "../components/button.jsx";

const Home = ({ className, ...props }) => {
  return (
    <div className="relative w-full pb-20">
  <img
    src="Frame 10.svg"
    alt="Intersect background"
    className="w-full"
  />

  <div className="absolute top-0 left-40 pt-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
      <Button size="page" text="My Portfolio" link="/portfolio" color="bg-deep-rose" />
      <Button size="page" text="About Me" link="/about" color="bg-turquoise-aqua" />
      <div className="col-span-full flex justify-center">
        <Button size="page" text="Contact Me" link="/contact" color="bg-bright-lilac" />
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;


