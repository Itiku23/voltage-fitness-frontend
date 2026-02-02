import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import BookSession from "./pages/BookSession";
import PersonalTraining from "./pages/PersonalTraining";
import OnlineCoaching from "./pages/OnlineCoaching";
import AthleteConditioning from "./pages/AthleteConditioning";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* GLOBAL LAYOUT */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/online-coaching" element={<OnlineCoaching />} />
          <Route path="/athlete-conditioning" element={<AthleteConditioning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
