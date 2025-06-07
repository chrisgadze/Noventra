import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = {firstName : 'Chris', lastName : 'Gadze', email : 'gadzechris001@gmail.com'}
  
  return (
    <section className='home'>
     <div className = "home-content">
      <header className=''>
        <HeaderBox 
        type ="greeting"
        title ="Welcome!" 
        user = {loggedIn?.firstName || "Guest"}
        subtext = " Access and manage your account and transations efficiently"       
        />

        <TotalBalanceBox 
        accounts = {[]}
        totalBanks = {1}
        totalCurrentBalance = {1250.45}
      />
      </header>
      
     </div>
     <RightSidebar 
          user = {loggedIn}
          transations = {[]}
          banks = {[{currentBalance: 123.4}, {currentBalance: 500}]}/>
    </section>
  )
}

export default Home