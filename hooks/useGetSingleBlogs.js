"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const useGetSingleBlogs = (id) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Set loading state to true while fetching data
        setLoading(true);

        // Fetch blogs data from the backend API
        const response = await axios.get(`${API}/blog/${id}`);
        // console.log(response, "response");
        if (response.status !== 200) {
          throw new Error("Failed to fetch blog");
        }
        const data = response.data.data;

        // Update blogsData state with fetched data
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        // Set loading state to false after fetching data
        setLoading(false);
      }
    };

    // Call the fetchBlogs function when the component mounts
    fetchBlog();
  }, []);

  // Return the blogs data and loading state
  return { blogData, loading };
};

export default useGetSingleBlogs;
