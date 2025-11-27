import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import Pricing from "./components/Pricing";
import Complaints from "./components/Complaints";
import TermsConditions from "./components/TermsConditions";
import RefundPolicy from "./components/RefundPolicy";
import Disclosure from "./components/Disclosure";
import Disclaimer from "./components/Disclaimer";
import Grievance from "./components/Grievance";
import { Footer } from "./components/Footer";

// ⬇ Import wrapper layout
import SecondaryLayout from "./layouts/SecondaryLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // ⬇ All pages that must show Navbar2
  {
    path: "/contact-page",
    element: (
      <SecondaryLayout>
        <ContactPage />
      </SecondaryLayout>
    ),
  },
  {
    path: "/complaints",
    element: (
      <SecondaryLayout>
        <Complaints />
      </SecondaryLayout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <SecondaryLayout>
        <Pricing />
      </SecondaryLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <SecondaryLayout>
        <Services />
      </SecondaryLayout>
    ),
  },
  {
    path: "/terms",
    element: (
      <SecondaryLayout>
        <TermsConditions />
      </SecondaryLayout>
    ),
  },
  {
    path: "/refund",
    element: (
      <SecondaryLayout>
        <RefundPolicy />
      </SecondaryLayout>
    ),
  },
  {
    path: "/disclosure",
    element: (
      <SecondaryLayout>
        <Disclosure />
      </SecondaryLayout>
    ),
  },
  {
    path: "/disclaimer",
    element: (
      <SecondaryLayout>
        <Disclaimer />
      </SecondaryLayout>
    ),
  },
  {
    path: "/grievance",
    element: (
      <SecondaryLayout>
        <Grievance />
      </SecondaryLayout>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
