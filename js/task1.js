let login = prompt('enter your login', ``);
const minLoginLength = 4;

if (login === null || login === '') {
    alert('Canceled');
} else if (login.length < minLoginLength) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login.length >= minLoginLength && login !== 'User' && login !== 'Admin') {
    alert('I don’t know you');
} else {
    let password = prompt('enter your password', ``);
    if (password === null || password === '') {
        alert('Canceled');
    } else {
        let date = new Date();
        let currentHours = date.getHours();
        const morningHour = 8;
        const eveningHour = 20;
        if (login === 'User' && password === 'UserPass' || login === 'Admin' && password === 'RootPass') {
            if (currentHours >= morningHour && currentHours < eveningHour) {
                alert(`Good day, dear ${login}!`);
            } else {
                alert(`Good evening, dear ${login}!`);
            }
        } else {
            alert('Wrong password');
        }
    }
}