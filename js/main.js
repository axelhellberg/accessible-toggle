var toggleSwitch = function (e) {
    if (!e.target.classList.contains('toggle')) return;       
    e.target.classList.toggle('on');
};

document.addEventListener('click', toggleSwitch, false);

document.addEventListener('mousedown', function (e) {
    if (!e.target.classList.contains('toggle')) return;
    e.preventDefault();
}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') toggleSwitch(e);
}, false);