'use client'


import revalidate from "@/utils/server/revalidate";
import {Button} from "antd";

type Props = {
    tag: string
}

export default function RevalidateButton({ tag }: Props) {
    const handleClick = async () => {
        const res = await revalidate(tag)
    }
    return <Button onClick={handleClick}>캐시 비우기</Button>
}
