import React from "react";

const Question = () => {
    return (
        <div className="">
            <div >
                <div className="mb-9">
                    <h3 className="text-xl font-bold">1. How does react work</h3>
                    <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documentsReact implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
                </div>
                <div className='mb-9 '>
                    <h3 className="text-xl font-bold">2. State And Props</h3>
                    <p>Props The Data is passed from one component to another. state  component to another.	The Data is passed within the component only props It is Immutable (cannot be modified). state It is Mutable ( can be modified). Props can be used with state and functional components. 	State can be used only with the state components/class component (Before 16.0). Props are read-only.State is both read and write.</p>
                </div>
                <div >
                    <h2 className="text-xl font-bold">3.useEffect </h2>
                    <p>Let us consider another side-effect by setting up a timer. On the
                        we set a timer to log a string “hello” every 5 seconds. We can clear this timer when the component is being removed from the DOM When we specify useEffect we are basically requesting react to execute the function that we pass in the useEffect function as an argument, everytime the component renders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;