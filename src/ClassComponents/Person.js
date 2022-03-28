import React from "react";

function Person(data) {
  return (
    <div>
      <h2>
        i am {data.name}. i am {data.age} years old. i know {data.skills}
      </h2>
    </div>
  );
}

export default Person;
