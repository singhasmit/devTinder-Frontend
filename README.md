-Create a vite+react app
-removed unnecessary code
-install tailwind css
-install daisyUI
-Add NavBar component to App.jsx
-create a NAVBAR seperate component file
-install react router dom
-create browserRouter > routes 
-create an outlet in your body component
-create a footer


-create a login page
-install axios
-CORS ->install cors in backend=>add middleware with configuration: origin, credentials
-when you are makin api calls pass axios{with credentials : true}, so that you get the token
-install redux toolkit , react redux
-configure store => provider =>create slice =>add reducer to store
-add redux devtools extension in chrome
-Navbar should update as soon as use logs in
-add constants file for BASR URL + create components folder
-one should not be able to acces other routes without login
-if token is not present , redirect user to login page 
-logout feature
-get the feed and add the feed in store
-build the user card on feed
-Edit profile feature
-see all my connection
-see all connection requests received
-feature - accept/ reject connection request



# DEPLOYMENT

    -signup on aws
    -Launch instance
    -ssh i
    -Install node version
    -git clone 
    -Frontend
        ->install dependencies (npm i)
        ->run build
        ->sudo apt update
        ->sudo apt install ngnix
        ->sudo systemctl start nginx
        ->sudo systemctl enable nginx
        ->copy code from dist folder to /var/www/html/  
            sudo scp -r dist/* /var/www/html/
        ->enable port 80 of your instance
        