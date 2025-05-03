import React, { useEffect } from "react";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import toast, { Toaster } from "react-hot-toast";

const ReminderForm = () => {
  const initFormState = {
    remindDescription: "",
    date: "",
    remindMe: false,
  };

  // define your schema used for validation
  const yupSchema = Yup.object({
    remindDescription: Yup.string()
      .max(50, "Description cannot be more that 50 chars in length")
      .required("Description is mandatory")
      .min(10, "The description should be above 10 chars"),
    date: Yup.date()
      .nullable()
      .min(new Date(), "Date of reminder cannot be in the Past")
      .required("Date of reminder is mandatory"),
    remindMe: Yup.boolean().oneOf([true], "Must agree to Remind you"),
  });

  const formObject = useFormik({
    initialValues: initFormState,
    validationSchema: yupSchema,
    onSubmit: (formValue) => {
      const Reminder = {
        text: formValue.remindDescription,
        remindOn: formValue.date,
        remindMe: formValue.remindMe,
        status: "PENDING",
      };

      console.log(formValue);
      console.log(Reminder);
      toast.promise(
        axios.post("http://localhost:9000/api/reminders", Reminder), // The promise
        {
          loading: "Creating reminder...",
          success: <b>Settings saved!</b>,
          error: <b>Could not save.</b>,
        }
      );
    },
  });
  return (
    <div className="h-full min-w-[400px] max-w-1/3 bg-[#56CBF9] rounded-2xl pt-1.5 flex flex-col border-2 pt-10 items-start">
      <Toaster />
      <div className="px-3 flex flex-col text-black font-bold text-2xl">
        Hello Diablos.....{" "}
        <span className="font-medium mt-2 text-[15px]">
          What should I remind you?
        </span>{" "}
      </div>
      <form
        onSubmit={formObject.handleSubmit}
        className="bg-white rounded-2xl flex flex-col w-full h-full p-3 mt-5"
      >
        <div className="mt-3">
          <label htmlFor="" className="mt-3 font-medium">
            Reminder Description
          </label>
          <input
            name="remindDescription"
            type="text"
            value={formObject.values.remindDescription}
            onChange={formObject.handleChange}
            onBlur={formObject.handleBlur}
            className="outline-1 rounded-[10px] mt-2 px-4 py-2 focus:outline-2 w-full"
          />
          {formObject.touched.remindDescription &&
          formObject.errors.remindDescription ? (
            <div className="text-sm font-semibold text-red-400 py-1 mb-1">
              {formObject.errors.remindDescription}
            </div>
          ) : null}
        </div>
        <div className="mt-3 flex flex-col">
          <label htmlFor="" className="mt-3 font-medium">
            Remind On
          </label>
          <DatePicker
            className="w-full outline-1 rounded-[10px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="date"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            dateFormat="dd-MM-yyyy"
            minDate={new Date()}
            placeholderText="dd-MM-yyyy"
            selected={formObject.values.date}
            onChange={(date) => formObject.setFieldValue("date", date)}
            onBlur={formObject.handleBlur}
          />
          {formObject.touched.date && formObject.errors.date ? (
            <div className="text-sm font-semibold text-red-500 py-1 mb-1">
              {formObject.errors.date}
            </div>
          ) : null}
        </div>
        <div className="flex gap-3 mt-5">
          <input
            type="checkbox"
            value=""
            name="remindMe"
            checked={formObject.values.remindMe}
            onChange={formObject.handleChange}
          />

          <div>Remind Me</div>
        </div>
        <div className=" px-10">
          <button
            type="submit"
            className="px-4 py-2 w-full bg-[#FF729F] text-black mt-10 font-bold rounded-[10px] hover:border-2"
          >
            Create Reminder
          </button>
        </div>
        <div className="mt-7 font-medium">
          Filter by status:
          <div className="flex flex-row gap-5 justify-between">
            <button
              type="button"
              className="px-4 py-2 w-full bg-[#81F4E1] text-black mt-5 font-bold rounded-[10px] hover:border-2"
            >
              COMPLETE
            </button>
            <button
              type="button"
              className="px-4 py-2 w-full bg-red-300 text-black mt-5 font-bold rounded-[10px] hover:border-2"
            >
              PENDING
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReminderForm;
