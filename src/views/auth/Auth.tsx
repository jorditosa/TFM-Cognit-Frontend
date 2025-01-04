import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSession = () => {
  const [session, setSession] = useState({ user: null, isAuth: false });
  const navigate = useNavigate();

  useEffect(() => {
    const verifySession = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("COGNIT_TOKEN="))
        ?.split("=")[1];

      if (!token) {
        navigate("/register");
        return;
      }

      try {
        const url = `${process.env.REACT_APP_API_URL}/auth/user`;
        const req = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const session = await req.json();

        if (!session) {
          navigate("/login");
          return;
        }

        setSession({ user: session.data, isAuth: true });
      } catch (error) {
        console.error("Error verifying session:", error);
        navigate("/login");
      }
    };

    verifySession();
  }, [navigate]);

  return session;
};

export default useSession;
