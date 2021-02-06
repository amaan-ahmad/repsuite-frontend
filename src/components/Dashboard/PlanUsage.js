export default function PlanUsage() {
  return (
    <>
      <div class=" rounded-xl md:w-72 mt-4 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
        <div class="w-full h-full block">
          <div class="w-full">
            <p class="text-gray-700 dark:text-white  text-2xl font-extrabold mb-4">
              Task Progress
            </p>
            <div class="flex items-center justify-between text-gray-400 text-sm">
              <p>Connected Accounts</p>
              <p>4/8</p>
            </div>
            <div class="w-full h-2 bg-green-100 rounded-full mb-4">
              <div class="w-1/2 h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>

            <div class="flex items-center justify-between text-gray-400 text-sm">
              <p>Comments Processed</p>
              <p>27,450/80,000</p>
            </div>
            <div class="w-full h-2 bg-pink-100 rounded-full">
              <div class="w-1/3 h-full text-center text-xs text-white bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
