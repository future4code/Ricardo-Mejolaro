import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {goToLogin, goToFeed} from '../routes/coordinator';

export default function useProtectedPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    } else {
      goToFeed(history)
    }

  }, [history]);
}