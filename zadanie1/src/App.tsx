
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
      <greeter name="mario2" />
      <greeter who="Luigis23" />
    </div>
  );
}
export default greeter
