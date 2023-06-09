import Header from './components/Header/Header'

export const metadata = {
  title: 'Next 13',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
