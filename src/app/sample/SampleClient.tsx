'use client';

import {useState} from "react";
import {useRecoilValue} from "recoil";
import {valueState} from "@/atom";
import {Button, Divider, Input} from "antd";

export default function SampleClient() {
    const [value, setValue] = useState<string>("init");
    const exampleRecoilValue = useRecoilValue(valueState);

    return (
        <>
            A. 상태관리
            <br/>
            1) useState 상태값 : {value}
            <br/>
            2) recoil 상태값: {exampleRecoilValue}

            <Divider />
            B. antd 컴포넌트
            <br/>
            1) Input
            <Input />

            2) Button
            <br/>
            <Button type={"primary"}>버튼</Button>
        </>
    )

}