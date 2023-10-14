//
export function ValidateForm(phoneNumber) {
  if (this instanceof ValidateForm === false) {
    return new ValidateForm(phoneNumber);
  }
  this.phoneNumber = `${phoneNumber}`;
  const prefixes = {
    mtn: [
      "803",
      "806",
      "810",
      "813",
      "814",
      "816",
      "903",
      "7025",
      "7026",
      "703",
      "706",
      "913",
      "916",
      "704",
      "906",
    ],

    airtel: [
      "701",
      "708",
      "802",
      "808",
      "812",
      "901",
      "902",
      "904",
      "907",
      "912",
    ],

    nineMobile: ["809", "818", "817", "909", "908"],

    glo: ["805", "807", "705", "815", "811", "905", "915"],
  };
  this.getPrefixes = function () {
    return prefixes;
  };
}

ValidateForm.prototype.validateIfNumbersOnly = function () {
  // this function validates that only numbers are in the input field

  return /^[^A-Za-z]+$/.test(this.phoneNumber);
};

ValidateForm.prototype.getPrefixFromPhoneNumber = function () {
  // this function returns the numbers between index 1 to 4
  // which reps the prefix of the number
  if (this.phoneNumber.includes("+")) {
    return this.phoneNumber.slice(4, 7);
  }
  return this.phoneNumber.slice(1, 4);
};

ValidateForm.prototype.getPhoneNumber = function () {
  console.log(this.phoneNumber);
};

ValidateForm.prototype.isNumberComplete = function () {
  // function verifies if number is complete
  let num = this.phoneNumber;
  if (num.includes("+")) {
    let slice = num.slice(4);
    if (slice.length === 10) {
      return true;
    } else {
      return false;
    }
  } else {
    if (num.length === 11) {
      console.log("yeah");
      return true;
    } else {
      console.log(num.length);
      console.log("bhgna");
      return false;
    }
  }
};

ValidateForm.prototype.isMtnNumber = function () {
  // this function check if this.phoneNumber is an MTN number by checking
  // against the prefixes
  const mtnPrefixes = this.getPrefixes().mtn;
  let numberPrefix = this.getPrefixFromPhoneNumber(this.phoneNumber);
  if (mtnPrefixes.includes(numberPrefix)) {
    return true;
  }
  return false;
};

ValidateForm.prototype.isGloNumber = function () {
  // this function check if this.phoneNumber is a glo number by checking
  // against the prefixes
  const gloPrefixes = this.getPrefixes().glo;
  let numberPrefix = this.getPrefixFromPhoneNumber(this.phoneNumber);
  if (gloPrefixes.includes(numberPrefix)) {
    return true;
  }
  return false;
};

ValidateForm.prototype.isNineMobileNumber = function () {
  // this function check if this.phoneNumber is a nine mobile number by checking
  // against the prefixes
  const nineMobilePrefixes = this.getPrefixes().nineMobile;
  let numberPrefix = this.getPrefixFromPhoneNumber(this.phoneNumber);
  if (nineMobilePrefixes.includes(numberPrefix)) {
    return true;
  }
  return false;
};

ValidateForm.prototype.isAirtelNumber = function () {
  // this function check if this.phoneNumber is an airtel number by checking
  // against the prefixes
  const airtelPrefixes = this.getPrefixes().airtel;
  let numberPrefix = this.getPrefixFromPhoneNumber(this.phoneNumber);
  if (airtelPrefixes.includes(numberPrefix)) {
    return true;
  }
  return false;
};
