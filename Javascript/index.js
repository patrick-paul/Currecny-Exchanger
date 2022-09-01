//////// The Code For The App /////////////////////
////////////////////////////////////////////////
////////////// Important Variable ////////////////
var rateOptions = [
  "AFA",
  "ALL",
  "DZD",
  "AOA",
  "ARS",
  "AMD",
  "AWG",
  "AUD",
  "AZN",
  "BSD",
  "BHD",
  "BDT",
  "BBD",
  "BYR",
  "BEF",
  "BZD",
  "BMD",
  "BTN",
  "BTC",
  "BOB",
  "BAM",
  "BWP",
  "BRL",
  "GBP",
  "BND",
  "BGN",
  "BIF",
  "KHR",
  "CAD",
  "CVE",
  "KYD",
  "XOF",
  "XAF",
  "XPF",
  "CLP",
  "CNY",
  "COP",
  "KMF",
  "CDF",
  "CRC",
  "HRK",
  "CUC",
  "CZK",
  "DKK",
  "DJF",
  "DOP",
  "XCD",
  "EGP",
  "ERN",
  "EEK",
  "ETB",
  "EUR",
  "FKP",
  "FJD",
  "GMD",
  "GEL",
  "DEM",
  "GHS",
  "GIP",
  "GRD",
  "GTQ",
  "GNF",
  "GYD",
  "HTG",
  "HNL",
  "HKD",
  "HUF",
  "ISK",
  "INR",
  "IDR",
  "IRR",
  "IQD",
  "ILS",
  "ITL",
  "JMD",
  "JPY",
  "JOD",
  "KZT",
  "KES",
  "KWD",
  "KGS",
  "LAK",
  "LVL",
  "LBP",
  "LSL",
  "LRD",
  "LYD",
  "LTL",
  "MOP",
  "MKD",
  "MGA",
  "MWK",
  "MYR",
  "MVR",
  "MRO",
  "MUR",
  "MXN",
  "MDL",
  "MNT",
  "MAD",
  "MZM",
  "MMK",
  "NAD",
  "NPR",
  "ANG",
  "TWD",
  "NZD",
  "NIO",
  "NGN",
  "KPW",
  "NOK",
  "OMR",
  "PKR",
  "PAB",
  "PGK",
  "PYG",
  "PEN",
  "PHP",
  "PLN",
  "QAR",
  "RON",
  "RUB",
  "RWF",
  "SVC",
  "WST",
  "SAR",
  "RSD",
  "SCR",
  "SLL",
  "SGD",
  "SKK",
  "SBD",
  "SOS",
  "ZAR",
  "KRW",
  "XDR",
  "LKR",
  "SHP",
  "SDG",
  "SRD",
  "SZL",
  "SEK",
  "CHF",
  "SYP",
  "STD",
  "TJS",
  "TZS",
  "THB",
  "TOP",
  "TTD",
  "TND",
  "TRY",
  "TMT",
  "UGX",
  "UAH",
  "AED",
  "UYU",
  "USD",
  "UZS",
  "VUV",
  "VEF",
  "VND",
  "YER",
  "ZMK",
];
window.onload = function (event) {
  // body...
  event.preventDefault();
  document.getElementById("conbtn").disabled = true;
  document
    .getElementById("valueInput")
    .addEventListener("input", () => cheker());
  var i = 0;

  rateOptions.sort();
  rateOptions.forEach((thing) => {
    var opt = [
      document.createElement("option"),
      document.createElement("option"),
    ];
    opt.forEach((item) => {
      item.innerHTML = thing;
      item.setAttribute("value", thing);
    });
    document.querySelectorAll(".currenceDisplay").forEach((stuff) => {
      stuff.appendChild(opt[i]);
      i++;
      if (i > 1) {
        i = 0;
      }
    });
  });
};
///////////////////////////// Variables //////////////////////////////////////
var regex = /^[0.00-9.99]+$/;
var collector = document.querySelectorAll(".button");
var pos = 0;
var ping = document.querySelector("#valueInput").maxLength;
/////////////////// End Of Variables ///////////////////////////////////////////////
////////////////////////// An Event Listener Code For Any Button Press On the Input Field /////////////////
document.querySelector("#valueInput").addEventListener("keyup", (event) => {
  event.preventDefault();
  keyboardAllower();
});
/////////////////////// End Of An Event Listener Code For Any Button Press On the Input Field ////////////
//////////////////////////////////////// Artificial Backspace Button #Functionality /////////////////////
function cutter() {
  var me = 0;
  var xPos = document.querySelector("#valueInput").selectionStart;
  document.querySelector("#valueInput").focus();
  var counter = document.querySelector("#valueInput").value.length;
  var PreValueHolder = document.querySelector("#valueInput").value;
  var firstCut = PreValueHolder.substring(me, xPos);
  var ArrayOfFirstCut = firstCut.split("");
  ArrayOfFirstCut.pop();
  var firstFinal = ArrayOfFirstCut.join("");
  var lastFinal = firstFinal.toString();
  var yPos = xPos++;
  var lastCut = PreValueHolder.substring(yPos, counter);
  document.querySelector("#valueInput").value = lastFinal + lastCut;
  xPos = xPos - 2;
  document.querySelector("#valueInput").selectionEnd = xPos;
}
///////////////////////////////// End Of Artificial Backspace Button Functionality ////////////////////
/////////////////// Checking Fuction Responsible for Ensuring The Input and Options Are ALL Filled ////////
function cheker() {
  // body...
  var ddl = document.querySelectorAll(".currenceDisplay");
  var j = 0;
  ddl.forEach((piss) => {
    if (piss.options[ddl[j].selectedIndex].value !== "none") {
      j++;
      if (j > 1) {
        if (document.querySelector("#valueInput").value.length !== 0) {
          document.getElementById("conbtn").style.opacity = 1;
          document.getElementById("conbtn").disabled = false;
          document
            .getElementById("conbtn")
            .addEventListener("mouseover", () => {
              document.getElementById("conbtn").style.borderRadius = "10px";
              document.getElementById("conbtn").style.background = "orange";
              document.getElementById("conbtn").style.width = "155px";
              document.getElementById("conbtn").style.height = "55px";
              document.getElementById("conbtn").style.cursor = "pointer";
              document.getElementById("conbtn").style.transition = "0.5s";
            });
          document.getElementById("conbtn").addEventListener("mouseout", () => {
            document.getElementById("conbtn").style.borderRadius = "5px";
            document.getElementById("conbtn").style.background = "#0bc9c9";
            document.getElementById("conbtn").style.width = "150px";
            document.getElementById("conbtn").style.height = "50px";
            document.getElementById("conbtn").style.cursor = "auto";
            document.getElementById("conbtn").style.transition = "0.5s";
          });
        } else {
          document.getElementById("conbtn").style.opacity = 0.3;
          document.getElementById("conbtn").disabled = true;
          document
            .getElementById("conbtn")
            .removeEventListener("mouseover", () => {
              document.getElementById("conbtn").style.borderRadius = "10px";
              document.getElementById("conbtn").style.background = "orange";
              document.getElementById("conbtn").style.width = "155px";
              document.getElementById("conbtn").style.height = "55px";
              document.getElementById("conbtn").style.cursor = "pointer";
              document.getElementById("conbtn").style.transition = "0.5s";
            });
          document
            .getElementById("conbtn")
            .removeEventListener("mouseout", () => {
              document.getElementById("conbtn").style.borderRadius = "5px";
              document.getElementById("conbtn").style.background = "#0bc9c9";
              document.getElementById("conbtn").style.width = "150px";
              document.getElementById("conbtn").style.height = "50px";
              document.getElementById("conbtn").style.cursor = "auto";
              document.getElementById("conbtn").style.transition = "0.5s";
            });
        }
        j = 0;
      }
    } else {
      document.getElementById("conbtn").style.opacity = 0.3;
      document.getElementById("conbtn").disabled = true;
    }
  });
}
/////////////// Codes For Artificialy Inserting Numbers To The Input Via Artificial Keyboard ////////////////
function insert(numb) {
  var xPos = document.querySelector("#valueInput").selectionStart;
  document.querySelector("#valueInput").focus();
  if (document.querySelector("#valueInput").value.length < ping) {
    var counter = document.querySelector("#valueInput").value.length;
    var PreValueHolder = document.querySelector("#valueInput").value;
    var firstCut = PreValueHolder.substring(pos, xPos);
    var yPos = xPos++;
    var lastCut = PreValueHolder.substring(yPos, counter);
    document.querySelector("#valueInput").value = firstCut + numb + lastCut;
    document.querySelector("#valueInput").selectionEnd = xPos;
  } else if (document.querySelector("#valueInput").value.length >= ping) {
    keyboardAllower();
  }
}
////////// End Of Codes For Artificialy Inserting Numbers To The Input Via Artificial Keyboard ///////////
///////////////////////// Artifical Keyboard Allowing and Disabling Codes //////////////////////////
function keyboardAllower() {
  if (document.querySelector("#valueInput").value.length < ping) {
    collector.forEach((item) => {
      item.style.opacity = 1;
      item.disabled = false;
      item.addEventListener("mouseover", () => {
        if (item.id === "specialKey") {
          item.style.width = "107px";
        } else {
          item.style.width = "51px";
        }
        item.style.height = "51px";
        item.style.cursor = "pointer";
        item.style.transition = "0.5s";
        item.style.fontSize = "26px";
        item.style.margin = "3px";
        item.style.background = "#63928b";
      });
      item.addEventListener("mouseout", () => {
        if (item.id === "specialKey") {
          item.style.width = "106px";
        } else {
          item.style.width = "50px";
        }
        item.style.height = "50px";
        item.style.cursor = "auto";
        item.style.transition = "0.5s";
        item.style.fontSize = "25px";
        item.style.margin = "2px";
        item.style.background = "#607d8b";
      });
    });
  } else if (document.querySelector("#valueInput").value.length >= ping) {
    document.querySelectorAll(".button").forEach((item) => {
      item.style.opacity = 0.3;
      item.disabled = true;
      item.style.cursor = "auto";
      item.removeEventListener("mouseover", () => {
        if (item.id === "specialKey") {
          item.style.width = "107px";
        } else {
          item.style.width = "51px";
        }
        item.style.height = "51px";
        item.style.cursor = "pointer";
        item.style.transition = "0.5s";
        item.style.fontSize = "26px";
        item.style.margin = "3px";
        item.style.background = "#63928b";
      });
      item.removeEventListener("mouseout", () => {
        if (item.id === "specialKey") {
          item.style.width = "106px";
        } else {
          item.style.width = "50px";
        }
        item.style.height = "50px";
        item.style.cursor = "auto";
        item.style.transition = "0.5s";
        item.style.fontSize = "25px";
        item.style.margin = "2px";
        item.style.background = "#607d8b";
      });
    });
  }
}
///////////////////////////// End Of Artifical Keyboard Allowing and Disabling Codes ////////////////
keyboardAllower();
////////////////////////////////////////// Calculation World! //////////////////////////////////////
function calc() {
  // body...
  ///////////////////////
  document.getElementById("conbtn").innerHTML = "Loading...";
  document.getElementById("conbtn").style.opacity = "0.3";
  document.getElementById("conbtn").disabled = true;
  document.getElementById("conbtn").style.cursor = "not-allowed";

  ////////////////////////
  document.getElementById("resultsOutput").innerHTML = "";

  ///////////////////////
  document.getElementById("CurrencyNameOne").style.cursor = "not-allowed";
  document.getElementById("CurrencyNameOne").disabled = true;

  document.getElementById("CurrencyNameTwo").style.cursor = "not-allowed";
  document.getElementById("CurrencyNameTwo").disabled = true;

  var ddl = document.querySelectorAll(".currenceDisplay");
  let inputVal = document.querySelector("#valueInput").value;
  let j = 0;
  var choosen = new Array();
  ddl.forEach((sub) => {
    var selectedOpt = sub.options[ddl[j].selectedIndex].value;
    j++;
    if (j > 2) {
      j = 0;
    }
    choosen.push(selectedOpt);
  });
  if (!inputVal.match(regex)) {
    Alert.render(
      "<h3><img src='icons\\wait.png' class='imgOne' />" +
        " " +
        "SORRY!</h3><p>Number Inputs Required Only!</p>"
    );
  } else {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "j8Toy7tocLXjUk4GSij40vJYv1srHaXB");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?&base=" + choosen[0],
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        //////////////////// Key Formula //////////////////////////
        ////////// Point Of View:  inputVal(choosen[0]) * choosen[1].rates in base of choosen[0]
        const ans = function () {
          var ansFinal, commasInput, commasAns;

          ansFinal = (inputVal * data.rates[choosen[1]]).toFixed(2);
          
          commasInput = parseInt(inputVal);
          commasAns = parseInt(ansFinal);

          document.getElementById(
            "resultsOutput"
          ).innerHTML = `${commasInput.toLocaleString("en-US")} ${
            choosen[0]
          } = ${commasAns.toLocaleString("en-US")} ${choosen[1]}`;

          releseElement();
        };
        ans();
      })
      .catch((error) => {
        releseElement();
        Alert.render(error);
      });
  }
}
////////////////////////////////End Of Calculation Codes /////////////////////////////////

