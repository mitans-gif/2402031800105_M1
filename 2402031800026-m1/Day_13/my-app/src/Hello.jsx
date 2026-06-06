function Hello() {
  const getName = (yourname) => {
    return yourname;
  };

  function handleClick() {
    alert("Button was clicked!");
  }

  const handleInput = (event) => {
    console.clear();
    console.log("value:", event.target.value);
  };
  const name = "vraj";
  const name1 = "shah";

  const handleMouseOver = () => console.log("Mouse is over the text!");
  const handleDoubleClick = () => console.log("Text double clicked!");

  return (
    <>
      <h1>Hello, {getName(name)}!</h1>
      <h2>Hello, {getName(name1)}!</h2>
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
        {" "}
        lorem ipsum dolor sit amet.{" "}
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("Hello from inline function!")}>
        Say Hello{" "}
      </button>
      <br />
      <input type="text" onChange={handleInput} placeholder="Type Something" />
    </>
  );
}

export default Hello;