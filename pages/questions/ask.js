import React from 'react'
import Head from 'next/head'

import QuestionAskView from '../../components/questionAskView'
import Header from '../../components/layout/header'
import QuestionForm from '../../components/questionAskView/questionForm'

const Ask = () => {
  return (
    <div>
      <Head>
        <title>Ask a Question - Stackoverflow Clone</title>
      </Head>

      <Header />
      <QuestionAskView>
        <QuestionForm />
      </QuestionAskView>
    </div>
  )
}

export default Ask
