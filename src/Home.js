
function Home(props) {
  console.log("homage page state = ", props)
    return (
      <div >
          <h1>Home Page</h1>
          <span>Current User: {props.currentUser}</span>
      </div>
    );
  }
  
  export default Home;
  