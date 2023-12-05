import { http } from '@/http'

export default class AuthServices {
  static async auth(email, password) {
    console.log(email, password)
    return http.post('/auth', { email, password })
  }



  static async registration(email, password) {
    return http.post('/login', { email, password, confirmPassword })
  }

  static async logout() {
    return http.post('/logout')
  }

  static async ping() {
    return http.ping('/ping')
  }
}