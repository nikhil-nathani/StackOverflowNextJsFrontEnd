import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from '../../components/layout'

const UserDetail = ({ username }) => {


  return (
    <Layout extra={false}>
      <Head>
        <title>Users - Clone of Stackoverflow</title>
      </Head>


      <h1 style={{fontSize:200}}>Under Construction</h1>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const username = context.params.username
  return {
    props: {
      username
    }
  }
}

export default UserDetail
