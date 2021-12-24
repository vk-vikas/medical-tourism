
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./components/pages/Home";
import About from "./components/pages/Hosp";
import Help from './components/pages/Treatment';
import  ContactUS  from "./components/pages/ContactUs";
import Assistance from "./components/pages/Assistance";
import Whyus from "./components/pages/Whyus";
import './App.css';
import Hosp from "./components/pages/Hosp";
import Treatment from "./components/pages/Treatment";

/* */
import HealthCare from "./components/pages/treatment_pages/HealthCare";
import CosmeticSurgery from "./components/pages/treatment_pages/CosmeticSurgery";
import IvfTreatment from "./components/pages/treatment_pages/IvfTreatment";
import DentalCare from "./components/pages/treatment_pages/DentalCare";
import Gynaecology from "./components/pages/treatment_pages/Gynaecology";
import HealthCheckUp from "./components/pages/treatment_pages/HealthCheckUp";
import OrthopaedicSurgery from "./components/pages/treatment_pages/OrthopaedicSurgery";
import BabyDelivery from "./components/pages/treatment_pages/BabyDelivery";
import BoneMarrowTransplant from "./components/pages/treatment_pages/BoneMarrowTransplant";
import JointReplacementSurgery from "./components/pages/treatment_pages/JointReplacementSurgery";
import NeuroSurgery from "./components/pages/treatment_pages/NeuroSurgery";
import BreastImplants from "./components/pages/treatment_pages/BreastImplants";
import BreastReductionSurgery from "./components/pages/treatment_pages/BreastReductionSurgery";
import DiabetesTreatment from "./components/pages/treatment_pages/DiabetesTreatment";
import EntCareIndia from "./components/pages/treatment_pages/EntCare";
import EyeCare from "./components/pages/treatment_pages/EyeCare";
import FatGraftsPlasticSurgery from "./components/pages/treatment_pages/FatGraftsPlasticSurgery";
import Footsurgery from "./components/pages/treatment_pages/FootSurgery";
import SkinTreatment from "./components/pages/treatment_pages/SkinTreatment";
import HerniaOperation from "./components/pages/treatment_pages/HerniaOperation";
import KidneyTransplant from "./components/pages/treatment_pages/KidneyTransplantation";
import Liposuction from "./components/pages/treatment_pages/Liposuction";
import LiverTransplant from "./components/pages/treatment_pages/LiverTransplant";
import ObesitySurgery from "./components/pages/treatment_pages/ObesitySurgery";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/whyus" component={Whyus} />
            <Route path="/hospital" component={Hosp} />
            <Route path="/treatment" component={Treatment} />
            <Route path="/contactus" component={ContactUS} />
            <Route path="/assistance" component={Assistance} />

            {/*  */}
            <Route path="/health_care" component={HealthCare} />
            <Route path="/cosmetic_surgery" component={CosmeticSurgery} />
            <Route path="/ivf_treatment" component={IvfTreatment} />
            <Route path="/dental_care" component={DentalCare} />
            <Route path="/gynaecology" component={Gynaecology} />
            <Route path="/health_check_up" component={HealthCheckUp} />
            <Route path="/orthopaedic_surgery" component={OrthopaedicSurgery} />
            <Route path="/baby_delivery" component={BabyDelivery} />
            <Route path="/bone_marrow_transplant" component={BoneMarrowTransplant} />
            <Route path="/joint_replacement_surgery" component={JointReplacementSurgery} />
            <Route path="/neuro_surgery" component={NeuroSurgery} />
            <Route path="/breast_implants" component={BreastImplants} />
            <Route path="/breat_reduction_surgery" component={BreastReductionSurgery} />
            <Route path="/diabetes_treatment" component={DiabetesTreatment} />
            <Route path="/ent_care_india" component={EntCareIndia} />
            <Route path="/eye_care" component={EyeCare} />
            <Route path="/fat_grafts_plastic_surgery" component={FatGraftsPlasticSurgery} />
            <Route path="/foot_surgery" component={Footsurgery} />
            <Route path="/Skin_treatment" component={SkinTreatment} />
            <Route path="/hernia_operation" component={HerniaOperation} />
            <Route path="/kidney_transplant" component={KidneyTransplant} />
            <Route path="/liposuction" component={Liposuction} />
            <Route path="/liver_transplant" component={LiverTransplant} />
            <Route path="/obesity_surery" component={ObesitySurgery} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
