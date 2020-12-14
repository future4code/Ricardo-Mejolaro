import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from '../routes/coordinator';

export default function useProtectedPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      goToFeed(history);
    } 

  }, [history, token]);
}