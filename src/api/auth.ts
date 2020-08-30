import { auth } from 'firebase-config'

export const authApi = {
  register(email: string, password: string) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user: any) => ({ email: user.user.email, id: user.user.uid }))
      .catch(error => console.log(error))
  },
  login(email: string, password: string) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((user: any) => ({ email: user.user.email, id: user.user.uid }))
      .catch(error => console.log(error))
  },
  logout() {
    return auth.signOut()
  }
}
