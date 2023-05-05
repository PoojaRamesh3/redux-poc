import Form from "../components/Form";

const Login = () => {
  const login = require("../assets/login.webp");

  return (
    <>
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative justify-evenly min-h-screen sm:flex sm:flex-rowbg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <img src={login} alt="" width="500" height="500" />
          </div>
        </div>
        <div className="flex justify-center self-center pr-14 z-10">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Login;
