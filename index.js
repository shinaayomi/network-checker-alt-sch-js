let imageBg = document.querySelector(".container");
let inputValue = document.getElementById("number");
let headWord = document.querySelector(".headWord");
let carrier = document.querySelector(".carrier");
let country = document.querySelector(".country");
let detail = document.querySelector(".numberProvider");
let direction = document.querySelector(".direction");
let gloCode = ["805", "807", "705", "815", "811", "905", "915"];
let airtelCode = [
  "802",
  "808",
  "708",
  "812",
  "701",
  "902",
  "901",
  "904",
  "907",
  "912",
];
let mtnCode = [
  "803",
  "806",
  "703",
  "706",
  "813",
  "816",
  "810",
  "814",
  "903",
  "906",
  "913",
  "916",
  "704",
];
let nineCode = ["809", "818", "817", "909", "908"];
let stringTest = /[a-zA-Z]+/g;
// images variables

const gloImage =
  "url(https://seeklogo.com/images/G/glo-limited-logo-9D0F432BA3-seeklogo.com.png)";
const mtnImage =
  "url(https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png)";
const airtelImage =
  "url(https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png)";
const nineImage =
  "url(https://seeklogo.com/images/1/9mobile-logo-2A74C402E2-seeklogo.com.png)";

// final validator Code

const validateSecond = (val) => {
  let check = true;
  if (gloCode.includes(val.slice(4, 7)) || gloCode.includes(val.slice(1, 4))) {
    headWord.textContent = " ";
    check = false;
    return (
      (carrier.style.backgroundImage = gloImage),
      (detail.textContent = `${val} is a Glo number`)
    );
  } else if (
    airtelCode.includes(val.slice(4, 7)) ||
    airtelCode.includes(val.slice(1, 4))
  ) {
    headWord.textContent = " ";
    check = false;
    return (
      (carrier.style.backgroundImage = airtelImage),
      (detail.textContent = `${val} is an Airtel number`)
    );
  } else if (
    mtnCode.includes(val.slice(4, 7)) ||
    mtnCode.includes(val.slice(1, 4))
  ) {
    headWord.textContent = " ";
    check = false;
    return (
      (carrier.style.backgroundImage = mtnImage),
      (detail.textContent = `${val} is an MTN number`)
    );
  } else if (
    nineCode.includes(val.slice(4, 7)) ||
    nineCode.includes(val.slice(1, 4))
  ) {
    headWord.textContent = " ";
    check = false;
    return (
      (carrier.style.backgroundImage = nineImage),
      (detail.textContent = `${val} is a 9Mobile number`)
    );
  } else {
    if (val.length >= 7 && check) {
      headWord.textContent = "🚫 Nigeria Number";
    }
  }
};

const lengthGuide = () => {
  inputValue.setAttribute("maxlength", 11);
};
const lengthGuideFix = () => {
  inputValue.setAttribute("maxlength", 14);
};

// VAlidator Function.. can be manipulated
const validator = (val) => {
  if (val.slice(0, 3) === "080") {
    country.textContent = `080 ✅ `;
    validateSecond(val);
    lengthGuide();
    if (val.length >= 11) {
      direction.textContent = " ";
    } else {
      direction.textContent = "complete number";
      headWord.textContent = " ";
      carrier.style.backgroundImage = "none";
      detail.textContent = " ";
    }
  } else if (val.slice(0, 4) === "+234") {
    country.textContent = `+234 ✅`;
    validateSecond(val);
    lengthGuideFix();
    if (val.length >= 14) {
      direction.textContent = " ";
    } else {
      direction.textContent = "complete number";
      headWord.textContent = " ";
      carrier.style.backgroundImage = "none";
      detail.textContent = " ";
    }
  } else {
    if (val.length > 6) {
      headWord.textContent = "search +234🇳🇬 or 080🇳🇬 only";  
    }
    
  }
};

document.getElementById("number").addEventListener("keyup", (e) => {
  e.preventDefault();
  let space = /\s/gm;
  const phoneNumber = inputValue.value;
  if (stringTest.test(phoneNumber) || space.test(phoneNumber)) {
    inputValue.setAttribute("maxlength", 1);
    headWord.textContent = "please enter a valid 🇳🇬 phone number";
  } else {
    if (phoneNumber.length > 2) {
      validator(phoneNumber);
    }
  }
  if (phoneNumber.length < 3) {
    headWord.textContent = " ";
    country.textContent = " ";
    direction.textContent = " ";
    inputValue.setAttribute("maxlength", 15);
  }
});