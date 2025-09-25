import React from 'react'
import WatchList from './WatchList'
import Summary from './Summary'
import Orders from './Orders'
import Holding from './Holding'
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'
import { Routes, Route } from "react-router-dom";
import GeneralContext, { GeneralContextProvider } from './GenralContext'

function Dashboard() {
  return (
    <>
        <div className='dashboard-container'>
          <GeneralContextProvider>
            <WatchList/>
          </GeneralContextProvider>
            
            <div className='content'>
                <Routes>
                    <Route exact path="/" element={<Summary/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/holdings" element={<Holding/>}/>
                    <Route path="/positions" element={<Positions/>}/>
                    <Route path="/funds" element={<Funds/>}/>
                    <Route path="/apps" element={<Apps/>}/>
                </Routes>
            </div>
        </div>
    </>
  )
}

export default Dashboard