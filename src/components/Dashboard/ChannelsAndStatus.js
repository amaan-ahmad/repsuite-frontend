import youtube from "../../assets/images/youtube.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
export default function ChannelsAndStatus() {
  return (
    <>
      <div className="flex flex-col bg-white rounded-xl  w-full p-4">
        <span className="text-gray-700 font-extrabold lg:text-2xl md:text-xl text-l mb-2">
          Pages and channels
        </span>
        <div className="flex flex-row justify-between rounded-lg p-4 my-2 items-center bg-gray-100">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Rachana Lanade
            </label>
          </div>
          <div className="w-6 h-6 rounded-full">
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg p-4 my-2 items-center bg-gray-100">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Rachana Lanade
            </label>
          </div>
          <div className="w-6 h-6 rounded-full">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg p-4 my-2 items-center bg-gray-100">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Rachana Lanade
            </label>
          </div>
          <div className="w-6 h-6 rounded-full">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <span className="text-gray-700 font-extrabold text-lg mt-4 lg:text-2xl md:text-xl ">
          Status
        </span>
        <div className="flex flex-row justify-between rounded-lg p-4 px-2 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Requires Manual Action
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg mt-2 p-4 px-2 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Marked as Safe by:
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg ml-2 p-4 py-1 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-normal">
              Manual Action
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg ml-2 p-4 py-1 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-normal">AI</label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg mt-2 p-4 px-2 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-medium">
              Hidden by:
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg ml-2 p-4 py-1 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-normal">
              Manual Action
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg ml-2 p-4 py-1 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={true}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-normal">AI</label>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-lg ml-2 p-4 py-1 items-center">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
            />
            <label className="text-gray-600 text-sm font-normal">
              Keywords
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
