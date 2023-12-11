import Button from "../../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { login } from "../../store/action/loginAction";
import { AppDispatch } from "../../store";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const loginResponse:any = useSelector((state:any)=> state.login);
  console.log("state", loginResponse)
  const {status, loginDetails, error} = loginResponse;
  const dispatch = useDispatch<AppDispatch>();
  let [loading, setLoading] = useState(false);
  const formSubmitHandler = (values: any, { resetForm }: any) => {
    setLoading(true)
    console.log("Form values:", values);
  
   dispatch(login({email: values?.email, password: values?.password}))
    //resetForm();
  };

  useEffect(()=>{
    if(status == 'succeeded'){
      localStorage.setItem('token',loginDetails?.token);
      setLoading(false)
      navigate('/')
    }
  },[loginResponse])


  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/')
    }
  },[])

  return (
    <section className="bg-[#F5F5F5] h-[100vh] grid place-items-center px-8">
      <section className="grid md:grid-cols-2  md:w-[800px] shadow-lg">
        <picture>
          <source srcSet="/images/loginPic.png" type="image/webp" />
          <img
            className="col-span-1 h-full object-cover "
            src="/images/loginPic.png"
            alt="building image"
          />
        </picture>
        <article className="bg-white px-10 py-12 w-full  col-span-1">
          <header className="mb-20 flex flex-col justify-center">
            <h2 className="mb-2 text-[24px] text-slate-950 font-bold">
              Welcome Back,
            </h2>
            <p className="text-[#a3a3a3] font-medium">Sign in to continue</p>
          </header>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={formSubmitHandler}
          >
            <Form className="flex flex-col gap-8 w-full ">
              <div>
                <label
                  className="block text-[#414141] font-bold text-[15px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className="border-b-2 border-neutral-300 w-full py-2 outline-none"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="enter email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-[14px]"
                />
              </div>
              <div>
                <label
                  className="block text-[#414141] font-bold text-[15px]"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="border-b-2 border-neutral-300 w-full py-2 outline-none"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-[14px]"
                />
              </div>
              <Link
                to="/reset"
                className="text-right font-semibold text-[14px]"
              >
                Forgot Password?
              </Link>
             
              <Button type="submit" disabled={loading}>{loading ? <PulseLoader color="#36d7b7" /> : "Login"}</Button>
            </Form>
          </Formik>
        </article>
      </section>
    </section>
  );
};

export default Login;
