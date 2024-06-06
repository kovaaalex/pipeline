fetch('https://api.pipedrive.com/v1/persons?api_token=038f7961f6ec8877beb2b42e03903d148f877387')
    .then(response => response.json())
    .then(data => {
        if (data.success && data.data && data.data.length > 0) {
            const firstPerson = data.data[0]
            const email = firstPerson.owner_id.email
            console.log('Email:', email)
            const emailInput = document.querySelector('input[type="email"]')
            if (emailInput) 
                emailInput.value = email
            else
                console.error('Поле email не найдено на странице.')
    } else 
      console.error('Данные о клиентах не найдены или запрос не был успешным.')
  })
    .catch(error => console.error('Ошибка получения данных:', error))
const createJob = document.querySelector('.btn__create')

createJob.addEventListener('click', creatingJob)

function creatingJob(){
    createJob.innerText = "Request is send"
    createJob.style.backgroundColor = "red"
}