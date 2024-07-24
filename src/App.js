import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="background  w-full h-full flex flex-col items-center ">
     <h1 className="bg-white rounded-lg w-11/12 mt-[40px] text-4xl
     font-bold px-10 py-2 text-center">RANDOM GIFS</h1>

     <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
     </div>
    </div>
  );
}

export default App;
