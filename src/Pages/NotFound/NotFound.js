import React from 'react';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl lg:h-[80vh]'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
                        Error 404 Not Found
                    </p>
                    <h1 className='text-2xl font-extrabold text-left text-primary md:text-4xl mb-10'>
                        Oops! Looks Like Something Went Wrong.
                    </h1>
                    <button type="button" class="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go Home <svg className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg></button>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://s.tmimgcdn.com/scr/800x500/122600/error-page-not-found-illustration_122693-original.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;