
function greeter (props){
  console.log(props);
  const who = "swiecie";

  return(
    <p> witaj67s {who}!</p>
  );

}
function app() {
  return(
    <div>
      <greeter />
      <greeter name="mario" />
      <greeter who="Luigis2" />
    </div>
  );
}
export default greeter
