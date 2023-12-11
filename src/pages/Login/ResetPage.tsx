import Button from "../../components/Button";
import { Link } from "react-router-dom";

const ResetPage = () => {
  return (
    <section className=" h-[100vh] bg-[#f5f5f5] p-8 py-32 grid place-items-center">
      <article className="bg-white p-[26px] text-[#14354c] shadow-lg rounded-3xl flex flex-col gap-8 md:w-[400px] md:mx-auto">
        <h2 className=" text-[24px] font-semibold">Forgot your password</h2>
        <p className="mb-8 text-[15px] font-bold ">
          Enter the email address associated with your account and we'll send an
          email with instructions to reset your password
        </p>
        <form action="">
          <div className="mb-5">
            <label className="font-bold text-[13px] mb-1 block" htmlFor="email">
              Enter email address
            </label>
            <input
              className="border-b-2 border-neutral-300 w-full py-2 px-2 outline-none bg-[#f5f9fd]"
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
            />
          </div>
          <Button>Continue</Button>
        </form>
        <Link
          to="/login"
          className="text-center text-[14px] mt-8 text-sky-600 font-bold"
        >
          Back to Login
        </Link>
      </article>
    </section>
  );
};

export default ResetPage;
