import React from "react";

// props -> movie name, summary, img

const Summary = (props) => {
  const { name, summary, img } = props;
  console.log("summary:-", summary);

  return (
    <div className="text-center">
      <h2>{name}</h2>
      <img alt="movie" width={"70%"} src={img} />
      <div className="summary">
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          className="mt-4"
        ></div>
      </div>
    </div>
  );
};

export default Summary;
