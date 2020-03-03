import React, { useEffect } from 'react'

const Page = ({ component, title }) => {
  useEffect(() => {
    document.title = title
  })

  const PageComponent = component
  return (
    <>
      <PageComponent />
    </>
  )
}

export default Page
