window.onload = setForm0
window.onload = setForm0
window.onload = setForm0
window.onload = setForm0

function openESForm() {
    document.getElementById("salvadorForm").style.display = "block";
    }
  
function closeESForm() {
    document.getElementById("salvadorForm").style.display = "none";
    }

function openGForm() {
    document.getElementById("guatemalaForm").style.display = "block";
    }
  
function closeGForm() {
    document.getElementById("guatemalaForm").style.display = "none";
    }

function openPForm() {
    document.getElementById("peruForm").style.display = "block";
    }
      
function closePForm() {
    document.getElementById("peruForm").style.display = "none";
    }

function openAForm() {
    document.getElementById("argentinaForm").style.display = "block";
    }
          
function closeAForm() {
    document.getElementById("argentinaForm").style.display = "none";
    }


function setForm0() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("No invalid data detected. Form will be submitted.");
            closeESForm();
            closeGForm();
            closePForm();
            closeAForm();
        return false;
    }
}


function setForm1() {
    document.forms[1].onsubmit = function() {
        if (this.checkValidity()) alert("No invalid data detected. Form will be submitted.");
            closeESForm();
            closeGForm();
            closePForm();
            closeAForm();
        return false;
    }
}


function setForm2() {
    document.forms[2].onsubmit = function() {
        if (this.checkValidity()) alert("No invalid data detected. Form will be submitted.");
            closeESForm();
            closeGForm();
            closePForm();
            closeAForm();
        return false;
    }
}


function setForm3() {
    document.forms[3].onsubmit = function() {
        if (this.checkValidity()) alert("No invalid data detected. Form will be submitted.");
            closeESForm();
            closeGForm();
            closePForm();
            closeAForm();
        return false;
    }
}