import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <section class="container blog">
            <div class='blog-posts-wrap'>
                <div class='post-link'>
                    <div class='post-wrap'>
                        <div class='post-image'>
                        </div>

                        <div class='post-body'>
                            <div class='post-body-primary'>
                                <div class='post-meta'>
                                    <p>by <b>Jannatul Ferdousi</b> on May 25, 2022</p>
                                </div>

                                <div class='post-title'>
                                    <h2>How will you improve the performance of a React Application?</h2>
                                </div>

                                <div class='post-text'>
                                    <p>1.	Remove All Inline Functions and Inline Style Css: Avoid inline functions as much as possible. If your application is small, it will not affect you much but once you develop more and more features, this will bite you for sure
                                        2.	Avoid extra tags by using React Fragments and avoid modifying the state if there is no change in state from your Redux store
                                        3.	Conditional rendering of the components: Remember that Immutability is the key to avoid unnecessary re-renders. Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application's overall performance.
                                        4.	Remove unnecessary awaits and use Promise.all() wherever applicable: Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application's overall performance.
                                        5.	Always render hidden components like Modals and Dropdowns conditionally. These components are not visible until triggered, but are affecting your application's overall performance.
                                    </p>
                                </div>
                            </div>

                            <div class='post-body-secondary'>
                                <div class='post-category'>
                                    <p>React, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='post-link'>
                    <div class='post-wrap'>
                        <div class='post-image'>
                        </div>

                        <div class='post-body'>
                            <div class='post-body-primary'>
                                <div class='post-meta'>
                                    <p>by <b>Jannatul Ferdousi</b> on May 25, 2022</p>
                                </div>

                                <div class='post-title'>
                                    <h2>What are the different ways to manage a state in a React application?</h2>
                                </div>

                                <div class='post-text'>
                                    <p>There are four main different types of state to manage React application:
                                        1.	Local state
                                        The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:
                                        •	Hooks
                                        •	React Context API
                                        •	Apollo Link State
                                        2.	Global state
                                        Libraries like Redux, MobX and even Context API provided by React are based in the Global State pattern, which means that to avoid prop drilling and sharing data between the components in different hierarchy levels, and have one single point to read and write from the components, the entire application exposes a global variable called global state.
                                        GlobalState component has two Context objects:
                                        GlobalStateContext: where you can store your global state.
                                        GlobalDispatchContext: where you store your dispatch function, which is used to modify your global state through a reducer.
                                        3.	Server state
                                        Server state has two sources of truth, the backend, and the frontend. This causes the server state to synchronize all the time to prevent that its information is not out of date. React Query is a library that with 2 hooks and 1 utility provides an easy and scalable way to fetching, caching, and updating asynchronous data in React.
                                        4.	URL state
                                        Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                                        If you are using React Router, you can get all the information you need using useHistory or useLocation.
                                    </p>
                                </div>
                            </div>

                            <div class='post-body-secondary'>
                                <div class='post-category'>
                                    <p>React, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='post-link'>
                    <div class='post-wrap'>
                        <div class='post-image'>
                        </div>

                        <div class='post-body'>
                            <div class='post-body-primary'>
                                <div class='post-meta'>
                                    <p>by <b>Jannatul Ferdousi</b> on May 25, 2022</p>
                                </div>

                                <div class='post-title'>
                                    <h2>How does prototypical inheritance work?</h2>
                                </div>

                                <div class='post-text'>
                                    <p>When we ask for a property or method from an object, JavaScript tries to read the property from the object itself. If the object lacks the property, then JavaScript looks for the property in the prototype object. And if that prototype object also does not contain the property, then JavaScript looks in its prototype. This process continues until it reaches the Object.prototype. The prototype of Object.prototype is NULL. Hence the search stops there and returns the undefined value.

                                        When we call student.specialSession(), The javascript searches for specialSession() method in the student object. It does not find it there. So it looks for it in the __proto__ of student. The __proto__ of student points to Person.prototype. It finds the method there, hence executes it, and returns the result.
                                    </p>
                                </div>
                            </div>

                            <div class='post-body-secondary'>
                                <div class='post-category'>
                                    <p>React, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='post-link'>
                    <div class='post-wrap'>
                        <div class='post-image'>
                        </div>

                        <div class='post-body'>
                            <div class='post-body-primary'>
                                <div class='post-meta'>
                                    <p>by <b>Jannatul Ferdousi</b> on May 25, 2022</p>
                                </div>

                                <div class='post-title'>
                                    <h2>Why you do not set the state directly in React. For example, if you have const
                                        [products, setProducts] = useState([]). Why you do not set products = [...] instead,
                                        you use the setProducts</h2>
                                </div>

                                <div class='post-text'>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolore
                                        reprehenderit beatae porro enim excepturi consequuntur doloremque error recusandae
                                        id! Ratione dolores magnam repellendus commodi tenetur, repellat accusantium non
                                        tempore.</p>
                                </div>
                            </div>

                            <div class='post-body-secondary'>
                                <div class='post-category'>
                                    <p>React, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='post-link'>
                    <div class='post-wrap'>
                        <div class='post-image'>
                        </div>

                        <div class='post-body'>
                            <div class='post-body-primary'>
                                <div class='post-meta'>
                                    <p>by <b>Jannatul Ferdousi</b> on May 25, 2022</p>
                                </div>

                                <div class='post-title'>
                                    <h2>You have an array of products. Each product has a name, price, description, etc. How
                                        will you implement a search to find products by name?</h2>
                                </div>

                                <div class='post-text'>
                                    <p>Unit Test Unit Tests typically test functions, methods, and classes. Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests.
                                        We should write unit tests because, It removes Poor code quality, Increased cost , Meaningless work. Also deals with Bad Product-Market Fit, Demotivated Team ,Unsuccessful Product ,Unhappy Clients.
                                    </p>
                                </div>
                            </div>

                            <div class='post-body-secondary'>
                                <div class='post-category'>
                                    <p>React, MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Blogs;