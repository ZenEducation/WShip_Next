import React, { useRef, useState } from "react";
import axios from "axios";

import * as Chime from "amazon-chime-sdk-js";

function Meeting() {
  const [meetingResponse, setMeetingResponse] = useState();
  const [peopleVideo, setPeopleVideo] = useState();
  const [callCreated, setCallCreated] = useState(false);
  const [meetingInput, setMeetingInput] = useState();
  const [counter, setCounter] = useState(0);
  // const videoElement = useRef();
  let arr = [];
  const startCall = async () => {
    console.log("calling");
    const response = await axios.get("http://localhost:5002/meeting");
    console.log(response.data);
    setMeetingResponse(response.data);
    setCallCreated(true);
  };

  const joinVideoCall = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:5002/addattendee",
      params: { id: meetingInput },
    };

    axios
      .request(options)
      .then(async function (response) {
        console.log(response.data);
        arr.push(response.data);
        let attendeeResponse = response.data;
        setPeopleVideo(arr);
        console.log("==============", peopleVideo);
        const logger = new Chime.ConsoleLogger(
          "ChimeMeetingLogs",
          Chime.LogLevel.INFO
        );
        console.log(meetingResponse);
        const deviceController = new Chime.DefaultDeviceController(logger);
        const configuration = new Chime.MeetingSessionConfiguration(
          meetingResponse,
          attendeeResponse
        );
        const meetingSession = new Chime.DefaultMeetingSession(
          configuration,
          logger,
          deviceController
        );

        const audioInputDevice = (
          await meetingSession.audioVideo.listAudioInputDevices()
        )[0].deviceId;
        const audioOutputDevice = (
          await meetingSession.audioVideo.listAudioOutputDevices()
        )[0].deviceId;
        const videoInputDevice = (
          await meetingSession.audioVideo.listVideoInputDevices()
        )[0].deviceId;
        await meetingSession.audioVideo.startAudioInput(audioInputDevice);
        await meetingSession.audioVideo.chooseAudioOutput(audioOutputDevice);

        await meetingSession.audioVideo.startVideoInput(videoInputDevice);
        // console.log("$%^$^%#^$%^#%$%^#$%^",attendeeResponse.Attendee.AttendeeId)
        // let videoGrid = document.getElementById("parentVidAud");
        // videoGrid.innerHTML += `<video id='${attendeeResponse.Attendee.AttendeeId}-v'></video>
        // <audio id='${attendeeResponse.Attendee.AttendeeId}-a'></audio>`;
        let videoElement, audioElement;
        //   videoElement = document.getElementById(`${attendeeResponse.Attendee.AttendeeId}-v`);
        //   audioElement = document.getElementById(`${attendeeResponse.Attendee.AttendeeId}-a`);
         
        if(counter==0){

           videoElement = document.getElementById(`one-v`);
           audioElement = document.getElementById(`one-a`);
        }else{
           videoElement = document.getElementById(`two-v`);
           audioElement = document.getElementById(`two-a`);
        }
        setCounter(1)
        meetingSession.audioVideo.bindAudioElement(audioElement);
        const observer = {
          audioVideoDidStart: () => {
            meetingSession.audioVideo.startLocalVideoTile();
          },
          videoTileDidUpdate: (tileState) => {
            meetingSession.audioVideo.bindVideoElement(
              tileState.tileId,
              videoElement
            );
          },
        };
        meetingSession.audioVideo.addObserver(observer);

        meetingSession.audioVideo.start();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="videoParent">

         <video id="one-v"></video>
         <audio id="one-a"></audio>
         <video id="two-v"></video>
         <audio id="two-a"></audio>
        </div>
        <button onClick={startCall}>Start call</button>
         {meetingResponse&&(<p className="mId">{meetingResponse.Meeting.MeetingId}</p>)}
        <input
        className="meetingId"
          type="text"
          onChange={(e) => setMeetingInput(e.target.value)}
        ></input>
        <button disabled={!callCreated} onClick={joinVideoCall}> Join call</button>
      </header>
    </div>
  );
}

export default Meeting;
