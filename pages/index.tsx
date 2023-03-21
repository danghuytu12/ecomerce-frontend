import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HUB_BASE_URL } from '@/constant'
import Product from '@/components/home/Product'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Product />
     <Product />
     <Product />
      <Footer />
    </>
  )
}
