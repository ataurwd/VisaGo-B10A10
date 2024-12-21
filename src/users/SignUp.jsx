import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormData";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
  const [password, setPassword] = useState(false);
  const { handelRegisterUser, setUser } = useContext(FormContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (!upperCase.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowerCase.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    handelRegisterUser(email, password)
      .then((res) => {
          toast.success("Registration successful");
        navigate('/')
        const profile = {
          displayName: name,
          photoURL: photoURl,
        }
        updateProfile(auth.currentUser, profile)
        setUser(res.user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorMessage} ${errorCode}`);
      });
  };
  return (
    <div className="mx-4 mb-5">
      <Helmet>
        <title>Vocable | Register</title>
      </Helmet>
      <div className="max-w-md mx-auto mb-10 mt-[5vh] space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight text-MainBg">
            Register your account
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form onSubmit={handelRegister} className="space-y-6">
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="first_name"
              >
                Your Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="first_name"
                placeholder="Your Name"
                name="name"
                type="text"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="last_name"
              >
                Photo URL
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="last_name"
                placeholder="Photo URL"
                name="photo"
                type="text"
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                autoComplete=""
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter your email"
                name="email"
                type="email"
              />
            </div>
            <div className="space-y-2 text-sm relative">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="password_"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="password"
                placeholder="Enter password"
                name="password"
                type={password ? "text" : "password"}
                required
              />
              <div onClick={() => setPassword(!password)}>
                {password ? (
                  <p className="absolute top-10 right-5">
                    <FaEye size={18} />
                  </p>
                ) : (
                  <p className="absolute top-10 right-5">
                    <FaEyeSlash size={18} />
                  </p>
                )}
              </div>
            </div>
            <button className="rounded-md bg-custom-gradient w-full px-4 py-2 text-white transition-colors hover:bg-primary dark:bg-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
