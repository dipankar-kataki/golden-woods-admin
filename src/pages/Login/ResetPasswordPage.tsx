import Button from "../../components/Button";

const ResetPasswordPage = () => {
  return (
    <section className="bg-[#f5f5f5] grid place-items-center h-[100vh] text-[#14354c] ">
      <article className="bg-[#fff] p-[26px] shadow-lg flex flex-col gap-10 mx-8 rounded-3xl overflow-hidden md:w-[400px]">
        <h2 className="text-[24px] font-semibold text-black">
          Create new password
        </h2>
        <p className="font-bold text-[#586577]">
          Your new password must be different from previous used passwords.
        </p>
        <form className="flex flex-col gap-8">
          <div>
            <label htmlFor="" className="font-bold text-[14px] block  ">
              Password
            </label>
            <input
              className="border border-neutral-300 w-full py-2 px-2 outline-none rounded-xl"
              type="password"
            />
            <p className="font-bold text-[12px] mt-1 text-[#969eaa]">
              Must be atleast 8 characters
            </p>
          </div>
          <div>
            <label htmlFor="" className="font-bold text-[14px] mb-1 block ">
              Confirm Password
            </label>
            <input
              className="border border-neutral-300 w-full py-2 px-2 outline-none rounded-xl "
              type="password"
            />
            <p className="font-bold text-[12px] mt-1 text-[#969eaa]">
              Both password must match
            </p>
          </div>
          <div className="mt-6">
            <Button>Reset Password</Button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ResetPasswordPage;
