import Hello from "../Hello";
import Counter from "../Counter";

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React Router app.</p>
      <Hello />
      <Counter />
    </div>
  );
}

export default Home;
