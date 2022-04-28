import { ReactNode } from "react";
import Navbar from "./Navbar";

interface PropsChildrenContainer {
  children?: ReactNode
}

const Container = ({ children }: PropsChildrenContainer) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="p-5 md:px-28">
          {children}
        </div>
      </main>
      <footer>
        <div className="w-full h-40 px-20">
          test
        </div>
      </footer>
    </div>
  )
}

export default Container
