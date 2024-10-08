# About the project

A gym website offering detailed information on membership plans, fitness classes, class schedules, and includes a gallery.

Live Demo : [Live Demo](https://gym-fear-zeta.vercel.app/)

# Screenshot of the Project 

<h3 align="center">Home Page</h3>

![Screenshot of Home Page](https://github.com/richardvu93/gym-fear/blob/main/src/images/screenshot-gym.png)


# How It's Made
Built with : 
* React
* CSS
* CRUD

This project was purposely created with React to demonstrate my strong understanding of React and vanilla CSS, and CRUD. I can easily and quickly learn any additional frameworks required.

# Lessons Learned
I've learned countless lessons that I'm proud of. Here's some lessons that I'd like to share: 

* Implemented CRUD operations to create a list for monitoring your own goals.
* Established a database utilizing MongoDB, for storing, maintaining and accessing any sort of data. While my main focus was on front-end development, I also explored back-end technologies to broaden my skill set and enhance my capabilities in front-end work.
* Learned about React Router and Links. Previously, I only created entirely new pages using html. I nested the App component inside BrowserRouter parent. I used Routes and Route to create various pages, including a multiple page gallery (using Outlet component) and 'Not Found' page and more. This lesson was unbelieveable to me. Small lessons like this made me realize my passion for Front-End Development. 
* Created an array of objects which contain images, id's, titles, and times used for creating a fitness class page. Then I used the map function to access each object and its keys and values. Passing down props from Fitness component to FitnessProps component where I destructured the props in the body of the function.
* Attempted to optimize image loading. My goal was to keep high quality images in my gallery and fitness class pages, but the images would cause a 'slow loading' experience. After researching, I decided to use lazy loading to load only visible images first to decrease loading time. Also, I created a low resolution background for each image to give a 'better' loading experience.
