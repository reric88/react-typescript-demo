import { useEffect } from "react";

type StatusProps = {
  status: string,
//   reason: "loading" | "success" | "failure" | "fatal"
  reason: string,
  isLoggedIn: boolean,
};

export const Status = (props: StatusProps) => {
  let message: string;
  let reply: string;

useEffect(()=>{
if (message === 'loading'){

}
}, [])

        if (props.status === "loading") {
        message = "Loading...";
      } else if (props.status === "success") {
        message = "Data was fetched successfuly!";
      } else if (props.status === "failure") {
        message = "Error: Data fetch failed";
      } else {
        message = "Fatal error";
      }
    
      if (props.reason === "loading") {
        reply = "Searching for content";
      } else if (props.reason === "success") {
        reply = "Content found";
      } else if (props.reason === "failure") {
        reply = "Interrupted while fetching content";
      } else {
        reply = "Content not found";
      }


  return (
    <div
      style={
        props.status === "loading"
          ? { backgroundColor: "#ddd" }
          : props.status === "success"
          ? { backgroundColor: "#8f8" }
          : props.status === "failure"
          ? { backgroundColor: "#ff5" }
          : { backgroundColor: "#f88" }
      }
    >
      <h2>Status:</h2>
      <h3>{message}</h3>
      <p>{reply}</p>
    </div>
  );
};
