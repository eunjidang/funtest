let num = 1;
let userName = "";

// 질문 6개 (반두라 행동양식 기반, 대학원 수업용)
const q = {
    1: {
        title: "새로운 프로젝트에서 낯선 도구를 써야 할 때, 나는 어떻게 행동할까?",
        A: { text: "직접 시도하며 문제를 해결하려 한다.", scores: {lion:1} },
        B: { text: "먼저 사용법과 사례를 관찰하고 계획을 세운다.", scores: {giraffe:1} }
    },
    2: {
        title: "동료가 실수를 반복할 때 나는?",
        A: { text: "바로 피드백을 주며 개선하도록 돕는다.", scores: {lion:1} },
        B: { text: "관찰하며 어떤 환경적 요인이 작용했는지 분석한다.", scores: {owl:1} }
    },
    3: {
        title: "새로운 학습 기술을 배울 때 나는?",
        A: { text: "직접 실습하며 빠르게 적용한다.", scores: {lion:1} },
        B: { text: "모델링과 관찰을 통해 전략을 익힌다.", scores: {giraffe:1} }
    },
    4: {
        title: "문제가 예상과 다르게 발생했을 때 나는?",
        A: { text: "환경을 분석하고 대응 전략을 세운다.", scores: {otter:1} },
        B: { text: "내 행동을 조절하며 문제 해결 방법을 찾는다.", scores: {owl:1} }
    },
    5: {
        title: "팀 회의에서 새로운 아이디어를 제시해야 할 때 나는?",
        A: { text: "즉시 제안하고 실행 방안을 논의한다.", scores: {lion:1} },
        B: { text: "먼저 다른 사람의 의견을 관찰하고 참고한다.", scores: {giraffe:1} }
    },
    6: {
        title: "학습이나 업무 결과를 평가받을 때 나는?",
        A: { text: "결과에 따라 행동을 조정하며 자기효능감을 강화한다.", scores: {owl:1} },
        B: { text: "환경과 상호작용을 고려하며 다음 전략을 계획한다.", scores: {otter:1} }
    }
};

// 결과 맵
const resultMap = {
    사자: {
        img: "img/lion.png",
        desc: `<b style="font-size:1.1rem;">🦁 사자형: 자기효능감 중심 행동자</b><br>
        사자형은 높은 자기효능감을 기반으로 환경에 주도적으로 개입하며 도전적인 과제에도 적극적입니다.<br>
        - 행동학습: 직접 경험과 시도를 통한 학습 선호<br>
        - 사회인지적 특성: 환경과 상호작용하며 결과를 학습에 반영<br>
        - 전략: 목표 설정과 자기조절을 통한 문제 해결<br>
        <span style="font-size:1.05rem; font-weight:bold;">🔹 사자형인 나는요!</span><br>
        경험적 학습과 자기효능감의 상관성이 높으며, 실습형 연구나 프로젝트 수행에서 두각을 나타냅니다.`
    },
    기린: {
        img: "img/g.png",
        desc: `<b style="font-size:1.1rem;">🦒 기린형: 관찰과 모방 중심 행동자</b><br>
        기린형은 주변 환경과 타인의 행동을 관찰하며 학습합니다.<br>
        - 행동학습: 관찰과 모방을 통한 학습 선호<br>
        - 사회인지적 특성: 다른 사람의 전략과 결과를 분석하여 자기 행동에 적용<br>
        - 전략: 안전하고 효율적인 학습 계획 수립<br>
        <span style="font-size:1.05rem; font-weight:bold;">🔹 기린형인 나는요!</span><br>
        환경을 분석하고 관찰 중심으로 학습하는 성향으로, 팀 프로젝트나 협업 상황에서 전략적 의사결정을 돕습니다.`
    },
    수달: {
        img: "img/ot.png",
        desc: `<b style="font-size:1.1rem;">🦦 수달형: 환경 적응형 행동자</b><br>
        수달형은 환경을 읽고 상황에 맞게 유연하게 행동합니다.<br>
        - 행동학습: 환경 분석과 조건 적응 중심<br>
        - 사회인지적 특성: 상호결정론적 사고, 상황에 따른 전략적 선택<br>
        - 전략: 조건에 따른 대응과 조율<br>
        <span style="font-size:1.05rem; font-weight:bold;">🔹 수달형인 나는요!</span><br>
        상황 분석과 적응력이 높아, 변화가 많은 환경에서도 효율적으로 학습하고 행동합니다.`
    },
    올빼미: {
        img: "img/ow.png",
        desc: `<b style="font-size:1.1rem;">🦉 올빼미형: 자기조절 중심 행동자</b><br>
        올빼미형은 자신의 행동을 계획하고 조절하며 전략적으로 학습합니다.<br>
        - 행동학습: 자기조절과 전략적 시도<br>
        - 사회인지적 특성: 학습 경험의 성찰과 재도전<br>
        - 전략: 목표 달성 위한 계획과 조절<br>
        <span style="font-size:1.05rem; font-weight:bold;">🔹 올빼미형인 나는요!</span><br>
        자기조절 능력이 뛰어나며, 학습과 업무 수행에서 전략적 접근으로 높은 성과를 보여줍니다.`
    }
};

// 해시태그
const hashtagMap = {
    사자: "#자기효능감 #도전적 #행동중심 #실습형 #프로젝트리더",
    기린: "#관찰학습 #모방형 #전략적 #안정적 #협업지원",
    수달: "#환경적응 #유연함 #상호결정 #조화로운행동 #조건분석",
    올빼미: "#자기조절 #계획적 #성찰적 #전략적 #학습리더"
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

    document.getElementById("userResult").innerText = `${userName}님의 동물 유형은:`;
    document.getElementById("resultText").innerText = maxAnimal;
    document.getElementById("resultImage").src = resultMap[maxAnimal].img;
    document.getElementById("resultDesc").innerHTML = resultMap[maxAnimal].desc; // HTML 적용
    document.getElementById("hashtags").innerText = hashtagMap[maxAnimal];
}
