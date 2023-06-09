const testServer = async () => {
  const response = await fetch('https://server-ten-opal.vercel.app', {
    credentials: 'include'
  })
  const data = await response.json()
  return data as {
    msg: string
    cook: string
    sess: string
  }
}

const Home = async () => {
  const serverResponse = await testServer()

  return (
    <main>
      <h2>Page 1</h2>

      <section>
        <p>Message: {serverResponse.msg}</p>
        <p>Cookie: {serverResponse.cook}</p>
        <p>Session: {serverResponse.sess}</p>
      </section>
    </main>
  )
}

export default Home
