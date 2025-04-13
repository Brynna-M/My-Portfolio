import Navbar from "../../components/Navbar";
import ImageCarousel from "../../components/ImageCarousel";


export default function CafeJusto() {
  const images = [
    "/CafeJusto/CafeJustoWHS.png",
    "/CafeJusto/CafeJustoWPH.png", 
    "/CafeJusto/CafeJustoWSS.png",
    "/CafeJusto/CafeJustoFoHS.png",
    "/CafeJusto/CafeJustoFoPS.png",
    "/CafeJusto/CafeJustoFoWC.png",
    "/CafeJusto/CafeJustoFaHP.png",
    "/CafeJusto/CafeJustoFaLiP.png",
    "/CafeJusto/CafeJustoFaPE.png",
    "/CafeJusto/CafeJustoERD.png",
    "/CafeJusto/CafeJustoFSM.png",
    "/CafeJusto/Final Poster - Chainbytes.png"
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full p-6 gap-6">
        <div className="w-full lg:w-1/2 bg-[#FFF8F0] border-8 border-dark-plum p-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-bungee text-dark-plum mb-4 text-center">Cafe Justo</h2>
          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Description</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This mobile app was developed under the supervision of the company Chainbytes to ensure fair wages for coffee farm laborers in El Salvador using blockchain technology. 
            It leverages React Native on the frontend and smart contracts on the Polygon zkEVM network to create a transparent and tamper-proof payment system. 
            Users are assigned roles: Farm, Foreman, or Worker, based on their crypto wallet credentials, each with tailored functionality.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Functionality</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Workers display QR codes to be checked in by foremen, who can rename and manage their workforce. 
            Farm-level users can pay workers, assign roles, and monitor operations. All actions are permanently logged to the blockchain, allowing the public to verify Fair Trade practices.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Backend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            The backend is powered by Solidity smart contracts deployed to Polygon zkEVM via Hardhat. 
            Blockchain events are indexed with The Graph and queried in the frontend via GraphQL. 
            Wallet-based authentication and data immutability ensure accountability and transparency.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Frontend</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            Built with React Native and Expo, the app supports multilingual interfaces and seamless WalletConnect integration. 
            Users access role-specific screens with intuitive QR scanning, profile views, and worker management. 
            Design enhancements prioritized accessibility and mobile responsiveness.
          </p>

          <h3 className="text-xl font-bungee text-dark-plum mt-4 mb-2">Skills Developed</h3>
          <p className="font-quicksand text-lg leading-relaxed text-dark-plum">
            This project deepened my skills in decentralized app development, mobile UI/UX design, GraphQL integration, smart contract deployment, and agile team collaboration through iterative testing and stakeholder engagement.
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