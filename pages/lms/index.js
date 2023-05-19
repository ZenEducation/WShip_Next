import React from 'react';

import { BsCameraVideo, BsFileEarmarkText } from 'react-icons/bs';

import { AiOutlineFilePdf } from 'react-icons/ai';

import { RxSpeakerQuiet } from 'react-icons/rx';

import { MdOutlineCloudDownload } from 'react-icons/md';

import { HiOutlinePresentationChartLine } from 'react-icons/hi';

import { TbBuildingBroadcastTower } from 'react-icons/tb';

import { TfiLayoutMediaOverlay } from 'react-icons/tfi';

import { FcSurvey } from 'react-icons/fc';

import { MdOutlineAssignment } from 'react-icons/md';

import { ImNewspaper } from 'react-icons/im';

import styles from './index.module.css'; // Import the CSS module

const Lms = () => {
  return (
    <div className={styles['bg-container']}>
      <div className={styles['card-container']}>
        <div className={styles['container-lessons-close']}>
          <h1 className={styles['lessons-element']}>Lessons</h1>
          <div className={styles['close-container']}>
            <h1 className={styles['close-element']}>CLOSE</h1>
          </div>
        </div>

        <p className={styles['content-element']}>Deliver learning content</p>
        <div className={styles['container-each-lessons']}>
          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <BsCameraVideo className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Video</h1>
              <p className={styles['description-element']}>
                Easily upload and display your video content in Thinkific
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <AiOutlineFilePdf className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>PDF</h1>
              <p className={styles['description-element']}>
                Easily upload PDF content for your students to view directly
                within the Course Player
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <BsFileEarmarkText className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Text</h1>
              <p className={styles['description-element']}>
                Include bodies of text,styled HTML content, and also images or
                external links
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <RxSpeakerQuiet className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Audio</h1>
              <p className={styles['description-element']}>
                Perfect for learning on the go, audio content is great if you
                know your students are mobile
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <MdOutlineCloudDownload className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Download</h1>
              <p className={styles['description-element']}>
                Distribute files to your students
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <HiOutlinePresentationChartLine
                className={styles['border-Deliver']}
              />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Presentation</h1>
              <p className={styles['description-element']}>
                Display slides with audio that your students can navigate
                through
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <TfiLayoutMediaOverlay className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Multimedia</h1>
              <p className={styles['description-element']}>
                Include a great resource into your course that is hosted outside
                od Thinkific
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <TbBuildingBroadcastTower className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Live</h1>
              <p className={styles['description-element']}>
                Enable Live Lessons using Zoom's video meeting and/o webinar
                tools
              </p>
            </div>
          </div>
        </div>
        <h1 className={styles['students-element']}>Assess your students</h1>

        <div className={styles['container-each-lessons']}>
          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <BsCameraVideo className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Quiz</h1>
              <p className={styles['description-element']}>
                Allow students to interact with material that was taught or
                presented
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <FcSurvey className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Survey</h1>
              <p className={styles['description-element']}>
                Incorporate some avenues for feedback between you and your
                students
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <MdOutlineAssignment className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Assignment</h1>
              <p className={styles['description-element']}>
                Great for any type of homework that you would like a student to
                sumbit for approval
              </p>
            </div>
          </div>

          <div className={styles['each-content-container']}>
            <div className={styles['Deliver-Each-container']}>
              <ImNewspaper className={styles['border-Deliver']} />
            </div>
            <div className={styles['container-element']}>
              <h1 className={styles['heading-element']}>Exam</h1>
              <p className={styles['description-element']}>
                Integrate with a professional exam tool called Brillium to
                deliver tests with these requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lms;
