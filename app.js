const dice = document.querySelector('.dice-con');
const adviceId = document.querySelector('span');
const quote = document.querySelector('h1');

dice.addEventListener('click', async function (e) {
    const { slip } = await fetch('https://api.adviceslip.com/advice')
                                    .then(response => response.json());
    const { id: slip_id, advice } = slip;
    adviceId.textContent = `#${slip_id}`;
    quote.textContent = advice;
});
