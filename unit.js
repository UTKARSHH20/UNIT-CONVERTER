const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const results = document.querySelector(".results");
convertBtn.addEventListener("click",function(){
    const inputValue = Number(input.value);
    const LengthInFeet = (inputValue * 3.281).toFixed(3);
    const LengthInMetres = (inputValue / 3.281).toFixed(3);
    const VolumeInGallons = (inputValue * 0.264).toFixed(3);
    const VolumeInLitres = (inputValue / 0.264).toFixed(3);
    const MassInPounds = (inputValue * 2.205).toFixed(3);
    results.innerHTML = `
    <div class="card">
        <p>${inputValue} meters = ${LengthInFeet} feet | ${inputValue} feet = ${LengthInMetres} meters</p>
    </div>
    <div class="card">
    <p> ${inputValue} liters = ${VolumeInGallons} gallons | ${inputValue} gallons = ${VolumeInGallons} liters</p>
    </div>
    <div class="card">
    <p> ${inputValue} kilos = ${MassInPounds} pounds | ${inputValue} pounds = ${MassInPounds} kilos</p>
    </div>
    `
})