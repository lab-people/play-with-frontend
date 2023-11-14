'use client';

import {useState} from "react";
import {useRecoilValue} from "recoil";
import {valueState} from "@/atom";
import {Button, Input} from "antd";

export default function TestClient() {
    const [value, setValue] = useState<string>("init");
    const exampleRecoilValue = useRecoilValue(valueState);

    return (
        <>
            <div>{value}</div>
            <div>{exampleRecoilValue}</div>
            <Input />
            <Button type={"primary"}>버튼</Button>
        </>
    )

}