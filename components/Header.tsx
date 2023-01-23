import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <header className="fixed top-10 left-[90px] right-[90px] flex justify-between">
        <div className="flex items-center">
          <Image
            src={"/assets/logo.svg"}
            width={133}
            height={45}
            alt={"Logo"}
          />
          <nav className="ml-[50px]">
            <ul>
              <li className="space-x-[30px]">
                <Link href="/" className="text-zinc-500">
                  Featured
                </Link>
                <Link href="/" className="text-zinc-500">
                  How it Work
                </Link>
                <Link href="/" className="text-zinc-500">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* KANAN */}
        <div className="flex items-center">
          <Link href="/" className="text-zinc-500  px-8 py-3">
            Contact Us
          </Link>
          <Link href="/" className="text-white px-8 py-3 bg-brand rounded-md">
            Join Us
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header