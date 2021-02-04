export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Hey there 👋</h1>
        <span className="font-semibold text-sm text-center my-2">
          Welcome back to Rep<span className="text-blue-500">suite</span>.
        </span>
        <form className="my-8 flex flex-col w-full">
          <label for="email">Email</label>
          <input
            name="email"
            className="p-2 bg-gray-100 font-light focus:outline-none rounded-lg my-2"
            type="text"
            placeholder="ex: business@yourcompany.com"
          />
          <label className="mt-2" for="password">
            Password
          </label>
          <input
            name="password"
            className="p-2 bg-gray-100 font-light focus:outline-none rounded-lg my-2"
            type="password"
            placeholder="your password"
          />
          <button className="bg-pink-600 text-white font-semibold text-center focus:outline-none border-none rounded-lg p-2 mt-10 shadow-lg">
            Sign in
          </button>
          <p className="mt-2 font-thin text-xs text-center">
            New user? <span className="text-blue-400">Signup instead </span>
          </p>
          <div className="flex flex-row space-between text-xs font-thin items-center my-4">
            <hr className="flex-1 " />
            <span className="px-2">or continue with</span>
            <hr className="flex-1 " />
          </div>
          <div className="flex flex-row space-between p-6">
            <div className="flex-1 p-2 rounded-lg border m-2">
              <img
                className="w-8 h-8 m-auto"
                alt="google"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              />
            </div>
            <div className="flex-1 p-2 rounded-lg border m-2">
              <img
                className="w-8 h-8 m-auto"
                alt="facebook"
                src="https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
