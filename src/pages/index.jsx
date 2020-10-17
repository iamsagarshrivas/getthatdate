import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import moment from "moment";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import axios from "../utils/axios";
import AmazonProducts from "../components/AmazonProducts";

const Clock = dynamic(() => import("../components/Clock"), {
  ssr: false,
});

const Home = ({ data, count }) => {
  const [dateNtime, setDateNtime] = useState(moment());
  const { push } = useRouter();

  useEffect(() => {
    const timerId = setInterval(() => {
      setDateNtime(moment());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <div className="row my-5 d-flex justify-content-center">
        <Clock momentObj={dateNtime} />
      </div>
      {false && (
        <div className="row my-5 d-none">
          <div className="col-lg-4 col-md-4 col-sm-12 my-1">
            <button
              onClick={(e) => push("/date-calculation")}
              className="border-0 btn btn-lg btn-light shadow-lg w-100"
            >
              <span>
                <i className="fa fa-calendar-check-o mx-2" />
                Date Calculation
              </span>
            </button>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-1">
            <button
              onClick={(e) => push("/time-calculation")}
              className="border-0 btn btn-lg btn-light shadow-lg w-100"
            >
              <span>
                <i className="fa fa-clock-o mx-2" />
                Time Calculation
              </span>
            </button>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 my-1">
            <button
              onClick={(e) => push("/date-time-calculation")}
              className="border-0 btn btn-lg btn-light shadow-lg w-100"
            >
              <span>
                <i className="fa fa-calculator mx-2" />
                Date & Time Calculation
              </span>
            </button>
          </div>
        </div>
      )}
      <div className="d-flex jumbotron justify-content-center my-5 row">
        <span
          className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4"
          style={{ fontSize: "3rem" }}
        >
          {dateNtime.format("MMMM Do YYYY")}
        </span>
        <span
          className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4"
          style={{ fontSize: "3rem" }}
        >
          {dateNtime.format("HH:mm:ss")}
        </span>
        <span
          className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4"
          style={{ fontSize: "3rem" }}
        >
          {dateNtime.format("dddd")}
        </span>
      </div>
      <div className="row">
        <div className="col-12">
          <AmazonProducts data={data} />
        </div>
      </div>

      {/* <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </div> */}
    </>
  );
};

Home.getInitialProps = async function () {
  try {
    const [data, count] = await Promise.all([
      axios.get("/products", {
        params: {
          //   _start: 0,
          //   _limit: 10,
        },
      }),
      axios.get("/products/count"),
    ]);
    return { data, count };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
