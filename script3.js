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
const resultMap = {
    lion: {
        img: "img/lion.png",
        desc: `
        <strong>🦁 사자형 — 자기효능감 기반의 즉각적 실행가</strong><br>
        직접 해보고 문제를 해결하며 배우는 스타일입니다. 작은 성공을 반복적으로 경험하면서 자기효능감이 강화되는 유형으로, 빠른 시도와 높은 끈기가 특징입니다.
        <br><strong> - 어떤 유형? : </strong> Bandura의 '성공경험(enactive mastery)'과 연결 — 행동 발화성이 높아요.
        <br><strong> - 실천 포인트 : </strong> 과제를 세분화해 조기 성공을 설계하고, 즉각적·구체적 피드백을 제공하면 능력이 더 빠르게 발현됩니다.
        `
    },
    giraffe: {
        img: "img/giraffe.png",
        desc: `
        <strong>🦒 기린형 — 관찰과 모방 중심 실행가</strong><br>
        다른 사람의 행동을 세심하게 관찰하고, 전략을 배운 후 자신의 방식으로 적용합니다. 관찰 후 곧바로 실천 계획을 세우고 단계적으로 시도하는 것을 선호합니다.
        <br><strong> - 어떤 유형? : </strong> Bandura의 '대리경험(vicarious experience)'과 연결 — 모델링과 관찰 학습을 통해 자기효능감을 높입니다.
        <br><strong> - 실천 포인트 : </strong> 긍정적 롤모델을 설정하고, 관찰한 행동을 작은 단계로 실습하며 자신의 행동에 적용하면 효과가 극대화됩니다.
        `
    },
    otter: {
        img: "img/otter.png",
        desc: `
        <strong>🐬 수달형 — 환경 적응형 실행가</strong><br>
        주변 환경과 상황을 파악하며, 조건에 맞게 행동을 조정하고 전략적으로 실행합니다. 변화가 많은 상황에서도 유연하게 대응하며 목표 달성을 시도합니다.
        <br><strong> - 어떤 유형? : </strong> Bandura의 '상호결정론(reciprocal determinism)'과 연결 — 환경과 상호작용하며 자기효능감을 실현합니다.
        <br><strong> - 실천 포인트 : </strong> 변화가 많은 상황에서 적응 전략을 세우고, 팀과 협력하여 행동 계획을 구체적으로 실행하면 능력 발현이 높아집니다.
        `
    },
    owl: {
        img: "img/owl.png",
        desc: `
        <strong>🦉 올빼미형 — 계획적·성찰적 실행가</strong><br>
        행동을 계획하고 자기 행동을 조절하며, 전략적으로 실행하는 유형입니다. 관찰과 성찰을 통해 실행 전 준비를 충분히 하고, 계획에 따라 체계적으로 시도합니다.
        <br><strong> - 어떤 유형? : </strong> Bandura의 '자기조절(self-regulation)'과 연결 — 계획과 조절을 통해 자기효능감을 강화합니다.
        <br><strong> - 실천 포인트 : </strong> 목표를 세분화하고 계획대로 실천하며, 실행 후 결과를 분석하고 피드백을 반영하면 학습과 행동 능력이 향상됩니다.
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
    document.querySelector(".start").style.display="none";
    document.querySelector(".question").style.display="block";
    next();
}

// 다음 질문
function next(){
    if(num > Object.keys(q).length){
        showResult();
        return;
    }

    const currentQuestion = q[num];
    document.querySelector(".progress-bar").style.width = `calc(100/${Object.keys(q).length}*${num}%)`;
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
    document.querySelector(".question").style.display="none";
    document.querySelector(".result").style.display="block";

    const scores = {
        lion: parseFloat(document.getElementById("lion").value),
        giraffe: parseFloat(document.getElementById("giraffe").value),
        otter: parseFloat(document.getElementById("otter").value),
        owl: parseFloat(document.getElementById("owl").value)
    };

    // 최고 점수 1개 랜덤 처리 (동점일 경우)
    let maxScore = Math.max(...Object.values(scores));
    let candidates = Object.keys(scores).filter(k => scores[k] === maxScore);
    let maxAnimal = candidates[Math.floor(Math.random() * candidates.length)];

    const nameMap = {
        lion: "사자",
        giraffe: "기린",
        otter: "수달",
        owl: "올빼미"
    };

    document.getElementById("userResult").innerText = `${userName}님의 동물 유형은:`;
    document.getElementById("resultText").innerText = nameMap[maxAnimal];
    document.getElementById("resultImage").src = resultMap[maxAnimal].img;
    document.getElementById("resultDesc").innerHTML = resultMap[maxAnimal].desc;
    document.getElementById("hashtags").innerText = hashtagMap[maxAnimal];
}
