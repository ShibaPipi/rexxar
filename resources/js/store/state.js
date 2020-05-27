let defaultId = '0001'
let defaultCity = '天津'

try {
  if (localStorage.id) {
    defaultId = localStorage.id
  }
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  id: defaultId,
  city: defaultCity
}
