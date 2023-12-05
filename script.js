function colorPickeropen() {
    const colorPicker = document.getElementById('fontColorPicker');
    colorPicker.click();
}

function changeColor(event) {
    const colorPicker = event.target;
    const selectedColor = colorPicker.value;
    document.execCommand('foreColor', true, selectedColor);
}
