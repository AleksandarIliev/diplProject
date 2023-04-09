Hi everybody, i'm Aleks I.
This is my dipl. project: 
https://github.com/AleksandarIliev/diplProject
When download, open VSC in folder diplProject-main.

1. Open one terminal and: 
    1.1. Write -> cd client
    1.2. Run npm i 
    1.3. Write -> npm start
3. Open another terminal and 
    3.1. Write -> cd server -> node server.js
4. Code in client folder:
    4.1. In public folder:
        - all photo who use
        - robots.txt is for what crawlers shouldn't have an access
    4.2. In src folder: 
        4.2.1. In folder components have a folders with all component who use in app, separated by a little fragment of code
        4.2.2. In context folder have a AuthContext who use and create:
        - use useNavigate
        - use createContext and useContext from react to create AuthContext
        - create AuthProvider for propagation who is with authentication to see and work with children 
        - return AuthContext.Provider with all func inside
        4.2.3. In hooks folder:
            - in useForm process initialValue and onSubmitHandler with a three function and return result
            - in useLocalStorage process with key and defaultValue and with state an function retrun result 
            - export useService  
        4.2.4. In reducer folder
        4.2.5. Service folder create service for a different logic in the project
            - authService cears for login, register logout logic 
            - commentService cares for the comments
            - in productService create all func who need to work with a product
            - requester 
    4.3. In App.js use:
        - useState and useEffect from react
        - Routes, Route and useNavigate from react-router-dom
        - import object from productServiceFactory
        - import AuthProvider
        - import all components
    4.4. In two css file have a some bug css who respond for a great visualisation of the site :D
    4.5. In index file with help BrowserRouter see where is a location in address bar
5. Code in Server folder
    
That's of me friends.
I hope I will get better with time.
Bye :)