import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NotFoundPage } from "@/components/templates/ErrorPages";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return <NotFoundPage onGoHome={() => navigate("/")} />;
};

export default NotFound;
