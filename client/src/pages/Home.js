import Sidenav from "../components/Sidenav";
import Login from "./Login";

export default function Home() {
  let user = true
  return (
    <>
      {user ? <Sidenav/> : <Login/>}
    </>
  );
}
