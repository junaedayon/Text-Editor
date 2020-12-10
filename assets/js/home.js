const submi_text = document.getElementById("submit_text");
const format_text =document.getElementById("format_text");

function updateText () {
   let text = submit_text.value;
   format_text.innerText = text
}
submit_text.addEventListener('input' , updateText);

function makeBold (elem) {
    elem.classList.toggle('active');

    document.getElementById("format_text").classList.toggle('bold');
}

function makeItalic (elem) {
    elem.classList.toggle('active');
    document.getElementById("format_text").classList.toggle('italic');
}
function makeUnderline (elem) {
    elem.classList.toggle('active');
    document.getElementById("format_text").classList.toggle('underline');
}

function alignText (elem , alignType) {
    // elem.classList.toggle('active');
   document.getElementById("format_text").style.textAlign = alignType;
     let buttonList = document.getElementsByClassName('align');
     for (let i = 0 ; i < buttonList.length; i++) {
         buttonList[i].classListremove('active');
     }
      elem.classList.add('active')
        
}
