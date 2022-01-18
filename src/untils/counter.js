import React from "react";

function VisitedCounter() {
  const expireDate = new Date();
  expireDate.setMonth(expireDate.getMonth() + 6);
  let jcount = eval(cookieVal("jaafarCounter"));
  jcount++;
  document.cookie =
    "jaafarCounter=" + jcount + ";expires=" + expireDate.toGMTString();
  console.log(jcount);
  function cookieVal(cookieName) {
    const thisCookie = document.cookie.split("; ");
    for (let i = 0; i < thisCookie.length; i++) {
      if (cookieName == thisCookie[i].split("=")[0]) {
        return thisCookie[i].split("=")[1];
      }
    }
    return 0;
  }

  function page_counter() {
    for (let i = 0; i < 7 - jcount.toString().length; i++)
      document.write('<span class="counter">0</span>');
    for (let y = 0; y < jcount.toString().length; y++)
      document.write(
        '<span class="counter">' + jcount.toString().charAt(y) + "</span>"
      );
  }
  return <div>Peoples visited this page {jcount} time(s).</div>;
}

export default VisitedCounter;
