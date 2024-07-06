let question;

const renderExercise = (question, answerFn) => {
    const dashboard = document.querySelector('.dashboard');
    const answer = answerFn();

    dashboard.insertAdjacentHTML(
        'beforeend',
        `<div class="dashboard__item">
            <h4 class="dashboard__title">${question}</h4>
            <div class="dashboard__solution">${answer}</div>
        </div>`
    );
}

const renderExerciseWithInput = (question, answerFn) => {
    const dashboard = document.querySelector('.dashboard');
    const blockId = `withInput${dashboard.children.length}`;

    dashboard.insertAdjacentHTML(
        'beforeend',
        `<div class="dashboard__item" id="${blockId}">
            <h4 class="dashboard__title">${question}</h4>
            <input class="dashboard__input" type="number" min="1"/>
            <div class="dashboard__solution"></div>
        </div>`
    );

    document.querySelector(`#${blockId}`).addEventListener('change', (e) => {
        const value = +e.target.value;
        e.currentTarget.querySelector('.dashboard__solution').innerHTML = answerFn(value);
    });
}


// Вивести на сторінку в один рядок через кому числа від 10 до 20.
renderExercise('Вивести на сторінку в один рядок через кому числа від 10 до 20.', () => {
   const numbers = [];

   for (let i = 10; i <= 20; i++) numbers.push(i);

   return numbers.join(', ');
});

// Вивести квадрати чисел від 10 до 20.
renderExercise('Вивести квадрати чисел від 10 до 20.', () => {
   const numbers = [];

   for (let i = 10; i <= 20; i++) numbers.push(i**2);

   return numbers.join(', ');
});

// Вивести таблицю множення на 7.
renderExercise('Вивести таблицю множення на 7', () => {
    const expressions = [];

    for (let i = 1; i <= 10; i++) {
        expressions.push(`7 * ${i} = ${7 * i}`)
    }

    return expressions.join('<br/>');
});

// Знайти суму всіх цілих чисел від 1 до 15.
renderExercise('Знайти суму всіх цілих чисел від 1 до 15', () => {
    const numbers = [];

    for (let i = 2; i <= 15; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) numbers.push(i);
    }

    return numbers.join(', ')
});

// Знайти добуток усіх цілих чисел від 15 до 35.
renderExercise('Знайти добуток усіх цілих чисел від 15 до 35.', () => {
    const numbers = [];

    for (let i = 15; i <= 35; i++) numbers.push(i);

    const product = BigInt(numbers.reduce((n1, n2) => n1 * n2));

    return `15 * ... * 35 = ${product}`;
});

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
renderExercise('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.', () => {
    const startValue = 500;
    let sum  = 0;

    for (let i = startValue; i >= 1; i--) sum += i;

    return `1 + ... + ${startValue} / ${startValue} = ${sum / startValue}`;
});

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
renderExercise('Вивести суму лише парних чисел в діапазоні від 30 до 80.', () => {
    const evenNumbers = [];

    for (let i = 30; i <= 80; i++){
        if (i % 2 === 0) evenNumbers.push(i);
    }

    return evenNumbers.reduce((n1, n2) => n1 + n2);
});

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
renderExercise('Вивести всі числа в діапазоні від 100 до 200 кратні 3.', () => {
    const numbers = [];

    for (let i = 100; i <= 200; i++){
        if (i % 3 === 0) numbers.push(i);
    }

    return numbers.join(', ');
});

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
question =
    'Дано натуральне число. Знайти та вивести на сторінку всі його дільники. ' +
    'Визначити кількість його парних дільників. Знайти суму його парних дільників.';
renderExerciseWithInput(question, inputValue => {
    let divisors = [];
    let countOfEvenDivisors = 0;
    let sumOfEvenDivisors = 0;

    for (let i = Math.abs(inputValue); i > 0; i--) {
        if (inputValue % i === 0) {
            divisors.push(i);

            if (i % 2 === 0) {
                countOfEvenDivisors++;
                sumOfEvenDivisors += i;
            }
        }
    }

    return (
        `Дільники числа ${inputValue} -> ${divisors}<br/>` +
        `Кількість парних дільників -> ${countOfEvenDivisors}<br/>` +
        `Сумма парних дільників -> ${sumOfEvenDivisors}`
    );
});

renderExercise('Надрукувати повну таблицю множення від 1 до 10.', () => {
    const result = [];

    for (let i = 1; i <= 10; i++) {
        result.push([]);

        for (let j = 1; j <= 10; j++) {
            result[i - 1].push(`${i} * ${j} = ${i * j}`);
        }
    }

    return result.map(item => {
        return `<div class='multiplication_table'>
            ${item.join('<br/>')}
        </div>`
    }).join('');
});

renderExercise('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)', () => {
    const result = [];

    for (let i = 20; i <= 30; i += 0.5) result.push(i);

    return result.join(', ');
});

renderExercise('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.', () => {
    const result = [];

    for (let i = 10; i <= 100; i += 10) {
        result.push(i);
    }

    return result.join(', ');
});

renderExerciseWithInput('Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.', inputValue => {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= inputValue) {
            result.push(i);
        } else {
            break;
        }
    }

    return result.join(', ');
});

question = 'Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).';
renderExerciseWithInput(question, inputValue => {
    const primary = `${inputValue} - просте число`;
    const notPrimary = `${inputValue} - звичайне число`;

    if (inputValue <= 1) return notPrimary;
    if (inputValue <= 3) return primary;
    if (inputValue % 2 === 0 || inputValue % 3 === 0) return notPrimary;

    for (let i = 5; i * i <= inputValue; i += 6) {
        if (inputValue % i === 0 || inputValue % (i + 2) === 0) {
            return notPrimary;
        }
    }

    return primary;
});

question = 'Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).'
renderExerciseWithInput(question, inputValue => {
    for (let i = 1; ; i++) {
        const result = 3 ** i;

        if (result === inputValue) return `3 ** ${i} = ${inputValue}`;
        if (result > inputValue) return 'Неможливо';
    }
});