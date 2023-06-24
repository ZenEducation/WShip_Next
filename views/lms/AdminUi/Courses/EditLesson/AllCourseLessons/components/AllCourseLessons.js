import React, { useContext, useState } from 'react';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import Quiz from '../../Quiz/index';

import Survey from '../../Survey/index';
import { Button, Card, Dropdown, Select } from 'components/ui';
import { IoChevronBackOutline } from 'react-icons/io5';
import { MdExpandMore } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { GrDownload, GrExpand } from 'react-icons/gr';
import { CgArrowsExpandRight } from 'react-icons/cg';
import FileItem from 'components/ui/Upload/FileItem';

import CourseFileItem from 'components/ui/Upload/CourseFileItem';

import { AiOutlinePlus } from 'react-icons/ai';

// AllCourseLessons

const AllCourseLessons = () => {
  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);

  const optionsGroup = curriculumAndCards.map((eachChapter) => {
    const lessonsOptions = eachChapter.lessons.map((eachLesson) => {
      return {
        value: eachLesson.id,
        label: eachLesson.lessonHeading,
      };
    });
    return {
      label: eachChapter.name,
      options: lessonsOptions,
    };
  });

  const { selectedLesson, setSelectedLesson } = useContext(CardsContext);

  const { allCourseLessonsTab, setAllCourseLessonsTab } =
    useContext(CardsContext);

  // console.log('curriculumAndCards', curriculumAndCards);

  const [completed, setCompleted] = useState([]);

  const [completedLesson, setCompletedLesson] = useState([]);

  let lessonsArray = curriculumAndCards.flatMap((item) => item.lessons);

  let firstFile = null;

  if (lessonsArray.length !== 0) {
    firstFile = lessonsArray[0];
  }

  const [selectedFile, setSelectedFile] = useState(firstFile);

  // console.log('selectedLesson', selectedLesson);

  const lesson = {
    title: 'Lesson Title',
    pdfUrl: 'path/to/lesson.pdf',
  };

  const dropdownItems = [
    { key: 'a', name: 'pdf A' },
    { key: 'b', name: 'pdf B' },
  ];

  const [totalLessons, setTotalLessons] = useState(0);

  const [progress, setProgress] = useState(0);

  const { accorSelected, setAccorSelected } = useContext(CardsContext);
  const accorToggle = (i) => {
    if (accorSelected === i) {
      return setAccorSelected(null);
    }
    setAccorSelected(i);
  };

  const onFilesUploaded = (e) => {
    const { files: newFiles } = e.target;
  };

  const [listedFile, setListedFile] = useState([
    {
      lastModified: 1656148718000,
      lastModifiedDate:
        'Sat Jun 25 2022 14:48:38 GMT+0530 (India Standard Time)',
      name: '(Ajith Teja Gorla)Sample 5_CCBP Tech 4.0 Intensive.pdf',
      size: 393214,
      type: 'application/pdf',
      webkitRelativePath: '',
    },

    {
      lastModified: 1621220767000,
      lastModifiedDate:
        'Mon May 17 2021 08:36:07 GMT+0530 (India Standard Time)',
      name: 'It_is_realme.mp3',
      size: 2029184,
      type: 'audio/mpeg',
      webkitRelativePath: '',
    },

    {
      lastModified: 1685120312150,
      lastModifiedDate:
        'Fri May 26 2023 22:28:32 GMT+0530 (India Standard Time)',
      name: 'audiolesson.js - WShip_Next - Visual Studio Code 2023-05-26 22-27-27.mp4',
      size: 65322606,
      type: 'video/mp4',
      webkitRelativePath: '',
    },
  ]);

  // const [completed, setCompleted] = useState([]);

  const handleCompleteLesson = () => {
    // console.log((progress / totalLessons) * 100);
    if ((progress / totalLessons) * 100 < 100) {
      setProgress(progress + 1);
      setCompleted([...completed, selectedFile]);
    }
  };

  const colourOptions = listedFile.map((eachFile) => ({
    value: 'eachFile.name',
    label: eachFile.name,
  }));

  const { sideBar, setSideBar } = useContext(CardsContext);

  const handleFileChange = (event) => {
    lessonsArray;
    setListedFile([...listedFile, event.target.files[0]]);

    setTotalLessons(listedFile.length + 1);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform upload logic here
    }
  };

  const onSideBarClose = () => {
    // setSideBar(!sideBar);

    setTimeout(() => {
      setSideBar(!sideBar);
    }, 100);
  };

  const onLessonSelecter = (eachFile) => {
    setSelectedFile(eachFile);
  };

  const displayAddedLessons = (eachLesson, chapterOpen) => {
    // onClick={(event) => {
    //   event.stopPropagation(); // Prevent event propagation
    //   console.log('Lesson Clicked');
    //   setLessonsOptionTab('ShowLessonPage');
    // }}
    // const isFileCompleted = true;
    return (
      <div className="  ">
        {eachLesson.map((lesson, index) => {
          // setSelectedFile
          const file = {
            ...lesson,
            name: lesson.lessonHeading,
          };
          const isFileCompleted = completedLesson.some(
            (item) => item.id === lesson.id
          );

          return (
            <div key={lesson.id}>
              {/* <hr className="card-border" /> */}
              <div
                className={`cursor-pointer   ${
                  chapterOpen ? 'accor-content show' : 'accor-content'
                } `}
                key={lesson.id}
                onClick={(event) => {
                  event.stopPropagation(); // Prevent event propagation
                  // console.log('Lesson Clicked', lesson);
                  setSelectedFile(lesson);
                }}>
                <div className="flex items-center mt- p- bg-gray-300 dark:bg-slate-800">
                  <div
                    // key={lesson.id}
                    className={`ml-5 progress-step progress-sub-step ${
                      isFileCompleted ? 'completed' : ''
                    }`}>
                    {isFileCompleted && (
                      <TiTick className="text-white text-xs" />
                    )}
                  </div>

                  <div>
                    <CourseFileItem
                      file={file}
                      onlyName={true}
                      key={lesson.lessonHeading + index}></CourseFileItem>
                  </div>
                </div>
                <hr className="card-border" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const cardsDisplaySideBar = (eachCard) => {
    const isFileCompleted = false;

    // const array1 = eachCard.lessons;
    const areAllObjectsPresent = (array1, completedLesson) => {
      return array1.every((obj1) =>
        completedLesson.some((obj2) => obj2.id === obj1.id)
      );
    };

    const countMatchingObjects = (array1, completedLesson) => {
      let count = 0;
      array1.forEach((obj1) => {
        if (completedLesson.some((obj2) => obj2.id === obj1.id)) {
          count++;
        }
      });
      return count;
    };

    const isObject2Present = (chapter, selecterLesson) => {
      return chapter.lessons.some((lesson) => lesson.id === selecterLesson.id);
    };

    const openSelectedFile = isObject2Present(eachCard, selectedFile);

    if (openSelectedFile) {
    }

    const chapterCompleted = areAllObjectsPresent(
      eachCard.lessons,
      completedLesson
    );

    const count = countMatchingObjects(eachCard.lessons, completedLesson);

    return (
      <div
        // onClick={() => {
        //   onSelectCurr(eachCard);
        // }}
        key={eachCard.id}
        className="mb-2 cursor-pointer ">
        {/* <h5 className="mb-2">{eachCard.name}</h5> */}

        <div
          onClick={() => accorToggle(eachCard.id)}
          className="cursor-pointer flex mb-3">
          <div
            key={eachCard.id}
            className={`flex items-center justify-center progress-step ${
              chapterCompleted ? 'completed' : ''
            }`}>
            {chapterCompleted && <TiTick className="text-white text-xl" />}
          </div>
          <div className="flex justify-between orderFlex items-center">
            <h6>{eachCard.name}</h6>
            <div className="flex items-center">
              <p>{`${count}/${eachCard.lessons.length}`}</p>
              <MdExpandMore className="text-xl" />
            </div>
          </div>
        </div>
        <hr className="" />

        {displayAddedLessons(eachCard.lessons, accorSelected === eachCard.id)}
      </div>
    );
  };

  const BulkImpSideBar = (eachCard) => {
    const isFileCompleted = true;

    const areAllObjectsPresent = (array1, completedLesson) => {
      return array1.every((obj1) =>
        completedLesson.some((obj2) => obj2.id === obj1.id)
      );
    };

    const chapterCompleted = areAllObjectsPresent(
      eachCard.lessons,
      completedLesson
    );

    const countMatchingObjects = (array1, completedLesson) => {
      let count = 0;
      array1.forEach((obj1) => {
        if (completedLesson.some((obj2) => obj2.id === obj1.id)) {
          count++;
        }
      });
      return count;
    };

    const count = countMatchingObjects(eachCard.lessons, completedLesson);

    return (
      <div
        // onClick={() => {
        //   onSelectCurr(eachCard);
        // }}
        key={eachCard.id}
        className="mb-2 cursor-pointer ">
        {/* <h5 className="mb-2">{eachCard.name}</h5> */}

        <div
          onClick={() => accorToggle(eachCard.id)}
          className="cursor-pointer flex mb-3">
          <div
            key={eachCard.id}
            className={`flex items-center justify-center progress-step ${
              chapterCompleted ? 'completed' : ''
            }`}>
            {chapterCompleted && <TiTick className="text-white text-xl" />}
          </div>
          <div className="flex justify-between orderFlex items-center">
            <h6>{eachCard.name}</h6>
            <div className="flex items-center">
              <p>{`${count}/${eachCard.lessons.length}`}</p>
              <MdExpandMore className="text-xl" />
            </div>
          </div>
        </div>

        <hr />
        {displayAddedLessons(eachCard.lessons, accorSelected === eachCard.id)}
      </div>

      // <Card
      //   onClick={() => {
      //     console.log('Bulk importer Clicked');
      //     setTabMenu('BulkImporter');
      //     setLessonsOptionTab('BulkImporter');
      //   }}
      //   key={cardsList.id}
      //   className="mb-2 "
      //   // style={{ minWidth: 335, maxWidth: 335 }}
      // >
      //   <h5 className="mb-2">{cardsList.heading}</h5>
      //   {/* {displayEachUpload(cardsList.uploads)} */}
      //   {displayAddedLessons(cardsList.lessons, cardsList.type)}

      // </Card>
    );
  };

  const curruculamSideBarcards = () => {
    return curriculumAndCards.map((eachCard) => {
      if (eachCard.type === 'curriculum') {
        return cardsDisplaySideBar(eachCard);
      }
      return BulkImpSideBar(eachCard);
    });
  };

  const handleCompleteLessonInsert = (lesson) => {
    const isObjectPresent = completedLesson.some(
      (item) => item.id === lesson.id
    );

    if (!isObjectPresent) {
      setCompletedLesson([...completedLesson, lesson]);

      console.log('Object added to the array.');
    } else {
      console.log('Object already exists in the array.');
    }

    const selectedIndex = lessonsArray.indexOf(lesson);
    const nextIndex =
      selectedIndex === lessonsArray.length - 1 ? 0 : selectedIndex + 1;
    setSelectedFile(lessonsArray[nextIndex]);

    const selectedChapter = curriculumAndCards.find((card) =>
      card.lessons.some(
        (eachLesson) => eachLesson.id === lessonsArray[nextIndex].id
      )
    );
    accorSelected !== selectedChapter.id && accorToggle(selectedChapter.id);
  };

  const handleCompleteLessonRemove = (lesson) => {
    const uodatedCompletedLesson = completedLesson.filter(
      (eachLesson) => eachLesson.id !== lesson.id
    );

    setCompletedLesson(uodatedCompletedLesson);
  };

  const DisplaySelectedMainLesson = () => {
    const isLessonCompleted = completedLesson.some(
      (item) => item.id === selectedFile.id
    );

    switch (selectedFile.type) {
      case 'Video':
        return (
          <>
            <div style={{ minWidth: '100%', height: '90%' }} className="">
              {selectedFile.uploadedVideo.length !== 0 && (
                <>
                  <video
                    controls
                    src={URL.createObjectURL(selectedFile.uploadedVideo['0'])}
                    style={{
                      minWidth: '100%',
                      height: '90%',
                      maxHeight: '100%',
                    }}></video>
                  {/* <embed
                    src={URL.createObjectURL(selectedFile.uploadedVideo['0'])}
                    style={{
                      minWidth: '100%',
                      height: '90%',
                      maxHeight: '100%',
                    }}
                  /> */}
                </>
              )}
              <div className="bg-white flex items-center fixed-card justify-center">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  // lessonsArray
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );

      case 'Audio':
        return (
          <>
            <div style={{ minWidth: '100%', height: '98%' }} className=" ">
              <div
                style={{
                  minWidth: '70%',
                  height: '85%',
                  maxHeight: '100%',
                }}
                className="flex flex-col items-center p-5">
                {selectedFile.uploadedAudio.length !== 0 && (
                  <audio
                    className="mt-5"
                    controls
                    src={URL.createObjectURL(selectedFile.uploadedAudio['0'])}
                    style={{
                      minWidth: '70%',
                      // height: '90%',
                      // maxHeight: '100%',
                    }}></audio>
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedFile.description,
                  }}
                />
                {/* <p>{selectedFile.description}</p> */}
              </div>
              <div className="bg-white flex items-center fixed-card justify-center">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );

      case 'PDF':
        return (
          <>
            <div style={{ minWidth: '100%', height: '90%' }} className="">
              {selectedFile.uploadedPdf.length !== 0 && (
                <iframe
                  src={URL.createObjectURL(selectedFile.uploadedPdf['0'])}
                  style={{
                    minWidth: '100%',
                    height: '90%',
                    maxHeight: '100%',
                  }}></iframe>
              )}
              <div className="bg-white flex items-center fixed-card justify-center">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );
      case 'Presentation':
        return (
          <>
            <div style={{ minWidth: '100%', height: '90%' }} className="">
              {selectedFile.uploadedPpt.length !== 0 && (
                <embed
                  src={URL.createObjectURL(selectedFile.uploadedPpt['0'])}
                  style={{ minWidth: '100%', height: '90%', maxHeight: '100%' }}
                />
              )}
              <div className="bg-white flex items-center fixed-card justify-center">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );

      case 'Text':
        return (
          <>
            <div style={{ minWidth: '100%', height: '90%' }} className="">
              <div
                style={{
                  minWidth: '70%',
                  height: '100%',
                  // maxHeight: '100%',
                }}
                className=" p-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedFile.description,
                  }}
                />
              </div>
              <div className="bg-white flex items-center fixed-card justify-center">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );

      case 'Download':
        const handleDownload = (file) => {
          window.open(URL.createObjectURL(file));
        };
        return (
          <>
            <div style={{ minWidth: '100%', height: '98%' }} className=" ">
              <div
                style={{
                  minWidth: '70%',
                  height: '85%',
                  maxHeight: '100%',
                }}
                className="flex flex-col items-center p-5">
                <div
                  className="self-start"
                  dangerouslySetInnerHTML={{
                    __html: selectedFile.description,
                  }}
                />
                {selectedFile.uploadedDownloadable.length !== 0 && (
                  <div>
                    {selectedFile.uploadedDownloadable.map((eachUpload) => (
                      <div className="flex justify-between items-center bg-zinc-300 dark:bg-zinc-700  p-4 mt-2 mb-1 border rounded-md ">
                        <div>
                          <b className="text-black dark:text-white">
                            {eachUpload.name}{' '}
                          </b>
                          <p>{Math.round(eachUpload.size / 1000)} kb</p>
                        </div>
                        <button
                          onClick={() => handleDownload(eachUpload)} // Pass eachUpload object to the handler
                          className="bg-zinc-700 dark:bg-zinc-900 text-white rounded-md p-2 pl-5 pr-5">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* <p>{selectedFile.description}</p> */}
              </div>
              <div className="shadow bg-white dark:bg-gray-900 flex items-center fixed-card justify-center mt-5">
                {isLessonCompleted && (
                  <button
                    className=" text-center   p-2 pl-5 pr-5 rounded-lg mt-1 mb-1 border shadow mr-3"
                    onClick={() => handleCompleteLessonRemove(selectedFile)}>
                    Mark as Incomplete
                  </button>
                )}
                <button
                  className="text-center text-white bg-blue-900 p-2 pl-5 pr-5 rounded-lg mt-1 mb-1"
                  onClick={() => handleCompleteLessonInsert(selectedFile)}>
                  Complete and Continue
                </button>
              </div>
            </div>
          </>
        );

      // default:
      //   break;
    }
    return (
      <>
        <div style={{ minWidth: '100%', height: '90%' }} className="">
          <div className="p-2">
            <h5>SELECTED FILE:</h5>
          </div>

          <embed
            // src={URL.createObjectURL(selectedFile)}
            style={{ minWidth: '100%', height: '80%', maxHeight: '100%' }}
          />
          <div className="bg-white flex items-center fixed-card justify-center">
            <button
              className="text-center text-white bg-blue-900 p-3 pl-5 pr-5 rounded-lg mt-1 mb-1"
              onClick={() => handleCompleteLessonInsert(selectedFile)}>
              Complete and Continue
            </button>
          </div>
        </div>
      </>
    );
  };

  const formatGroupLabel = (data) => (
    <div className="font-bold text-xs uppercase/  p-1 text-gray-800 dark:text-white my-2">
      {data.label}
    </div>
  );

  const handleChange = (newValue, actionMeta) => {
    setSelectedFile;

    lessonsArray.forEach((object) => {
      if (object.id === newValue.value) {
        setSelectedFile(object);

        const selectedChapter = curriculumAndCards.find((card) =>
          card.lessons.some((eachLesson) => eachLesson.id === object.id)
        );
        accorSelected !== selectedChapter.id && accorToggle(selectedChapter.id);

        // // accorSelected !== object.id &&
        // accorToggle(object.id);
      }
    });

    console.groupEnd();
  };

  return (
    <div className="flex w-full" style={{ minHeight: '89vh' }}>
      {sideBar && (
        <div
          style={{ minWidth: 350, maxWidth: 335 }}
          className="sidebar  border p-4">
          <div className="border rounded-md shadow mb-4">
            <div className="bg-blue-900 p-4 rounded-br-none rounded-bl-none rounded-md">
              <h6 className="text-white text-center ">Ajith teja's Site</h6>
            </div>
            <div className="p-4">
              <button
                onClick={() => setAllCourseLessonsTab('')}
                className="flex items-center mb-1">
                {' '}
                <IoChevronBackOutline />
                Go to Dashboard
              </button>
              <h3 className="mt-3 mb-5">Your First Course</h3>
              <div className="progress-bar">
                <div
                  className="progress-line rounded-md bg-blue-900"
                  style={{
                    width: `${
                      (completedLesson.length / lessonsArray.length) * 100
                    }%`,
                    maxWidth: '100%',
                  }}></div>
                {/* <div className="progress-steps">
                {[...Array(totalLessons)].map((_, index) => (
                  <div
                    key={index}
                    className={`progress-step ${
                      index < progress ? 'completed' : ''
                    }`}></div>
                ))}
              </div> */}
              </div>
              <div className="flex mt-3">
                <h6 className="mr-1">
                  {(completedLesson.length / lessonsArray.length) * 100}%
                </h6>
                <p>complete</p>
              </div>
            </div>
          </div>
          <Select
            placeholder="Search lesson title"
            // defaultValue={optionsGroup[0].options[0]}
            options={optionsGroup}
            onChange={handleChange}
            formatGroupLabel={formatGroupLabel}
          />

          <div className="mt-5 mb-5">{curruculamSideBarcards()}</div>

          {/* <div className=" mt-5">
            {listedFile.map((eachFile, index) => (
              <div key={index}>
                <div
                  onClick={() => accorToggle(index)}
                  className="cursor-pointer flex mb-3">
                  <div
                    key={index}
                    className={`flex items-center justify-center progress-step ${
                      index < progress ? 'completed' : ''
                    }`}>
                    {index < progress ? (
                      <TiTick className="text-white text-xl" />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="flex justify-between orderFlex items-center">
                    <h6>Untitled Chapter</h6>
                    <div className="flex items-center">
                      <p>{index < progress ? '1/1' : '0/1'}</p>
                      <MdExpandMore className="text-xl" />
                    </div>
                  </div>
                </div>
                <hr className="card-border" />
                <div
                  className={
                    accorSelected === index
                      ? 'accor-content show'
                      : 'accor-content'
                  }>
                  <div className="flex mt-2 p-3 bg-gray-300">
                    <div
                      key={index}
                      className={`progress-step progress-sub-step ${
                        index < progress ? 'completed' : ''
                      }`}>
                      {index < progress ? (
                        <TiTick className="text-white text-xs" />
                      ) : (
                        ''
                      )}
                    </div>
                    <button
                      onClick={() => {
                        onLessonSelecter(eachFile);
                      }}
                      className=" text-black mb-2">
                      {eachFile.name}
                    </button>
                  </div>
                </div>
                <hr className="mb-4 card-border " />
              </div>
            ))}
          
          </div> */}

          {/* <button onClick={handleCompleteLesson}>Complete and Continue</button> */}

          {/* sidebar */}
        </div>
      )}

      {selectedFile && (
        <div className=" orderFlex">
          <div className="shadow flex items-center justify-between p-3">
            <h6>{selectedFile.lessonHeading}</h6>
            <div className="flex items-center">
              <GrDownload className=" cursor-pointer mr-5 text-lg text-gray-400  dark:car" />
              <GrExpand
                onClick={onSideBarClose}
                className="cursor-pointer mr-2  text-lg"
              />
            </div>
          </div>
          <hr className="border" />

          {selectedFile && DisplaySelectedMainLesson()}
        </div>
      )}
    </div>
  );
};

export default AllCourseLessons;
