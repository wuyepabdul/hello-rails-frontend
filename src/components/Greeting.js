import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getGreetingAction } from "../store/greeting/greeting";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);
  useEffect(() => {
    loadMessage();
  }, [dispatch]);

  const loadMessage = async () => {
    const baseUrl = process.env.REACT_APP_RAILS_API;
    console.log("baseurl", baseUrl);
    try {
      const { data } = await axios.get(`${baseUrl}`);
      dispatch(getGreetingAction(data.message));
      console.log("data ==>", data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div class="center-items">
      {message !== null && (
        <>
          <h1>{message}</h1>
          <button type="submit" onClick={loadMessage}>
            {" "}
            Get Greeting{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default Greeting;