////////////////////////////////// Restoring the elements to original states//////////////
function releseElement() {
  document.getElementById("conbtn").innerHTML = "Convert";
  document.getElementById("conbtn").style.opacity = 1;
  document.getElementById("conbtn").disabled = false;
  document.getElementById("conbtn").style.background = "#0bc9c9";
  document.getElementById("conbtn").style.cursor = "pointer";

  document.getElementById("conbtn").addEventListener("mouseover", () => {
    document.getElementById("conbtn").style.borderRadius = "10px";
    document.getElementById("conbtn").style.background = "orange";
    document.getElementById("conbtn").style.width = "155px";
    document.getElementById("conbtn").style.height = "55px";
    document.getElementById("conbtn").style.cursor = "pointer";
    document.getElementById("conbtn").style.transition = "0.5s";
  });

  document.getElementById("conbtn").addEventListener("mouseout", () => {
    document.getElementById("conbtn").style.borderRadius = "5px";
    document.getElementById("conbtn").style.background = "#0bc9c9";
    document.getElementById("conbtn").style.width = "150px";
    document.getElementById("conbtn").style.height = "50px";
    document.getElementById("conbtn").style.cursor = "auto";
    document.getElementById("conbtn").style.transition = "0.5s";
  });

  document.getElementById("CurrencyNameOne").style.cursor = "pointer";
  document.getElementById("CurrencyNameOne").disabled = false;

  document.getElementById("CurrencyNameTwo").style.cursor = "pointer";
  document.getElementById("CurrencyNameTwo").disabled = false;
}

//////////////////////////////// Alert.render Codes ////////////////////////////////////////
function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "150px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      "Notification Message! <span style='float:right; cursor: pointer;' onclick='Alert.ok()'>x</span>";
    document.getElementById("dialogboxbody").innerHTML = dialog;
    document.getElementById("dialogboxfoot").innerHTML =
      '<button class="lin" onclick="Alert.ok()">Ok</button>';
  };
  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();

/////////////////////// End App's Codes  //////////////////////////////
