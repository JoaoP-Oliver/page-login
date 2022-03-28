// Como fazer um testador de uma parte de um codigo de javaScript
const express = require('express')
const app = express()

const url = `https://github.com/api/users/JoaoP-Oliver`


  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.login)
  })
  .catch( conosle.log('erro de digitação'))

