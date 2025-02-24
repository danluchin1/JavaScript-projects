const dateContent = document.getElementById("dateContent");
const answer = document.getElementById("answer");

function calculateAge() {
    const selectedDay = new Date(dateContent.value);
    const now = new Date();

    const year = selectedDay.getFullYear();
    const month = selectedDay.getMonth() + 1;
    const day = selectedDay.getDate();

    let result;
    if (!dateContent.value) {
        alert("Please enter your birthday!");
    } else if (selectedDay > now) {
        alert("Please enter your birthday!");
    } else if (
        now.getMonth() + 1 < month ||
        (now.getMonth() + 1 === month && now.getDate() < day)
    ) {
        result = now.getFullYear() - year - 1;
        answer.textContent = `Your age is ${result} years old`;
    } else {
        result = now.getFullYear() - year;
        answer.textContent = `Your age is ${result} years old`;
    }
}
