import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import { useTranslation } from "react-i18next";


const Login = () => {
    const { loginUser, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Login successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Invalid email or password");
          });
    };


    
    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div className="">
            <div className="bg-base-200 flex flex-col justify-center items-center p-10 gap-5">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-lg md:text-3xl font-bold  text-ceter">{t("Login")}</h1>
                    <h1 className="text-lg md:text-base font-bold text-center">
                        {t("LoginText")}
                        {/* This Login is for admin only. <br /> Admin can access reserve functions  */}
                    </h1> 
                </div>
                
                {/* form */}
                <div className="w-full md:w-1/2 glass p-1 md:p-10 rounded-md">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">{t("Email")}</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text ">{t("Password")}</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-blue-500 text-white">{t("Login")}</button>
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
    
};

export default Login;
