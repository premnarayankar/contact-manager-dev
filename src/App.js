import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const ContactInput = lazy(() => import("./components/ContactInput"));
const ContactList = lazy(() => import("./components/ContactList"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            className="bg-success d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <span className="display-4 fw-bold text-light">
              CONTACT MANAGER
            </span>
          </div>
        }
      >
        <Navbar />
        <ContactInput />
        <ContactList />
      </Suspense>
    </>
  );
}

export default App;
