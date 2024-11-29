
import Student from "./Student";

function App() {
  return (
    <>
    <Student stuname="Alexa" marks={80}/>
    <Student stuname="Rohan" />

    </>
    
  );
}
Student.defaultProps={
  stuname:"No name",
  marks:"NA "
}

export default App;
