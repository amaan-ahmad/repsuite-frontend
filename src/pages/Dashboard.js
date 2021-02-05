import Navbar from "../components/Navbar";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen w-screen bg-blue-50">
        <Navbar />
        <main className="flex flex-col md:flex-row md:mx-10 my-4">
          <section className="flex flex-col flex-1 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full p-4">
              <span className="text-gray-800 font-extrabold mb-8 lg:text-2xl md:text-xl text-lg">
                Pages and channels
              </span>
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
                  <img src={youtube} />
                </div>
              </div>
              <div className="flex flex-row justify-between rounded-lg p-4 my-2 items-center bg-gray-100">
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked="true"
                    className="appearance-none mr-2 focus:outline-none checked:outline-none w-5 h-5 rounded-full text-green-500 checked:text-green-600 checked:border-transparent"
                  />
                  <label className="text-gray-600 text-sm font-medium">
                    Rachana Lanade
                  </label>
                </div>
                <div className="w-6 h-6 rounded-full">
                  <img src={facebook} />
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
                  <img src={instagram} />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col flex-1 p-4">
            <div className="flex flex-col bg-white rounded-lg shadow-lg w-full p-4">
              <span className="text-gray-800 font-extrabold lg:text-2xl md:text-xl text-lg">
                Pages and channels
              </span>
            </div>
          </section>
          <section className="flex flex-col flex-1 p-4">
            <div className="flex flex-col bg-white rounded-lg shadow-lg w-full p-4">
              <span className="text-gray-800 font-extrabold lg:text-2xl md:text-xl text-lg">
                Pages and channels
              </span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
