import { Home, Settings, ArrowChevronDown } from "./svg";

export default function Navbar() {
  return (
    <>
      <div className="bg-white w-full shadow-md p-4 flex flex-row justify-between items-center">
        <div className="text-xl font-bold">
          Rep<span className="text-blue-400">suite</span>.
        </div>
        <div className="flex justify-evenly flex-row w-auto items-center">
          <div className="flex items-center justify-center rounded-full bg-gray-50 text-sm w-8 h-8 mx-2">
            <Home className="text-blue-400 text-xs w-full" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-gray-50 text-sm w-8 h-8 mx-2">
            <Settings className="text-blue-400 text-xs w-full" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-gray-50 text-sm w-8 h-8 mx-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between text-xs">
              <span className="text-gray-400  font-thin">Profile</span>
              <span className="w-4 h-4">
                {" "}
                <ArrowChevronDown className="text-gray-600 font-semibold " />
              </span>
            </div>
            <span className="font-bold">Rachna Ranade</span>
          </div>
        </div>
      </div>
    </>
  );
}
