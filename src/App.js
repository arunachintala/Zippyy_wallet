import React from 'react'
import Navbar from '../src/Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F5F8F8' }}>
        <Sidebar />
        <p style={{ position: 'absolute', top: '84px', left: '118px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', lineHeight: '36px', color: '#121114' }}>Zippyy wallet configuration</p>

        <div style={{ width: '1350px', height: '864px', position: 'absolute', top: '144px', left: '76px', borderRadius: '16px', backgroundColor: '#FFFFFF' }}></div>

        <Page1 />
        <Page2 />

      </div>
    </div>
  )
}
export default App;