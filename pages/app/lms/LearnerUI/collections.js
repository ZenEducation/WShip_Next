import React, { useEffect, useState } from "react";
import Nav from "@/components/lms/LearnerUI/Nav/nav";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown ,IoMenu } from "react-icons/io";
import CollectionCard from "@/components/lms/LearnerUI/Collection/collectionCard";
import style from "@/styles/lms/LearnerUI/collection.module.css";
import { courses } from "@/dummy -data/lms/learnerUI/collections";
import EnvFooter from "@/components/lms/LearnerUI/Enrollment/envFooter";
import Sidebar from "@/components/lms/LearnerUI/Nav/sidebar";
import Link from "next/link";
const Collection = () => {
  const [searchedItem, setSearchedItem] = useState("");
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
  }, [searchedItem]);

  const handleChangeSearch = async (e) => {
    const searchTerm = e.target.value;

    setSearchedItem(searchTerm);
    

    const filteredData = courses.filter((data) => {
      return data.heading.toLowerCase().includes(searchTerm.toLowerCase());
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
      <div className={style.div2}>
        <p>Courses</p>
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
        <p className={style.selected}>All Courses</p>
        <p>NM | P | Theory and Assignments</p>
      </div>
      <div className={style.cardsContainer}>
        {currentPosts &&
          currentPosts.length > 0 &&
          currentPosts.map((item, i) => {
            return <CollectionCard data={item} i={i} key={i} />;
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

export default Collection;
