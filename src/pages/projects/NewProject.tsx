import { useEffect } from "react";
import CustomInput from "../../components/Input/CustomInput";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProjectListById } from "../../store/action/projectAction";

const NewProject = () => {
  const location = useLocation();
  const dispatch = useDispatch();
console.log("location", location)

//   useEffect(()=>{
// dispatch(fetchProjectListById(id))
//   },[])
  return <div className="bg-white shadow-lg">
    <div className="p-3">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
           <CustomInput labeltext="First Name" htmlFor="firstName" type="text" name="firstName"/>
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <CustomInput labeltext="First Name" htmlFor="lastName" type="text" name="lastName"/>
          </div>
        </div>
      </div>
    

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <CustomInput labeltext="Date" htmlFor="date" type="date"/>
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-3 block  font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block  font-medium text-[#07074D]">
          Are you coming to the event?
        </label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton1"
              className="pl-3  font-medium text-[#07074D]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              htmlFor="radioButton2"
              className="pl-3  font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center  font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
   
  </div>;
};

export default NewProject;
