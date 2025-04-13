import Button from "../components/Button.jsx";

const Home = ({ className, ...props }) => {
  return (
    <div className="relative w-full pb-20">
      <img
        src="Frame 10.svg"
        alt="Intersect background"
        className="w-full"
      />
      <div className="
        absolute px-4 
        top-[85%] sm:top-[85%] md:top-[85%] 
        lg:top-[1%] xl:top-[10%]
        w-[100%] sm:w-[100%] md:w-[100%] lg:w-[55%] xl:w-[40%]
        lg:left-8 xl:left-15
      ">

      <div className="
        flex flex-col items-center gap-6
        lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6
        lg:items-start
      ">
        <Button size="page" text="My Portfolio" link="/portfolio" color="bg-deep-rose" />
        <Button size="page" text="About Me" link="/about" color="bg-turquoise-aqua" />
        <div className="lg:col-span-2 flex justify-center">
          <Button size="page" text="Contact Me" link="/contact" color="bg-bright-lilac" />
        </div>
      </div>
    </div>
  </div>
  );};
export default Home;