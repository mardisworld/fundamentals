var isOn=true;
var isHot=true;

if(isOn) {
	console.log("It's getting hot in here.")
}

if (isOn === true) {
	console.log("Dude, that's amazing.")
}

if(isOn && isHot) {
	console.log("Wow, it's steamy hot. Please kill the spotlights.")
}

if(isOn||isHot) {
	console.log("The lights are hot or the lights are on.")
}

if (!isHot) {
	console.log("Dude, it's not that hot.")
}