import React, { useEffect, useState } from "react";
import Nav from "@/components/lms/LearnerUI/Nav/nav";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown ,IoMenu } from "react-icons/io";
import EnrollmentCard from "@/components/lms/LearnerUI/Enrollment/enrollmentCard";
import style from "@/styles/lms/LearnerUI/enrollments.module.css";
import { courses } from "@/dummy -data/lms/learnerUI/enrollments";
import EnvFooter from "@/components/lms/LearnerUI/Enrollment/envFooter";
import Sidebar from "@/components/lms/LearnerUI/Nav/sidebar";
import Link from "next/link";
const Enrollments = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [coursesData, setCoursesData] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coursesData.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(coursesData.length / postsPerPage); i++) {
    pages.push(i);
  }
  // console.log(pages);

  useEffect(() => {
    console.log(searchedItem, selectedItem);
  }, [searchedItem, selectedItem]);

  const handleChangeSearch = async (e) => {
    const searchTerm = e.target.value;

    setSearchedItem(searchTerm);
    if(selectedItem === 'All'){
      const filteredData = courses.filter((data) => {
        return data.heading.toLowerCase().includes(searchTerm.toLowerCase() );
        
      });
      setCoursesData(filteredData);
      return;
    }

    const filteredData = courses.filter((data) => {
      return data.heading.toLowerCase().includes(searchTerm.toLowerCase() ) && data.status.toLowerCase().includes(selectedItem.toLowerCase());
    });
    console.log(filteredData);
    setCoursesData(filteredData);
  };
  const handleChangeSelect = async (e) => {
    const searchTerm = e.target.value;
    setSelectedItem(searchTerm);
    if(searchTerm === 'All'){
      const filteredData = courses.filter((data) => {
        return data.heading.toLowerCase().includes(searchedItem.toLowerCase() );
        
      });
      setCoursesData(filteredData);
      return;
    }
    const filteredData = courses.filter((data) => {
      return data.status.toLowerCase().includes(searchTerm.toLowerCase() ) && data.heading.toLowerCase().includes(searchedItem.toLowerCase() );
    });
    console.log(filteredData);
    setCoursesData(filteredData);
  };


const handleIsSideBarOpen = () =>{
  setIsSidebarOpen(!isSidebarOpen);
}

  if(isSidebarOpen){
    return(
        <Sidebar handleIsSideBarOpen={handleIsSideBarOpen}/>
    )
}
  return (
   
    <div className={style.container}>
      <Nav handleIsSideBarOpen={handleIsSideBarOpen}/>
      <div className={style.div1}>
        <p>Welcome back, User!</p>
      </div>
      <div className={style.div2}>
        <p>My courses</p>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchedItem}
            onChange={(e) => {
              handleChangeSearch(e);
            }}
          />
          <FaSearch size={20} color="black" />
        </div>
      </div>
      <div className={style.div3}>
        <p>View more courses</p>
        <div>
          <select
            name="status"
            value={selectedItem}
            onChange={(e) => {
              handleChangeSelect(e);
            }}
          >
            <option value="All">All</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>
      <div className={style.cardsContainer}>
        {currentPosts &&
          currentPosts.length > 0 &&
          currentPosts.map((item, i) => {
            return <EnrollmentCard data={item} i={i} key={i} />;
          })}
      </div>
      <div className={style.pagination}>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`${
                page == currentPage ? style.active : style.nonActive
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <EnvFooter />
    </div>
  );
};

export default Enrollments;
