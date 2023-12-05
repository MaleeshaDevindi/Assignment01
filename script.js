
function bold(){
    document.execCommand('bold', false, null);
}

function underline(){
    document.execCommand('underline', false, null);
}

function italic(){
    document.execCommand('italic', false, null);
}

function colorPickeropen() {
    const colorPicker = document.getElementById('fontColorPicker');
    colorPicker.click();
}

function changeColor(event) {
    const colorPicker = event.target;
    const selectedColor = colorPicker.value;
    document.execCommand('foreColor', true, selectedColor);
}

