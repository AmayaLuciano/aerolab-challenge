import { Product, User } from "@/app/types/types"
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I0NzZlZWQ1MDM4MTAwMWEyZGRmNTciLCJpYXQiOjE2NzI3NzEzMTB9.Rf4uuvex28gCJwUf5IlmLHi8uCmCDFs1WCVXVW34WA4`,
  };

export const getAllProducts = async (): Promise<Product[]> => {
    const products = await fetch(
      'https://coding-challenge-api.aerolab.co/products/', {headers}
    )
    .then((res) =>res.json())
    .catch(() => console.log("Error"))
    return products
    }

    export const getUser = async () : Promise<User> => {
      const user = await fetch(
        'https://coding-challenge-api.aerolab.co/user/me', {headers, next:{ revalidate: 5}} 
      )
      .then((res) =>res.json())
      .catch(() => console.log("Error"))
      return user
      }
  

      export const addCoins = (amount: number) => {
        const coins = axios({
          method: 'post',
          url:'https://coding-challenge-api.aerolab.co/user/points',
          headers: headers,
          data: {
            amount: amount
          }
        })
        return coins
      }

      // export const getRedeemHistory = async (): Promise<Product[]> => {
      //   const history = await fetch(
      //     'https://coding-challenge-api.aerolab.co/user/history', {headers}
      //   )
      //   .then((res) =>res.json())
      //   .catch(() => console.log("Error"))
      //   return history
      //   }

      export const getRedeemHistory = async (): Promise<Product[]> => {
        const history = await fetch(
          'https://coding-challenge-api.aerolab.co/user/history', {headers, next:{revalidate: 5}}
        )
        .then((res) =>res.json())
        .catch(() => console.log("Error"))
        return history
        }

      export const redeemProduct = (id: string) => {
        const redeem = axios({
          method: 'post',
          url:'https://coding-challenge-api.aerolab.co/redeem',
          headers: headers,
          data: {
            "productId": id
          }
        })
        return redeem
      }