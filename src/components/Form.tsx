import SocialMediaButton from "./SocialMediaButton";
import Link from "./Link";
import CopyRight from "./CopyRight";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Form.css";

const Form = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState<any>({
    id: null,
    email: "",
    password: "",
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  useEffect(() => {
    fetch("https://64393d6f4660f26eb1adef4f.mockapi.io/users")
      .then((res) => res.json())
      .then((result) => {
        setLoginInfo(result);
      });
  }, []);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (userEmail === " ") {
      setValidEmail(true);
      setCheckEmail("Email cannot be empty");
    }
    let found = false;
    for (let i = 0; i < loginInfo.length; i++) {
      if (
        loginInfo[i].email === userEmail &&
        loginInfo[i].password === userPassword
      ) {
        localStorage.setItem("user", userEmail);
        found = true;
        break;
      }
    }

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{6,}/;
    const uppercasePassword = uppercaseRegExp.test(userPassword);
    const lowercasePassword = lowercaseRegExp.test(userPassword);
    const digitsPassword = digitsRegExp.test(userPassword);
    const specialCharPassword = specialCharRegExp.test(userPassword);
    const minLengthPassword = minLengthRegExp.test(userPassword);

    if (!minLengthPassword) {
      setCheckPassword("Password should be at least 6 characters");
    } else if (!uppercasePassword) {
      setCheckPassword("Password should be at least one Uppercase");
    } else if (!lowercasePassword) {
      setCheckPassword("Password should be at least one Lowercase");
    } else if (!digitsPassword) {
      setCheckPassword("Password should be at least one digit");
    } else if (!specialCharPassword) {
      setCheckPassword("Password should be at least one Special Characters");
    } else {
      setValidPassword(true);
    }

    if (found === true && validPassword === true) {
      navigate("/dashboard");
    } else if (found === false) {
      setValidEmail(true);
      setCheckEmail("Email does not exists");
    }
  };

  return (
    <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
      <div className="mb-7">
        <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
        <p className="text-gray-400">
          Don't have an account? <Link text={"Sign Up"} />
        </p>
      </div>
      <form className="space-y-6" onSubmit={submitHandler}>
        <input
          className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
          type=""
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {validEmail === true && (
          <div className="text-red-500 text-sm cust-margin">{checkEmail}</div>
        )}
        <input
          className="w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
          type=""
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        {validPassword === false && (
          <div className="text-red-500 text-sm cust-margin">
            {checkPassword}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="text-sm ml-auto">
            <Link text={"Forgot your password?"} />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center bg-purple-800  hover:bg-black text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
        >
          Sign in
        </button>
        <div className="flex items-center justify-center space-x-2 my-5">
          <span className="h-px w-16 bg-gray-200"></span>
          <span className="text-gray-500 font-normal">or</span>
          <span className="h-px w-16 bg-gray-200"></span>
        </div>

        <div className="flex justify-center w-full gap-5">
          <SocialMediaButton label={"Google"} />
          <SocialMediaButton label={"Facebook"} />
        </div>
      </form>
      <CopyRight />
    </div>
  );
};

export default Form;
