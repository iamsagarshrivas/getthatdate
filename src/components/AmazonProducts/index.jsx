import { parse } from "marked";
import React, { memo, useRef, useEffect } from "react";

function Products({ data }) {
  const counter = useRef(0);

  useEffect(() => {
    counter.current += 1;
    console.log("Rendered " + counter.current + " times");
  });

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        {data.map((item) => (
          <div key={item._id} className="col-sm-12 col-md-5 jumbotron">
            <a href={item.src} className="d-flex justify-content-start">
              <iframe
                src={item.src}
                frameborder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                style={{ minHeight: 240, minWidth: 120 }}
              ></iframe>
              <span
                className="text-secondary"
                dangerouslySetInnerHTML={{
                  __html: parse(item?.description || ""),
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Products);
