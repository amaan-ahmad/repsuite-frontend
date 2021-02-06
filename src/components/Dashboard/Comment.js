import instagram from "../../assets/images/instagram.png";
import { CircleCheck, Thumbup, Ban } from "../svg";
export default function Comment({
  author,
  timeString,
  children,
  imgProfile,
  modView,
}) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg w-full p-4 mb-2">
        <div
          className={`${
            modView ? "border-l-4 rounded-l" : ""
          }  w-full flex flex-col  p-4 bg-white dark:bg-gray-800 relative overflow-hidden`}
        >
          <div class="w-full h-full block">
            <div class="w-full flex flex-row items-center">
              <div class="block relative">
                <img
                  alt="profile"
                  src={imgProfile}
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </div>
              <div class="flex flex-col items-start ml-2">
                <span class="dark:text-white font-bold text-blue-800">
                  {author}
                </span>
                <span class="text-gray-400 text-sm dark:text-gray-300">
                  {timeString}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            <p>{children}</p>
          </div>
        </div>
        {modView ? (
          <>
            <div className="mx-4 my-2 flex flex-col text-xs">
              <input
                type="text"
                placeholder="Write a reply"
                className="text-xs flex-1 text-gray-500 font-light p-2 rounded border-1"
              />
              <div className="flex flex-row flex-1 justify-between my-2">
                <div>
                  <button className="inline-flex align-center focus:outline-none w-max border-0 bg-gray-100 text-blue-600 font-bold p-2 rounded mr-2 mb-2">
                    Like
                    <Thumbup className="w-4 h-4 inline-block mx-2" />
                  </button>

                  <button className="inline-flex align-center focus:outline-none w-max border-0 bg-gray-100 text-red-600 font-bold p-2  rounded mr-2 mb-2">
                    Ban
                    <Ban className="w-4 h-4 inline-block mx-2" />
                  </button>
                </div>
                <button className=" self-start focus:outline-none w-max border-0 bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded">
                  Reply
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-row mx-4 my-2 justify-between items-center">
            <div className="flex flex-row p-2 rounded-xl bg-gray-100 w-max">
              <label className="text-gray-600 text-sm font-medium">
                Rachana Lanade
              </label>
              <img
                className="mx-2 w-6 h-6 rounded-full object-cover"
                src={instagram}
                alt="youtube"
              />
            </div>
            <CircleCheck className="mx-2 w-6 h-6 rounded-full object-cover text-green-500" />
          </div>
        )}
      </div>
    </>
  );
}
