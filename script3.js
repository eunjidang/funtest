let num = 1;
let userName = "";

// 질문 6개 (부점수 적용)
const q = {
    1: {
        title: "회사에서 갑자기 새로운 프로그램을 쓰라고 하면, 나는?",
        A: { text: "일단 켜보고 이것저것 눌러보면서 직접 익힌다.", scores: {lion:1, owl:0.2} },
        B: { text: "유튜브 튜토리얼이나 동료가 쓰는 걸 먼저 본다.", scores: {giraffe:1, otter:0.2} }
    },
    2: {
        title: "같이 일하는 팀원이 같은 실수를 계속할 때, 나는?",
        A: { text: "바로 알려주고 어떻게 하면 좋을지 함께 얘기한다.", scores: {lion:0.8, otter:0.2} },
        B: { text: "왜 자꾸 실수가 생기는지 상황을 지켜보며 원인을 찾는다.", scores: {owl:1, giraffe:0.2} }
    },
    3: {
        title: "새로운 운동이나 취미(예: 클라이밍, 베이킹)를 배우게 된다면?",
        A: { text: "바로 도전해보고 몸으로 부딪히며 배운다.", scores: {lion:1, otter:0.2} },
        B: { text: "선생님이나 친구가 하는 걸 보면서 감을 잡는다.", scores: {giraffe:1, owl:0.2} }
    },
    4: {
        title: "계획대로 일이 안 풀릴 때, 나는?",
        A: { text: "주변 상황을 살펴보면서 뭐가 문제인지 원인을 찾는다.", scores: {otter:1, giraffe:0.2} },
        B: { text: "내가 할 수 있는 방법을 바꿔보면서 문제를 풀어간다.", scores: {owl:1, lion:0.2} }
    },
    5: {
        title: "팀플 회의에서 새로운 아이디어를 내야 한다면?",
        A: { text: "바로 떠오른 걸 꺼내놓고 같이 구체화해간다.", scores: {lion:1, otter:0.2} },
        B: { text: "다른 사람들이 뭐라고 하는지 먼저 듣고, 내 생각을 더한다.", scores: {giraffe:1, owl:0.2} }
    },
    6: {
        title: "시험이나 프로젝트 결과가 기대와 다를 때, 나는?",
        A: { text: "결과를 보고 '다음엔 이렇게 해보자!' 하며 방법을 바꾼다.", scores: {owl:1, lion:0.2} },
        B: { text: "내 실력뿐 아니라 상황·환경도 고려해서 다음 전략을 짠다.", scores: {otter:1, giraffe:0.2} }
    }
}

// 결과 맵
// 결과 맵 (모든 동물 사자형 스타일 통일)
const resultMap = {
    lion: {
        img: "img/lion.png",
        desc: `
<strong>🦁 사자형 — 자기효능감 기반의 즉각적 실행가</strong><br><br>
직접 해보고 문제를 해결하며 배우는 스타일입니다. 작은 성공을 반복적으로 경험하면서 자기효능감이 강화되는 유형으로, 빠른 시도와 높은 끈기가 특징입니다.
<br><br><strong> - 어떤 유형? : </strong> Bandura의 '성공경험'과 연결 — 행동 발화성이 높아요.
<br><strong> - 실천 포인트 : </strong> 과제를 세분화해 조기 성공을 설계하고, 즉각적·구체적 피드백을 제공하면 능력이 더 빠르게 발현됩니다.
`
    },
    giraffe: {
        img: "img/giraffe.png",
        desc: `
<strong>🦒 기린형 — 관찰과 모방 기반 전략 학습자</strong><br><br>
다른 사람의 행동과 전략을 주의 깊게 관찰하며 자기 방식으로 적용하는 유형입니다. 학습은 직접 경험뿐 아니라 모델링을 통한 간접 경험에서도 크게 향상됩니다. 자기효능감은 긍정적 롤모델을 통해 강화되며, 타인의 성공과 실수를 분석해 자신의 행동 계획에 반영하는 능력이 뛰어납니다.
<br><br><strong> - 어떤 유형? : </strong> Bandura의 '대리경험'과 연결 — 모델을 관찰하고 모방하며 자기효능감 발현.
<br><strong> - 실천 포인트 : </strong> 롤모델 행동 관찰과 분석을 반복하고, 배운 전략을 자신의 과제에 적용하면서 구체적 피드백을 받으면 학습 효과가 극대화됩니다.
`
    },
    otter: {
        img: "img/dolphin.png",
        desc: `
<strong>🐬 수달형 — 환경 적응형 협력 학습자</strong><br><br>
주변 환경과 상황을 민첩하게 읽고, 유연하게 행동하며 전략적으로 학습하는 유형입니다. 변화가 많은 상황에서 신속하게 적응하고, 협력과 조율을 통해 공동의 목표를 달성합니다. 경험과 환경 피드백을 통해 자기효능감이 발현되며, 다양한 상황 속에서 학습과 성장의 기회를 적극적으로 탐색합니다.
<br><br><strong> - 어떤 유형? : </strong> Bandura의 '상호결정론'과 연결 — 환경과 상호작용하며 자기효능감 발현.
<br><strong> - 실천 포인트 : </strong> 변화가 많은 환경에서 적응 전략과 협력 활동을 계획하고 실행하며, 피드백을 통해 학습 성과와 효능감을 극대화할 수 있습니다.
`
    },
    owl: {
        img: "img/owl.png",
        desc: `
<strong>🦉 올빼미형 — 자기조절 중심 전략 학습자</strong><br><br>
계획적 실행과 성찰을 통해 학습하는 유형입니다. 목표를 세분화하고 행동을 체계적으로 조절하며, 전략적 시도를 반복하면서 자기효능감을 강화합니다. 학습 과정에서 성찰과 피드백을 적극 활용하며, 자신의 행동과 성취를 분석하고 개선하는 능력이 뛰어납니다.
<br><br><strong> - 어떤 유형? : </strong> Bandura의 '자기조절'과 연결 — 자기 행동 계획과 조절로 자기효능감 강화.
<br><strong> - 실천 포인트 : </strong> 계획적 학습, 실행 후 성찰, 피드백 활용을 반복하면 목표 달성과 자기효능감 향상에 큰 도움이 됩니다.
`
    }
};

