'use client';
import {useState} from "react";
import Loader from "@/components/loader/Loader";
import styles from "@/app/(auth)/Auth.module.scss";

import {Button, Form, Input} from "antd";
import {login} from "@/api/userApi";
import {IResponse} from "@/app/(auth)/login/interface";

export default function LoginClient() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const loginUser = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const loginUser = {
            username: name,
            password: password
        }

        const data: IResponse = await login(loginUser);

        if(data.message.includes("성공")) {
            alert("로그인 성공");
            setToken(data.result.token);
        }
        setIsLoading(false)
    }

    return (<>
        {isLoading && (<Loader basic={true}/>)}
        <section className={styles.page}>
            <div className={styles.container}>
                <h2>로그인</h2>
                로그인 이후 토큰: {token}
                <Form className={styles.form}>
                    이름
                    <Input
                        name={"name"}
                        placeholder={"이름"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    비밀번호
                    <Input
                        name={"password"}
                        placeholder={"비밀번호"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    비밀번호 확인

                    <Button
                        onClick={loginUser}
                    >
                        로그인
                    </Button>

                </Form>
            </div>
        </section>
    </>)
}