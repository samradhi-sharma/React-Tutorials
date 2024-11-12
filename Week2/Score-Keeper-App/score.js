let score = 0;
let wicket =0;
let ballWiseRes = [];
let hit =0;
let inputRef = React.createRef();
function addOne() {
  score += 1;
  rootElement.render(<App />); // Re-render the component
}

function addScore(num) {
  hit = num;
  rootElement.render(<App />); // Re-render the component
}

function addWicket() {
    hit ="W";
    rootElement.render(<App />); // Re-render the component
  }


// Fixed ScoreButtons component with return statement
const ScoreButtons = () => {
  return (
    <div>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={addOne}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={addWicket}>Wicket</button>
    </div>
  );
};

const Result=() => {
    return(
    <div>
        {ballWiseRes.map((res, index) => (
            <>
            {index %6 === 0 ? <br/> : null}
             <span key={index} >{res === 0 ? <strong >.</strong> : res}</span>&nbsp;&nbsp;&nbsp; </>))}
    </div>
    );
}


function handleSubmit(event){
    event.preventDefault();
    // due to this on refreshing also the content won't go
    // difference between push and unshift
    if(hit == 'W'){
        wicket += 1;
    }

    else{
        score += hit;
    }
    ballWiseRes.unshift(
        <span>{hit}{ " "}{inputRef.current.value}</span>
    );
    console.log(inputRef.current.value)
    console.log(ballWiseRes)
    rootElement.render(<App/>);
}
const Form = () => (
    <form onSubmit ={handleSubmit}>
        <input value= {hit}/>
        <input ref={inputRef} placeholder="Add a comment"/>
        <button>Submit</button>
    </form>

)
// Main App component
const App = () => {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>
        SCORE: {score}/{wicket}
      </h2>
      <ScoreButtons />
      <br/>
      <Form/>
      <hr/>
      <div>
      {ballWiseRes.map((res, index) => (
        <p key ={index}>{res}</p>
      ))}
      </div>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
