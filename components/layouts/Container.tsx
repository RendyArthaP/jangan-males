import Link from "next/link";
import { ReactNode } from "react";

interface PropsChildrenContainer {
  children?: ReactNode
}

const Container = ({ children }: PropsChildrenContainer) => {
  return (
    <div>
      <header className="w-full bg-green h-14">
        <div className="max-w-7xl mx-auto px-20 h-full">
          <div className="flex flex-row justify-between h-full items-center">
            <Link href='/'>
              Travel
            </Link>
            <div>
              <Link href='/'>
                <span className="mx-4">
                  Places
                </span>
              </Link>
              <Link href='/'>
                <span className="mx-4">
                  Blogs
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="bg-green w-full h-40 px-20">
          test
        </div>
      </footer>
    </div>
  )
}

export default Container
