import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Ad from "../Ad";
import classes from "./Layout.module.css";
import classNames from "classnames";

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>Calculate Date and time easily</title>
      </Head>
      <header className="sticky-top shadow border-0">
        <Header />
      </header>
      <main
        style={{ minHeight: "100vh" }}
        className={classNames("container", classes.main)}
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
