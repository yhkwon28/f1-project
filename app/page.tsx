import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>F1 입문자 가이드</h1>
      <ul>
        <li><Link href="/standings/drivers">드라이버 스탠딩</Link></li>
        <li><Link href="/standings/constructors">컨스트럭터 스탠딩</Link></li>
        <li><Link href="/schedule">시즌 일정</Link></li>
      </ul>
    </main>
  );
}