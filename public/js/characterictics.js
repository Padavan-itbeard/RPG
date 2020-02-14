document
  .querySelector(".changeChar")
  .addEventListener("submit", async event => {
    event.preventDefault();

    const response = await fetch("/account/char", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: event.target.input.value,
        id: event.target.getAttribute("id")
      })
    });
    const data = await response.json();
    event.target.input.placeholder = data.value;
    console.log(data);
  });