// 해시태그
const hashtagMap = {
    lion: "#자기효능감 #도전적 #행동중심 #실습형 #프로젝트리더",
    giraffe: "#관찰학습 #모방형 #전략적 #안정적 #협업지원",
    otter: "#환경적응 #유연함 #상호결정 #조화로운행동 #조건분석",
    owl: "#자기조절 #계획적 #성찰적 #전략적 #학습리더"
};

// 점수 추가
function addScore(scores){
    for(const key in scores){
        const input = document.getElementById(key);
        input.value = parseFloat(input.value) + scores[key];
    }
}

// 시작
function start() {
    userName = document.getElementById("name").value.trim();
    if(!userName){
        alert("이름을 입력해 주세요!");
        return;
    }
    document.querySelector(".start").style.display = "none";
    document.querySelector(".question").style.display = "block";
    next();
}

// 다음 질문
function next(){
    if(num > Object.keys(q).length){
        showResult();
        return;
    }

    const currentQuestion = q[num];
    document.querySelector(".progress-bar").style.width = `${(num / Object.keys(q).length) * 100}%`;
    document.getElementById("title").innerText = currentQuestion.title;
    document.getElementById("A").innerText = currentQuestion.A.text;
    document.getElementById("B").innerText = currentQuestion.B.text;
}

// 버튼 이벤트
document.getElementById("A").addEventListener("click", function(){
    addScore(q[num].A.scores);
    num++;
    next();
});
document.getElementById("B").addEventListener("click", function(){
    addScore(q[num].B.scores);
    num++;
    next();
});

// 결과 표시
function showResult(){
    document.querySelector(".question").style.display = "none";
    document.querySelector(".result").style.display = "block";

    const scores = {
        lion: parseFloat(document.getElementById("lion").value),
        giraffe: parseFloat(document.getElementById("giraffe").value),
        otter: parseFloat(document.getElementById("otter").value),
        owl: parseFloat(document.getElementById("owl").value)
    };

    let maxScore = Math.max(...Object.values(scores));
    let candidates = Object.keys(scores).filter(k => scores[k] === maxScore);
    let maxAnimal = candidates[Math.floor(Math.random() * candidates.length)];

    const nameMap = { lion: "사자", giraffe: "기린", otter: "수달", owl: "올빼미" };

    document.getElementById("userResult").innerText = `${userName}님의 동물 유형은:`;
    document.getElementById("resultText").innerText = nameMap[maxAnimal];
    document.getElementById("resultImage").src = resultMap[maxAnimal].img;
    document.getElementById("resultDesc").innerHTML = resultMap[maxAnimal].desc;

    // 해시태그 span 적용
    const hashtagContainer = document.getElementById("hashtags");
    hashtagContainer.innerHTML = "";
    hashtagMap[maxAnimal].split(" ").forEach(tag => {
        const span = document.createElement("span");
        span.innerText = tag;
        hashtagContainer.appendChild(span);
    });
}
