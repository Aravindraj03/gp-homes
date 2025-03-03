import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
      navigate("/", { replace: true });
    }, 1500); // 2-second delay before redirecting
  }, [navigate]);

  return (
    <div className="not-found-container">
      {showMessage && (
        <>
          <h2>404 - Page Not Found</h2>
          <div className="loader"></div>
        </>
      )}
      
      <style>
        {`
          .not-found-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }

          .loader {
            position: static;
            width: 50px;
            height: 50px;
            margin-top: 20px;
            border: 5px solid rgba(0, 0, 0, 0.1);
            border-top-color: #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
