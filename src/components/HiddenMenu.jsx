import { Search } from "lucide-react";
const HiddenMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="min-h-[70vh] w-1/2 top-[50%] left-[25%] absolute z-[200] ">
          <div className="h-full w-full bg-red-400 rounded-lg">

         
           <div className="flex items-center justify-between px-8 py-2 w-full relative">
            <div className="flex">
                <div className="mr-5">
                <Search className="absolute top-4 left-2" size={30}/>
                </div>
                <input className="rounded-2xl outline-0 w-[480px] py-3" 
                type="search" placeholder="          Search" />
            </div>
            <div>
            <button className="cursor-pointer" 
            onClick={onClose} >
            Esc
          </button>
            </div>

           </div>


          </div>
        </div>
      )}
    </>
  );
};

export default HiddenMenu;
