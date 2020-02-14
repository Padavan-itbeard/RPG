async function addCh(name) {
  res = prompt('Input name character');
  //console.log(res, name);

      const response = await fetch("/boss/addCh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nameCh: res, nameTeam: name
        })
      });
      const data = await response.json();
      event.target.input.placeholder = data.value;
      console.log(data);
   
}
