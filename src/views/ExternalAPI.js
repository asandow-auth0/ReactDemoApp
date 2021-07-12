import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//todo: https://expressjs.com/en/resources/middleware/cors.html
//todo: send Access Token to API call
const ExternalApi = () => {
  const [message, setMessage] = useState("");

  const [posts, setPosts] = useState(null);

  const callApi = async () => {
    try{
      const response = await fetch ("http://localhost:3001/callAPI1");
      const responsedata = await response.json();
      console.log(responsedata.message);
      setMessage(responsedata.message);
    }
    catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  const callProtectedApi = async () => {
    try{
      const response = await fetch ("http://localhost:3001/callProtectedAPI");
      const responsedata = await response.json();
      console.log(responsedata.message);
      setMessage(responsedata.message);
    }
    catch (error) {
      console.error(error);
      setMessage(error.message+"... Do you have the correct scopes?");
    }
  };

    return (
      <div className="container">
        <h1>External API</h1>
          <p>
            Use these buttons to call an external API. 
          </p>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="External API Requests Examples"
        >
          <button type="button" 
          className="btn btn-primary" 
          onClick={callApi}>
            Get Public Message
          </button>
          <button type="button" 
          className="btn btn-primary" 
          onClick={callProtectedApi}>
            Get Protected Message
          </button>
        </div>
        {message && (
          <div className="mt-5">
            <h6 className="muted">Result</h6>
            <div className="container-fluid">
              <div className="row">
                <code className="col-12 text-light bg-dark p-4">{message}</code>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  export default ExternalApi;