import Navbar from "../components/Navbar";

import ChannelsAndStatus from "../components/Dashboard/ChannelsAndStatus";
import PlanUsage from "../components/Dashboard/PlanUsage";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen  bg-blue-50">
        <Navbar />
        <main className="flex flex-col md:flex-row md:mx-10 my-4">
          <section className="flex flex-col max-w-80 p-4">
            <ChannelsAndStatus />
            <PlanUsage />
          </section>
          <section className="flex flex-col flex-1 p-4">
            <div className="flex flex-col bg-white rounded-lg w-full p-4">
              <span className="text-gray-700 font-extrabold lg:text-2xl md:text-xl text-lg">
                Pages and channels
              </span>
            </div>
          </section>
          <section className="flex flex-col flex-1 p-4">
            <div className="flex flex-col bg-white rounded-lg w-full p-4">
              <span className="text-gray-700 font-extrabold lg:text-2xl md:text-xl text-lg">
                Pages and channels
              </span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
