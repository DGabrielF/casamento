import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firebaseApp } from '../App'
import { Card, CardProps } from './Card'

// function addingDataToDatabase() {
//   const db = getFirestore(firebaseApp)
//   data.map(async(item) => {
//     let step = await addDoc(collection(db, 'gifts'), {
//       name: item.name,
//       category: item.category,
//       description: item.description,
//       image: item.image,
//       price: item.price,
//       gifter: 'NULL',
//       payWays: []
//     })
//   })
// }

export function CardSpace(filtertype:any) {
    const [gifts, setGifts]:any[] = useState([])

    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db, 'gifts')
    console.log(filtertype)
    useEffect( () => {
      const getGifts = async () => {
        const data = await getDocs(userCollectionRef)
        // console.log(data.docs.map( (doc) => ({...doc.data(), id:doc.id})))
        setGifts(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
      getGifts()
    }, [])

    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-start mx-auto'>
        {gifts.map((item: CardProps) => {
            return(
                <Card 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    gifter={item.gifter}
                    payWays={item.payWays}
                  />
                )
            })}
        </div>
    )
}