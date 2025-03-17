import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function DefaultLayout() {
  return (
    <div className="bg-secondary-subtle d-flex flex-column min-vh-100">
      <Header />
      <main className="container-fluid flex-grow-1">
        <Outlet />
      </main >

      <Footer />
    </div>
  )
}