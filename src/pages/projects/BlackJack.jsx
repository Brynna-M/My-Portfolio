import ImageCarousel from "../../components/ImageCarousel";
import Navbar from "../../components/Navbar";

export default function BlackJack() {


  const images = [
    "/BlackJack/BlackJackModal.png",
    "/BlackJack/BlackJackPlay.png",
    "/BlackJack/BlackJackEndGame.png",
    "/BlackJack/BlackJackDB.png"
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full p-6 gap-6">
        <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bungee text-dark-plum mb-4 text-center">Blackjack 21 Game</h2>
          <a
            href="https://github.com/Brynna-M/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bungee text-dark-plum mb-2 underline hover:text-deep-rose"
          >
            GitHub
          </a>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This browser-based Blackjack game was built using HTML, CSS, JavaScript on the frontend  along with React to manage UI components and game flow. 
            It simulates a Blackjack 21 experience where a player can draw cards ("Hit Me") or end their turn ("Stay") to compete against
            a dealer. The goal was to create a playable browser-based version of Blackjack 21 while also incorporating persistent data storage using a MongoDB backend.          
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Gameplay</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The game uses the <a className="text-blue-600 underline" href="https://deckofcardsapi.com/" target="_blank" rel="noreferrer">Deck of Cards API </a> 
             to handle all card drawing and deck management, enabling a realistic gameplay experience with live card visuals and values. 
            On launch, a modal appears prompting the user to start the game. 
            Once started, the dealer and player each receive two cards, and gameplay follows standard Blackjack rules: 
            The player can hit or stay, and the dealer must draw until reaching at least 17. 
            Victories are determined based on busts or point totals.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Backend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Player and dealer wins are recorded and stored in a MongoDB database using a RESTful backend with two key endpoints:
          </p>
          <ul className="list-disc list-inside text-lg font-quicksand text-dark-plum mt-2 space-y-1">
            <li><strong>GET /score</strong>: Fetches the current tally of player vs. dealer wins.</li>
            <li><strong>POST /score</strong>: Submits the result of each game round and the winning hand.</li>
          </ul>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The interface features an animated card table with interactive "Hit Me" and "Stay" buttons, a visual scoreboard, and end-of-game modals with win/tie/lose results. 
            All UI elements are dynamically updated with JavaScript and React, without reloading the page. 
            The score tally updates after each game based on live data from the MongoDB backend.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
          <p className="font-quicksand font-semibold  text-lg leading-relaxed text-dark-plum">
            This project strengthened my understanding of frontend frameworks, API integration, asynchronous JavaScript, and full-stack development with persistent data tracking.
          </p>
        </div>

        <div className="w-full lg:w-1/2 border-8 border-dark-plum rounded-md shadow-lg overflow-y-auto max-h-[800px] p-4 bg-[#FFF8F0]">
          <p className="text-center font-bungee text-xl text-dark-plum">Images</p>
          <ImageCarousel images={images}/>
        </div>
      </div>
    </>
  );
}
