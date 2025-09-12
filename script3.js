let num = 1;
let userName = "";

// 질문 6개 (반두라 SCT 기반)
const q = {
    1: {
        title: "새로운 연구 과제를 맡았을 때, 나는 어떻게 접근하는가?",
        A: { text: "직접 실험이나 시도를 통해 문제 해결 방법을 찾아낸다.", scores: {lion:1} },
        B: { text: "선행 연구와 사례를 먼저 관찰하고 전략을 참고한다.", scores: {giraffe:1} }
    },
    2: {
        title: "팀 프로젝트에서 예상치 못한 난관이 발생했을 때 나는…",
        A: { text: "자신감 있게 즉시 해결책을 시도한다.", scores: {lion:1} },
        B: { text: "팀원의 의견과 이전 경험을 살펴본 후 대응 전략을 세운다.", scores: {giraffe:1} }
    },
    3: {
        title: "동료가 실수했을 때, 나는 어떤 행동을 주로 하는가?",
        A: { text: "직접 도와주며 문제를 해결하도록 유도한다.", scores: {owl:1} },
        B: { text: "상황을 관찰하며 필요한 경우 간접적으로 피드백을 제공한다.", scores: {otter:1} }
    },
    4: {
        title: "새로운 기술이나 툴을 배울 때 나는…",
        A: { text: "직접 사용하며 시행착오를 통해 익힌다.", scores: {owl:1} },
        B: { text: "능숙한 사람의 시연을 관찰하고 따라 배운다.", scores: {giraffe:1} }
    },
    5: {
        title: "실패 경험을 겪었을 때, 나는 주로 어떻게 행동하는가?",
        A: { text: "실패 원인을 분석하고 전략을 수정하여 다시 도전한다.", scores: {owl:1} },
        B: { text: "상황과 환경 요인을 평가하며 대응 방식을 조정한다.", scores: {otter:1} }
    },
    6: {
        title: "학습이나 연구 계획을 세울 때, 나는 무엇을 더 중시하는가?",
        A: { text: "내 자신의 계획과 목표 달성을 위한 자기조절 전략", scores: {owl:1} },
        B: { text: "환경, 조건, 주변 리소스를 고려한 적응 전략", scores: {otter:1} }
    }
};

// 결과 맵 (전문적, SCT 기반)
const resultMap = {
    사자: {
        img: "img/lion.png",
        desc: `🦁 사자형: 자기효능감 중심 행동자
사자형은 높은 자기효능감을 기반으로 환경에 주도적으로 개입하며 도전적인 과제에도 적극적입니다.
- 행동학습: 직접 경험과 시도를 통한 학습 선호
- 사회인지적 특성: 환경과 상호작용하며 결과를 학습에 반영
- 전략: 목표 설정과 자기조절을 통한 문제 해결
\n🔹 사자형인 나는요! :
경험적 학습과 자기효능감의 상관성이 높으며, 실습형 연구나 프로젝트 수행에서 두각을 나타냅니다.`
    },
    기린: {
        img: "img/g.png",
        desc: `🦒 기린형: 관찰 및 모델 기반 학습자
기린형은 다른 사람의 행동과 결과를 관찰하며 전략적으로 대응합니다.
- 행동학습: 모방학습과 관찰을 통한 전략 수립
- 사회인지적 특성: 주변 환경과 타인 행동에 민감
- 전략: 사례 학습과 안전한 실천
\n🔹 기린형인 나는요! :
관찰학습과 모방 전략의 활용이 높으며, 안정적인 환경과 협력 상황에서 학습 성과가 강화됩니다.`
    },
    수달: {
        img: "img/ot.png",
        desc: `🦦 수달형: 환경 적응형 학습자
수달형은 상황과 조건을 분석하고, 환경에 맞게 행동을 조정합니다.
- 행동학습: 조건과 맥락 분석 후 유연한 행동 선택
- 사회인지적 특성: 상호결정론적 행동 조정
- 전략: 상황 분석 후 전략적 행동
\n🔹 수달형인 나는요! :
변화하는 환경에서 적응력이 높고, 예측 불가능한 상황에서도 최적 학습 전략을 도출할 수 있습니다.`
    },
    올빼미: {
        img: "img/ow.png",
        desc: `🦉 올빼미형: 자기조절·성찰적 학습자
올빼미형은 계획적이고 전략적 행동을 선호하며, 자신의 학습과 행동을 성찰합니다.
- 행동학습: 성찰적 재도전과 전략적 문제 해결
- 사회인지적 특성: 메타인지와 자기조절 능력 활용
- 전략: 계획 → 실행 → 피드백 반영
\n🔹 올빼미형인 나는요! :
자기조절과 메타인지 능력이 우수하여, 장기적 학습 목표 달성에 최적화된 행동 패턴을 보입니다.`
    }
};

// 해시태그
const hashtagMap = {
    사자: "#자기효능감 #도전적 #행동중심 #문제해결 #리더십 #사회인지",
    기린: "#관찰학습 #모방 #환경적응 #전략적 #사회인지 #팀워크",
    수달: "#환경분석 #유연함 #상호결정 #적응형 #행동조정",
    올빼미: "#자기조절 #계획적 #성찰적 #전략적학습 #메타인지 #사회인지"
};

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

// 점수 추가
function addScore(scores){
    for(const key in scores){
        const input = document.getElementById(key);
        input.value = parseInt(input.value)+scores[key];
    }
}

// 다음 질문 또는 결과
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
    num++;
}

// 버튼 이벤트
document.getElementById("A").addEventListener("click", function(){
    addScore(q[num-1].A.scores);
    next();
});
document.getElementById("B").addEventListener("click", function(){
    addScore(q[num-1].B.scores);
    next();
});

// 결과 표시
function showResult(){
    document.querySelector(".question").style.display="none";
    document.querySelector(".result").style.display="block";

    const scores = {
        사자: parseInt(document.getElementById("lion").value),
        기린: parseInt(document.getElementById("giraffe").value),
        수달: parseInt(document.getElementById("otter").value),
        올빼미: parseInt(document.getElementById("owl").value)
    };

    let maxScore = 0;
    let maxAnimal = "";
    for(const key in scores){
        if(scores[key] > maxScore){
            maxScore = scores[key];
            maxAnimal = key;
        }
    }

    document.getElementById("userResult").innerText = `${userName}님의 행동·학습 유형은:`;
    document.getElementById("resultText").innerText = maxAnimal;
    document.getElementById("resultImage").src = resultMap[maxAnimal].img;
    document.getElementById("resultDesc").innerText = resultMap[maxAnimal].desc;
    document.getElementById("hashtags").innerText = hashtagMap[maxAnimal];
}
