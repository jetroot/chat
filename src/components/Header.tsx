import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />

        <div className='flex-1 flex items-center justify-end space-x-4'>
          {/* lang */}

          {/* session */}

          {/* dark mode */}
          <DarkModeToggle />

          {/* user button */}
          <UserButton />
        </div>
      </nav>
    </header>
  )
}

export default Header