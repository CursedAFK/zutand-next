import Button from './Button'

const testServer = async () => {
  const response = await fetch('https://server-ten-opal.vercel.app/set')
  const data = await response.json()
  console.log(data)
  return data as {
    msg: string
    cook: string
    sess: string
  }
}

const Page2 = async () => {
  const serverResponse = await testServer()

  return (
    <main>
      <h2>Page 2</h2>

      <section>
        <p>Message: {serverResponse.msg}</p>
        <p>Cookie: {serverResponse.cook}</p>
        <p>Session: {serverResponse.sess}</p>
      </section>

      <Button cook={serverResponse.cook} />
    </main>
  )
}

export default Page2
