"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();

  // useEffect를 사용하여 페이지 이동을 처리
  useEffect(() => {
    router.replace('/i/flow/login');
  }, [router]); // 의존성 배열에 router를 추가하여 router가 변경될 때만 실행되도록

  return (
    <Main />
  );
}
