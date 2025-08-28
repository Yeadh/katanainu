"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const useGetAllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Set loading state to true while fetching data
        setLoading(true);

        // Fetch blogs data from the backend API
        const response = await axios.get(`${API}/blog`);
        // console.log(response, "response");
        if (response.status !== 200) {
          throw new Error("Failed to fetch blogs");
        }
        const data = response.data.data;

        // Update blogsData state with fetched data
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        // Set loading state to false after fetching data
        setLoading(false);
      }
    };

    // Call the fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);

  // Return the blogs data and loading state
  return { blogsData, loading };
};

export default useGetAllBlogs;
