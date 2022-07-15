export default function bullet(e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code === 13) {
    e.preventDefault();
    e.target.value += "\n●  ";
  }
}
