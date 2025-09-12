let num = 1;
let userName = "";
let currentQuestion; // 현재 질문 저장

// 질문 5개
const q = {
    1: { title: "새로운 과제를 받았을 때 나는…",
        A: { text: "처음이라도 해보면 해낼 수 있어. 일단 시작해보자.", scores: {lion:1} },
        B: { text: "어떤 방식으로 진행할지, 주변 사람이나 사례를 참고해야겠다.", scores: {giraffe:1} }
    },
    2: { title: "새로운 동아리에서 자기소개를 해야 한다.",
        A: { text: "떨리지만 내 방식대로 해보면 된다. 완벽하지 않아도 괜찮아.", scores: {lion:1} },
        B: { text: "다른 사람을 보고 그 톤을 따라 해야겠다.", scores: {giraffe:1} }
    },
    3: { title: "팀 프로젝트에서 예상치 못한 어려움이 생겼을 때 나는…",
        A: { text: "방법을 바꿔서 다시 시도하면 해결할 수 있어.", scores: {owl:1} },
        B: { text: "환경이 안 받쳐줘서 생긴 문제야. 조건이 달랐다면 결과도 달랐을 거야.", scores: {otter:1} }
    },
    4: { title: "공부나 일을 할 때 가장 중요하다고 생각하는 건…",
        A: { text: "내 마음가짐과 자신감이야. 내가 믿는 만큼 성과가 달라지거든.", scores: {lion:1} },
        B: { text: "환경, 분위기, 주변 영향이 더 커. 조건이 좋아야 능력도 발휘되지.", scores: {otter:1} }
    },
    5: { title: "새로운 기술이나 운동을 배울 때 나는…",
        A: { text: "직접 해보면서 익혀야 빠르게 습득할 수 있어.", scores: {owl:1} },
        B: { text: "잘하는 사람을 보고 따라 배우는 게 안전하고 효율적이야.", scores: {giraffe:1} }
    }
};

// 결과 맵
const resultMap = {
    사자: { img: "img/lion.png", desc: "🦁 사자형: 도전적이고 자기효능감이 높은 타입! 어려움에도 자신감을 가지고 문제를 해결합니다." },
    기린: { img: "img/g.png", desc: "🦒 기린형: 관찰하며 배우는 타입! 신중하고 안정적으로 성장하며 주변을 참고합니다." },
    수달: { img: "img/ot.png", desc: "🦦 수달형: 환경을 읽고 적응하는 타입! 상황과 조건을 고려하여 유연하게 행동합니다." },
    올빼미: { img: "img/ow.png", desc: "🦉 올빼미형: 자기조절 능력이 뛰어난 타입! 실패를 성찰하며 전략적으로 다시 도전합니다." }
};

// 해시태그
const hashtagMap = {
    사자: "#도전적 #자기효능감 #리더십 #자신감 #행동력",
    기린: "#관찰형 #신중 #배움중심 #안정적 #모방학습",
    수달: "#적응형 #환경분석 #유연함 #상호결정 #조화로운행동",
    올빼미: "#계획적 #자기조절 #성찰적 #전략적 #깊이있는학습"
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

    currentQuestion = q[num]; // 현재 질문 저장
    document.querySelector(".progress-bar").style.width = `calc(100/${Object.keys(q).length}*${num}%)`;
    document.getElementById("title").innerText = currentQuestion.title;
    document.getElementById("A").innerText = currentQuestion.A.text;
    document.getElementById("B").innerText = currentQuestion.B.text;
}

// 버튼 이벤트
document.getElementById("A").addEventListener("click", function(){
    addScore(currentQuestion.A.scores);
    num++; // 다음 질문
    next();
});
document.getElementById("B").addEventListener("click", function(){
    addScore(currentQuestion.B.scores);
    num++; // 다음 질문
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
    document.getElementById("resultDesc").innerText = resultMap[maxAnimal].desc;
    document.getElementById("hashtags").innerText = hashtagMap[maxAnimal];
}
