# Netflix : Powered By GenAI Search
    - used create react app as a scaffold for the app
    - configured the Tailwind CSS
    - Header
    - Routing
    - Login Form
    - Deploying app to Netlify using github action
    - Sign up Form
    - Form Validation
    - UseRef Hook
    - Firebase setup
    - Deploying app to firebase as well
    - Create sign up user in firebase
    - Created ReduxStore for the app with userSlice
    - Implemented Signin user API
    - Implemented Sign out
    - Unsubscribed to the onAuthStateChanged call
    - Update Profile
    - BugFix : If it is not signed in then redirect to login page and vice versa
    - Added Hard coded values to the constants file
    - Register TMDB API & create an app & get access to the access token and key
    - Get data from tmdb now playing movie list API call
    

[![Netlify Status](https://api.netlify.com/api/v1/badges/cdd4f9dd-4718-4403-8466-4e4d28ea2fc8/deploy-status)](https://app.netlify.com/sites/zeeflix-ai/deploys)

# Features : 
    - Login/Signup
        - Signin/Signup form
        - Redirect to Browse page
    - Browse (After Authentication)
        - Header
        - Main Movie
            - Trailer in Background
            - Title and Description
            - Movie Suggestions
                - MovieList * N
    - Netflix GPT
        - Search Bar
        - Movie Suggestions
