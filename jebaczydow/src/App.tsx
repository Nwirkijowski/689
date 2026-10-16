
function greeter (props){
  console.log(props);
  const who = "swiecie";

  return(
    <p> witaj {who}!</p>
  );

}
function app() {
  return(
    <div>
      <greeter />
      <greeter name="mario" />
      <greeter who="Luigi" />
    </div>
  );
}
export default greeter
