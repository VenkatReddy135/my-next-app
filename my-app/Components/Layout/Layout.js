import styles from "../Layout/Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
