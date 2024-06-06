fetch('https://api.pipedrive.com/v1/persons?api_token=038f7961f6ec8877beb2b42e03903d148f877387')
  .then(response => response.json())
  .then(data => {
    // Проверяем, что запрос был успешным и данные присутствуют
    if (data.success && data.data && data.data.length > 0) {
      // Получаем первый элемент из массива data
      const firstPerson = data.data[0];
      // Получаем email из объекта owner_id
      const email = firstPerson.owner_id.email;
      console.log('Email:', email);

      // Автоматически заполняем поле email на странице, если оно существует
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.value = email;
      } else {
        console.error('Поле email не найдено на странице.');
      }
    } else {
      console.error('Данные о клиентах не найдены или запрос не был успешным.');
    }
  })
  .catch(error => console.error('Ошибка получения данных:', error));

