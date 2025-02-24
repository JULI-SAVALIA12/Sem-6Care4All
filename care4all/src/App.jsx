import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/style.css'
import Home from './pages/Home'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Pincode from './components/zip/Pincode'
import Childcareform from './components/Childcareform/Childcareform'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Childcare from './pages/Childcare'
import Petcare from './pages/Petcare'
import Seniorcare from './pages/Seniorcare'
import ServiceSelection from './components/services/ServiceSelection'
import FindJobChild2 from './components/Childcareform/FindJobChild2'
import Pricing from './components/Childcareform/Pricing'
import Premium from './components/Premium'
import FindingMatches from './components/FindingMatches'
import SeniorFindJob from './components/SeniorFindJob/SeniorFindJob'
import PetFindJob from './components/PetcareFindJob/PetFindJob'
import PersonalTutorFindJob from './components/PersonalTutorFindJob/PersonalTutorFindJob'
import HousekeepingFindJob from './components/HousekeepingFindJob/HousekeepingFindJob'
import PhysiotherapyJobForm from './components/Physiotherapy/PhysiotherapyJobForm'
import HireSeniorCareForm from './components/Seniorcareform/HireSeniorCareForm'
import HirePetCare from './components/PetcareFindJob/HirePetCare'
import HireHousekeeping from './components/HousekeepingFindJob/HireHousekeeping'
import HirePersonalTutor from './components/PersonalTutorFindJob/HirePersonalTutor'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/pincode" element={<Pincode/>}/>
        <Route path="/childcareform" element={<Childcareform/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/Childcare" element={<Childcare/>}/>
        <Route path="/Petcare" element={<Petcare/>}/>
        <Route path="/Seniorcare" element={<Seniorcare/>}/>
        <Route path="/ServiceSelection" element={<ServiceSelection/>}/>
        <Route path="/FindJobChild2" element={<FindJobChild2/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Premium" element={<Premium/>}/>
        <Route path="/FindingMatches" element={<FindingMatches/>}/>
        <Route path="/SeniorFindJob" element={<SeniorFindJob/>}/>
        <Route path="/PetFindJob" element={<PetFindJob/>}/>
        <Route path="/PersonalTutorFindJob" element={<PersonalTutorFindJob/>}/>
        <Route path="/HousekeepingFindJob" element={<HousekeepingFindJob/>}/>
        <Route path="/PhysiotherapyJobForm" element={<PhysiotherapyJobForm/>}/>
        <Route path="/HireSeniorCareForm" element={<HireSeniorCareForm/>}/>
        <Route path="/HirePetCare" element={<HirePetCare/>}/>
        <Route path="/HireHousekeeping" element={<HireHousekeeping/>}/>
        <Route path="/HirePersonalTutor" element={<HirePersonalTutor/>}/>
        <Route path="/HirePetCare" element={<HirePetCare/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
