import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupemail,setsignupemail] = useState('');
  const [signuppassword,setsignuppassword] = useState('');

  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setErrorMessage("");
      alert("Please enter both email and password.");
      return;
    }

    // Simulate a login attempt (replace with actual authentication logic)
    if (email === "user@gmail.com" && password === "password") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("");
      alert("Invalid email or password.");
    }
  };

  const handlesignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage("");
      alert("Please enter both email and password.");
      return;
    }

    // Simulate a login attempt (replace with actual authentication logic)
    if (email === "user@gmail.com" && password === "password") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("");
      alert("Invalid email or password.");
    }
  };

  const [action, setAction] = useState("");

  const RegisterLink = () => {
    setAction("active");
  };

  const LoginLink = () => {
    setAction("");
  };

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
};

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

  return (

    <div className={`loginsignup ${action}`}>
      <div className="logincontainer">
        <form onSubmit={handleLogin} action="">
          <h2 className="text-4xl font-semibold">Welcome to Project-K</h2>
          <p className="font-small text-lg text-gray-300 mt-2">
            Please Enter your credentials
          </p>
          <div className="mt-4">
            <div className="mt-3">
              <label className="font-medium text-lg">Username/Email</label>
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                required
              />
            </div>

            <div className="mt-1">
              <label for="helper-text" className="font-medium text-lg">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
                required
              />
            </div>
            <div className="mt-0 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-1 font-medium text-sm" for="remember">
                  Remember for 30 days
                </label>
              </div>
              <button className=" mt-0 font-medium text-sm text-violet-500">
                Forgot password
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] py-0 rounded-xl bg-violet-500 text-white tex-lg font-bold"
                type="submit"
              >
                Sign in
              </button>
              <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1.5  rounded-xl text-white-500 font-semibold text-lg border-2 border-gray-100 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                    fill="#34A853"
                  />
                  <path
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                    fill="#FBBC05"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <p className="font-medium text-base">Don't have an account?</p>
              <button className="text-violet-500 text-base font-medium ml-2">
                <a href="#" onClick={RegisterLink}>
                  Sign up
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="signupcontainer">
        <form onSubmit={handlesignup} action="">
          <h2 className="text-3xl font-semibold">Registration</h2>
          <p className="font-small text-lg text-gray-300 mt-2">
            Please Enter your credentials
          </p>
          <div className="mt-2">
            <div class="grid gap-4 mb-3 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                   Name
                </label>
                <input
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required
                    value={name}
                    onChange={handleName}
                    type="text"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required

                />
              </div>
            </div>
            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@gmail.com"
                required
                    value={signupemail}
                    onChange={(e) => setsignupemail(e.target.value)}
              />
            </div>
            <div class="mb-2">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                value={signuppassword}
                onChange={(e) => setsignuppassword(e.target.value)}
              />
            </div>
            <div class="mb-2">
              <label
                for="confirm_password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] py-0 rounded-xl bg-violet-500 text-white tex-lg font-semibold"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-2 flex justify-center items-center">
              <p className="font-medium text-base">Already have an account?</p>
              <button className="text-violet-500 text-base font-medium ml-2">
                <a href="#" onClick={LoginLink}>
                  login
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
