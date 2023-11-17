'use client';
//에러 컴포넌트는 클라이언트 컴포넌트여야 함
import {useEffect} from "react";

type Props = {
    error: Error; reset: () => void;
}

export default function Error({error, reset}: Props) {
    useEffect(() => {
        console.error('----', error.message)
    }, []);

    return (
        <>
            <h1>에러페이지</h1>
            <button
                onClick={() => {
                    reset()
                }}
            >
                새로고침
            </button>
        </>
    )
}