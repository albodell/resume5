export default function bullet(e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code === 13) {
    e.preventDefault();

    e.target.value += "\nā  ";
  }
  if (e.target.value.includes("ļ®")) {
    e.preventDefault();
    console.log("b");
    e.target.value = e.target.value.replaceAll("ļ®", "ā");
  }
}
