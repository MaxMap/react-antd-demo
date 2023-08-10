class Local {
  get(label:string) {
    return localStorage.getItem(label)
  }
  set(label:string,value:string) {
    localStorage.setItem(label, value)
  }
  remove(label:string) {
    localStorage.removeItem(label)
  }
  clear() {
    localStorage.clear()
  }
}

export const local = new Local()

export class Session {
  get(label:string) {
    return sessionStorage.getItem(label) || ''
  }
  set(label:string,value:string) {
    sessionStorage.setItem(label, value)
  }
  remove(label:string) {
    sessionStorage.removeItem(label)
  }
  clear() {
    sessionStorage.clear()
  }
}

export const session = new Session()