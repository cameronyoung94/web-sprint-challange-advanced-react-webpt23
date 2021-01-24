import { json } from 'body-parser'
import {usestate} from 'react'

export const useLocalStorage = (key, initialValues) => {
 const [storedValue, setStoredValue] = useState(() => {
  if(window.localStorage.getItem(key)){
   return JSON.parse(window.localStorage.getItem(key))
  }
  window.localStorage.setItem(key, JSON.stringify(initialValues))
  return initialValues
 })

 const setvalues = (values) => {
  setStoredValue(values)
  window.localStorage.setItem(key, JSON.stringify(values))
 }

 return [storedValue, setvalues]
}