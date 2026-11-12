"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardClient from "../components/DashboardClient";

const API_BASE = import.meta.env.VITE_API || "http://localhost:3003";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/user/me`,
          { withCredentials: true }
        );

        if (res.data.status) {
          setToken(res.data.token); // or user data
        } else {
          navigate("/signin", { replace: true });
        }
      } catch {
        navigate("/signin", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!token) return null;

  return <DashboardClient token={token} />;
}