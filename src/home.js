import React, { useEffect, useState } from "react";
import $ from "jquery";

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch initial data on component mount
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);

    // Make the API call with pagination
    $.ajax({
      url: `https://randomuser.me/api/?results=10&page=${page}`,
      dataType: "json",
      success: function (data) {
        console.log(data);
        setUserData((prevData) => [...prevData, ...data.results]);
        setIsLoading(false);
      },
      error: function (xhr, status, error) {
        console.error(status, error);
        setIsLoading(false);
      },
    });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => (prevPage === 1 ? 2 : 1));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <h1>Home Page</h1>
      {userData.map((user, index) => (
        <div key={index}>
          <p>First Name: {user.name.first}</p>
          <p>Last Name: {user.name.last}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      {isLoading && <p>Loading more data...</p>}
    </div>
  );
};

export default HomePage;
