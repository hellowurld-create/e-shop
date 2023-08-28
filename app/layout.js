import { ToastContainer } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
import './globals.css'

export const metadata = {
  title: 'E-shop',
  description: 'Generated by Me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}