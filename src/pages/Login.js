import LoginForm from "../components/LoginForm";
import hero3 from "../assets/svg/undraw_all_the_data_h4ki.svg";
import { Thumbup, Chat, Reload, Dollar } from "../components/svg";

export default function Login() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen min-w-100 bg-white">
        <div className="flex flex-col w-full min-h-screen md:w-1/2 lg:w-2/5 md:p-4 p-0">
          <div className="font-bold w-100 text-2xl p-2">
            Rep<span className="text-blue-500">suite</span>.
          </div>
          <div className="my-auto md:p-4 self-center w-3/4">
            <LoginForm />
          </div>
        </div>
        <div className="md:flex md:flex-col hidden md:w-1/2 lg:w-3/5 h-100 bg-blue-500 justify-center p-4 text-white">
          <img alt="hero" src={hero3} className="m-auto my-0 w-3/5" />
          <div className="flex items-center justify-center">
            <ul>
              <li className="text-md font-semibold py-2">
                <Chat className="w-5 h-5 inline-block mx-2" /> Full automated
                comment moderation
              </li>
              <li className="text-md font-semibold py-2">
                <Reload className="w-5 h-5 inline-block mx-2" />
                Take a back seat while we automate your repo
              </li>
              <li className="text-md font-semibold py-2">
                <Dollar className="w-5 h-5 inline-block mx-2" />
                Starts with a free trial
              </li>
              <li className="text-md font-semibold py-2">
                <Thumbup className="w-5 h-5 inline-block mx-2" />
                Best SaaS in the industry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
