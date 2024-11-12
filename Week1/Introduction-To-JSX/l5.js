function Tab(){
    let students =[{name:"samdam", age:2}, {name:"damdam", age:3}];
    return(
        <>
        <h1>Students detail</h1>
        <table>
            <tr>
            <th>name</th>
            <th>age</th>
            </tr>
            {students.map((student) => (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
            ))}
        </table>
        </>
    )
}

const rootElement =  ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Tab/>);