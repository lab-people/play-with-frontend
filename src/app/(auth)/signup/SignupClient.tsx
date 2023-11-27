'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";
import Loader from "../../../components/loader/Loader";
import {Button, DatePicker, Divider, Form, Input, Select} from "antd";
import Link from "next/link";
import {genderOpts} from "../../../utils/client/options";
import styles from '../Auth.module.scss';
import dayjs from "dayjs";
import {saveUser} from "../../../api/userApi";

export default function SignupClient() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [nickName, setNickName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setIsConfirmPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const registerUser = async (e: any) => {
        e.preventDefault();
        const user = {
            name: name,
            birth: birth,
            email: email,
            gender: gender,
            nickName: nickName,
            password: password
        }
        if (password !== confirmPassword) {
            alert("비밀번호 불일치");
            return;
        }
        
        const result: any = await saveUser(user);
        console.log(result, '회원가입 결과')
        if(result.message.includes("성공")) {
            alert("회원가입 성공");
            router.push("/");
        }
        setIsLoading(false);
    }

    return (<>
            {isLoading && (<Loader basic={true}/>)}
            <section className={styles.page}>
                <div className={styles.container}>
                    <h2>회원가입</h2>
                    <Form className={styles.form}>
                        이름
                        <Input
                            name={"name"}
                            placeholder={"이름"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        이메일
                        <Input
                            name={"email"}
                            placeholder={"아이디(이메일)"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        닉네임
                        <Input
                            name={"nickName"}
                            placeholder={"닉네임"}
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                        />
                        생년월일
                        <DatePicker onChange={(e) =>{
                            const birth = dayjs(e).format('YYYYMMDD');
                            setBirth(birth);
                        }}/>
                        성별
                        <Select onChange={(e) => setGender(e)} options={genderOpts}>

                        </Select>
                        비밀번호
                        <Input
                            name={"password"}
                            placeholder={"비밀번호"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        비밀번호 확인
                        <Input
                            name={"password"}
                            placeholder={"비밀번호 확인"}
                            value={confirmPassword}
                            onChange={(e) => setIsConfirmPassword(e.target.value)}
                        />
                        <Button
                            onClick={registerUser}
                        >
                            회원가입
                        </Button>
                        <Divider/>

                    </Form>
                </div>
            </section>
        </>)
}