import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { UserInfo } from "./types";

function Homepage() {
  const [randomdata, setRandomData] = useState<UserInfo>();
  const [page, setNextPage] = useState<number>(10);

  useEffect(() => {
    async function getRandomUser(page: number) {
      try {
        const data = await axios.get<UserInfo>(
          `https://randomuser.me/api/?results=${page}&seed=abc`
        );

        setRandomData(data.data);
        console.log(randomdata, page);
        return data.data.results;
      } catch (err) {
        console.log("error: ", err);
      }
    }
    getRandomUser(page);
  }, [page]);
  if (!randomdata) {
    return <>....Loading</>;
  }
  return (
    <>
      <div className="">
        <div className="h-56 grid grid-cols-3 gap-4 content-center">
          {/* <pre>{JSON.stringify(randomdata, null, 2)}</pre> */}
          {randomdata?.results?.map((user, i) => (
            <Fragment key={i}>
              <div>
                {user?.name.first}
                {user.name.last}
              </div>
            </Fragment>
          ))}
        </div>
        <button onClick={() => setNextPage(page + 10)}>Load More</button>
      </div>
    </>
  );
}

export default Homepage;
