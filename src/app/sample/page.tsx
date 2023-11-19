import SampleClient from "@/app/sample/SampleClient";
import RevalidateButton from "@/components/revalidateButton/RevalidateButton";
import {getCurrentWeather} from "@/utils/server/getCurrentWeather";
import {getTime} from "@/utils/server/getTime";
import Link from "next/link";
import styles from './Sample.module.scss';

export default async function Test() {
    const res = await getCurrentWeather('seoul');
    console.log(res.current.condition.text);
    const time = await getTime(res.location.tz_id);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h5>1. Sample Client Component</h5>
                <SampleClient/>
            </div>

            <div  className={styles.container}>
                <h5>2. External API call test</h5>

                A. 날씨 api 호출
                <h4>서울의 날씨</h4>
                <p>time-zone: {res.location.tz_id}</p>
                <span>
                서울의 날씨: {res.current.condition.text}
            </span>
                <br/>
                <br/>

                B. 시간 api 호출로 테스트한 fetch 후 캐싱된 데이터 재검증 (revalidate)
                <br/>

                1) 그냥 새로 고침하면 캐싱된 데이터가 보여짐 (새로운 시간x)
                <br/>
                2)캐시 비우기 버튼 클릭 후 새로 고침하면 새로운 시간이 보여짐
                <br/>
                <RevalidateButton tag="time"/>
                <h3>{time.dateTime}</h3>
                <br/>
                (참고)
                <Link
                    href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating">
                    Next 공식홈페이지 (Data Fetching, Caching, and Revalidating)
                </Link>
            </div>
        </div>
    )
}