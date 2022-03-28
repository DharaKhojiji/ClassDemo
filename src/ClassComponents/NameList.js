import Person from "./Person";

const NameList = () => {
  const person = [
    {
      id: 1,
      name: "dhara",
      age: 30,
      skills: "react",
    },

    {
      id: 1,
      name: "dhara",
      age: 30,
      skills: "react",
    },
    {
      id: 1,
      name: "dhara",
      age: 30,
      skills: "react",
    },
  ];
  const pesrsonList = person.map((element) => <Person data={element}></Person>);
//   const names = ["dhara", "karan", "khyati"];
  //   const NameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>

        {
            person.map((x)=> {
                return (
                <div>
                <div>{x.age} </div>
                <div>{x.name}</div>
                </div>
                )
            })
        }
    
      {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
      {/* {names.map(name => <h2>{name}</h2>)} */}
      {pesrsonList}
    </div>
  );
};
export default NameList;
