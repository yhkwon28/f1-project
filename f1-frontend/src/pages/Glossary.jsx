// src/pages/Glossary.jsx
const terms = [
    { term: 'DRS (Drag Reduction System)', description: '추월을 돕기 위해 리어윙을 열어 공기저항을 줄이는 장치. 특정 구간(DRS존)에서, 앞차와 1초 이내로 붙었을 때만 사용 가능.' },
    { term: '세이프티카 (Safety Car)', description: '사고나 위험 상황 시 트랙에 투입되어 차량들을 페이스카 뒤로 정렬시키는 차량. 이 동안 추월 금지.' },
    { term: '버추얼 세이프티카 (VSC)', description: '실제 차량 투입 없이 모든 차량에 속도 제한을 거는 시스템. 경미한 사고 시 사용.' },
    { term: '피트스톱 (Pit Stop)', description: '타이어 교체나 차량 점검을 위해 피트레인에 들어가는 것. 평균 2~3초 내외로 타이어를 교체.' },
    { term: '언더컷 (Undercut)', description: '상대보다 먼저 피트스톱을 해서 새 타이어의 그립으로 트랙 위 상대를 추월하는 전략.' },
    { term: '오버컷 (Overcut)', description: '상대보다 늦게 피트스톱을 해서 더 오래 빠른 타이어로 달리며 이득을 보는 전략.' },
    { term: '그리드 페널티 (Grid Penalty)', description: '규정 위반이나 부품 교체 초과로 인해 다음 레이스 출발 위치가 뒤로 밀리는 페널티.' },
    { term: '폴 포지션 (Pole Position)', description: '예선(퀄리파잉)에서 가장 빠른 기록을 낸 드라이버가 서는 그리드 맨 앞자리.' },
    { term: '타이어 컴파운드', description: '소프트(빨강)/미디엄(노랑)/하드(흰색)로 나뉘는 드라이 타이어, 인터미디에이트(초록)/웻(파랑)은 우천용.' },
    { term: '스프린트 레이스 (Sprint)', description: '일부 레이스 주말에 열리는 짧은 레이스로, 별도 포인트를 부여하고 본 레이스 그리드에 영향을 줌.' },
];

function Glossary() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">F1 용어집</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {terms.map((item) => (
                    <div key={item.term} className="bg-gray-100 rounded-lg p-4">
                        <h2 className="font-bold text-red-600 mb-1">{item.term}</h2>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Glossary;