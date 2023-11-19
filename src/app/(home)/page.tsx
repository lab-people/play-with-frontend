import {getCurrentWeather} from "@/utils/server/getCurrentWeather";
import {getTime} from "@/utils/server/getTime";
import RevalidateButton from "@/components/revalidateButton/RevalidateButton";

export default async function Home() {
  const res = await getCurrentWeather('seoul');
  console.log(res.current.condition.text);
  const time = await getTime(res.location.tz_id);

  console.log(time)
  return (
    <>
        <h1>서울의 날씨</h1>

        <h2>{res.location.tz_id}</h2>
        <span>
            {res.current.condition.text}
        </span>

        <RevalidateButton tag="time" />
        <h3>{time.dateTime}</h3>
    </>
  )
}
