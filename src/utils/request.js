import axios from 'axios'
import { response } from 'express'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'http://119.28.31.14',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((Response) => {
      response(resolve.data)
    }, err => {
      reject(err)
    })
  })
}
