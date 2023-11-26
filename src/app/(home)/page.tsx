import Link from "next/link";

export default async function Home() {

  return (
    <>
       HOME
        <br/>
        <Link href="/sample">샘플페이지 이동</Link>
        <br/>
        <Link href="/signup">회원가입 페이지 이동</Link>
        <br/>
        <Link href="/login">로그인 페이지 이동</Link>
    </>
  )
}
