// Pascal Case
function Message() {
  const name = "Golam Rabbi";
  if (name)
    return (
      // JSX : Javascript XML
      <h1>Hello {name}</h1>
    );
  return <h1>Hello World</h1>;
}

export default Message;
