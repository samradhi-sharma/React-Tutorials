// import React from "react";
// class Student extends React.Component{
//     render(){
//         // when there are many props to use we can actually 
//         // destructure it
//         const{stuname,marks}=this.props;
//         return(
//             <>
//             {/* <h1>hello alexa</h1> */}
//             {/* now i don't want to hard code this alexa name
//             whenever i call thos component in app i want to call it with different name. */}
//             <h1>hello,{stuname}</h1>
//             <p>You have secured{marks}</p>
//             </>
//         )
//     }
// }

/**The above code is for class component now lets see for functional component */

function Student(props){
    const{stuname,marks} =props;
    return(
        <>
        <h1>Hello, {stuname}</h1>
        <p>You have secured {marks}</p>
        </>
    )
}
export default Student;