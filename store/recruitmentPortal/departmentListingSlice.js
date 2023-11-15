import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    departments : [
        {
          logo: "/img/RecruitmentPortal/client/circle-logo.png",
          name: "CircleCI",
        },
        {
          logo: "/img/RecruitmentPortal/client/android.png",
          name: "Android",
        },
        {
          logo: "/img/RecruitmentPortal/client/facebook-logo-2019.png",
          name: "Facebook",
        },
        {
          logo: "/img/RecruitmentPortal/client/google-logo.png",
          name: "Google",
        },
        {
          logo: "/img/RecruitmentPortal/client/lenovo-logo.png",
          name: "Lenovo",
        },
        {
          logo: "/img/RecruitmentPortal/client/linkedin.png",
          name: "LinkedIn",
        },
        {
          logo: "/img/RecruitmentPortal/client/shree-logo.png",
          name: "Shreethemes",
        },
        {
          logo: "/img/RecruitmentPortal/client/skype.png",
          name: "Skype",
        },
        {
          logo: "/img/RecruitmentPortal/client/snapchat.png",
          name: "Snapchat",
        },
        {
          logo: "/img/RecruitmentPortal/client/spotify.png",
          name: "Spotify",
        },
        {
          logo: "/img/RecruitmentPortal/client/telegram.png",
          name: "Telegram",
        },
        {
          logo: "/img/RecruitmentPortal/client/whatsapp.png",
          name: "Whatsapp",
        },
      ]
  }


  const departmentListingSlice = createSlice({
    name: 'departmentListing',
    initialState,
    reducers: {

    }
  })

  export default departmentListingSlice.reducer;