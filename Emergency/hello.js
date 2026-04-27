const array = [];

//  Heart counter
document.getElementById("heard").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("coll-btns").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Fire Service Number",
    number: "999",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});

// section number 2
//  Heart counter
document.getElementById("heard1").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button
document.getElementById("call-btns").addEventListener("click", function (e) {
  e.preventDefault();
  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }
  // object তৈরি
  const obj = {
    title: "Police Helpline Number",
    number: "999",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section number 3
//  Heart counter
document.getElementById("heard1").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button
document.getElementById("call-btns").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
    return;
  } else {
    // coin নাই
    alert("No coin");
    return;
  }

  // object তৈরি
  const obj = {
    title: "Police Helpline Number",
    number: "999",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 3
//  Heart counter
document.getElementById("hard-3").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-3").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document
  .getElementById("call_buttons-3")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const coins = parseInt(document.getElementById("coien").innerText);

    if (coins >= 20) {
      // coin কমাও
      document.getElementById("coien").innerText = coins - 20;
      // success message
      alert("National Emergency Number 999");
    } else {
      // coin নাই
      alert("No coin");
    }

    // object তৈরি
    const obj = {
      title: "Fire Service Number",
      number: "999",
      time: new Date().toLocaleTimeString(),
    };

    // array তে push
    array.push(obj);

    // UI update
    renderHistory();
  });
// section  numbers 4
//  Heart counter
document.getElementById("heard-4").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-4").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-4").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Ambulance Service",
    number: "1994-999999",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 5
//  Heart counter
document.getElementById("heard-5").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-5").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-5").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Women & Child Helpline",
    number: "109",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 6
//  Heart counter
document.getElementById("heard-6").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-6").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-6").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Anti-Corruption Helpline",
    number: "106",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 7
//  Heart counter
document.getElementById("heard-7").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-7").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-7").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Electricity Helpline",
    number: "16216",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 8
//  Heart counter
document.getElementById("heard-8").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-8").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-8").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Brac Helpline",
    number: "16445",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});
// section  numbers 9
//  Heart counter
document.getElementById("heard-9").addEventListener("click", function () {
  const heard = parseInt(document.getElementById("numbers-heard").innerText);
  document.getElementById("numbers-heard").innerText = heard + 1;
});

//  Copy counter
document.getElementById("copy-btn-9").addEventListener("click", function (e) {
  e.preventDefault();
  const copy1 = parseInt(document.getElementById("copy-number").innerText);
  document.getElementById("copy-number").innerText = copy1 + 1;
});

//  Call button (MAIN LOGIC)
document.getElementById("call-btn-9").addEventListener("click", function (e) {
  e.preventDefault();

  const coins = parseInt(document.getElementById("coien").innerText);

  if (coins >= 20) {
    // coin কমাও
    document.getElementById("coien").innerText = coins - 20;
    // success message
    alert("National Emergency Number 999");
  } else {
    // coin নাই
    alert("No coin");
  }

  // object তৈরি
  const obj = {
    title: "Bangladesh Railway Helpline",
    number: "163",
    time: new Date().toLocaleTimeString(),
  };

  // array তে push
  array.push(obj);

  // UI update
  renderHistory();
});

//  History render function
function renderHistory() {
  const container = document.getElementById("card-section");

  container.innerHTML = ""; // clear old

  for (const item of array) {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="bg-white shadow-lg p-4 mt-4 rounded-[20px]">
      <h1 class="text-[20px] font-bold">${item.title}</h1>
      <span>${item.time}</span>
      <p>${item.number}</p>
    </div>
  `;

    container.appendChild(div);
  }
}

// 🧹 Clear button
document
  .querySelector("#card-section10 #clear_btn")
  .addEventListener("click", function () {
    array.length = 0; // clear array
    document.getElementById("card-section").innerHTML = "";
  });
