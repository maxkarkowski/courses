import Link from 'next/link'
import React from 'react'

export default function AdressCell({ cellData }) {
  const adress = `${cellData.street},${cellData.zip} ${cellData.city}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adress)}`
  return (
    <Link href={googleMapsUrl} target="_blank">
      <p>{cellData.street}</p>
      <p>
        {cellData.zip} {cellData.city}
      </p>
    </Link>
  )
}
