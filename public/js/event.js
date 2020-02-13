// document.querySelector('form').addEventListener('submit', async (event) => {
//   event.preventDefault();
//   console.log('id> ', event.target);
  
//   const res = await fetch("change", {
//     credentials: 'same-origin',
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({ id: event.target.getAttribute(id), value: event.target.ch.value })
//   });
//   let data = await res.json();
// });


// document.addEventListener('submit', async function (e) {

//   // PSEUDO-код:
//   // 1 - перехватить событие отправки формы
//   // 2 - предотвратить действие по умолчанию для этого события
//   // 3 - отправить AJAX-сообщение на сервер
//   // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика
//   e.preventDefault();
//   const res = await fetch("roll", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({ sides: e.target.sides.value })
//   });
//   let data = await res.json();
//   // Отрисовываем полученные данные без отрисовки страницы
//   document.querySelector('#die-container').innerHTML = (`<div class="die"><span class="roll">${data.roll}</span></div>`);
// });
