function foo() {
  let bar = false;
  quux = 1;
  function zip() {
    let quux = 3;
    bar = true;
  }
  return zip;
}
