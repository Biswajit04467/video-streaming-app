# Netflix GPT

- craete React App
- Configured TailwindCSS
- Header
- Routing for the APP
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app to production
- Create Sign up User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- Bugfix: Sign up user displayNAme and profile picture
- Bugfix: if login redirect to browse else vice-versa
- Unsubscribed onAuthStateChanged call Back
- added hard coded values to constant file
- Register on TMDB & create and app -> get access token
- get data from tmdb now playing movie list
- custom hook for now playing movies
- Create movieSlice for storing the data
- update store with movies data
- Planning for main container & secondary container
- Fetch data for trailer video
- update store with trailer video data
- Embeded the yt video and make it autoplay and mute
- Tailwind class to give a awesome look for maincontainer

- bulid the secondary component


# Browse -page contents
 - mainContent
   - contain the bg-trailer
     - videoBackground -> (tmdb)->api-reference->movies->videos
 - secondaryContent
   - contain the movie list

# Features
- Login/Sign up
    - Sign In
    - Sign up Form
    - redirect to Browse Page

- Browse( after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - Movie SUggestion
            - Movie List

- NetflixGPT
    - Searcg Bar
    - Movie Suggestions




    for auto play ===> +"?autoplay=1&mute=1" add it with the link