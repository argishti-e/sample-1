const form = document.querySelector('#registration');

if (form) {
  form.onsubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName: document.querySelector('[name="firstName"]').value || undefined,
      lastName: document.querySelector('[name="lastName"]').value || undefined,
      email: document.querySelector('[name="email"]').value || undefined,
      password: document.querySelector('[name="password"]').value || undefined,
    }

    const data = await axios({
      method: 'post',
      url: '/users/registration',
      data: payload,
    })
      .then(({ data }) => {
        return {
          error: false,
          result: data,
        }
      })
      .catch((e) => {
        return {
          error: true,
          result: e.response.data
        };
      });

    const keys = Object.keys(payload);

    if (data.error) {
      const fields = data.result.fields

      keys.forEach((key) => {
        document.querySelector(`span[data-name="${key}"]`).innerText = fields[key] || '';
      })

      console.log(data.result.fields)
    } else {
      keys.forEach((key) => {
        document.querySelector(`span[data-name="${key}"]`).innerText = '';
      });

      document.querySelector('#message').innerText = data.result.message;
      document.querySelector('#message_2').innerText = JSON.stringify(data.result.user, null, 2);

      setTimeout(()=>{
        location.href = '/users/login';
      }, 1000);
    }
  }
}
