async function getFetch(namesList) { // делаем функцию на получение данных по имени пользователя
  const result = namesList.map((name) => fetch(`https://api.github.com/users/${name}`).then((response) => response.json()));

  Promise.all(result).then((res) => console.log(res));
}

getFetch(["Konmly"]);