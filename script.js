var num = 1;
var userName = "";

var q = {
    1: {"title": "회사에 새로 들어온 신입 후배가 실수를 한 후 울고 있다. 나는 10분 뒤에 회의가 있다. 이 때 나의 반응은?", "type": "TF", "A": "‘울 시간에 정리부터 하지…’라고 생각하며 회의실로 감", "B": "“괜찮아? 우리 회의 끝나고 얘기하자”라고 속삭이며 토닥이기"},
    2: {"title": "친한 친구가 단톡방에 '나 요즘 너무 외롭다'고 보냈지만 아무도 답장을 하지 않는다. 그걸 본 나의 반응은?", "type": "TF", "A": "‘음… 괜히 반응했다가 부담될 수도 있으니 일단 관망하자’", "B": "‘헉… 얼마나 외로웠으면 저 말까지 했을까’ 하며 바로 카톡 보냄"},
    3: {"title": "친구가 연애 얘기를 하다가 눈시울을 붉히며 '나 애정결핍인가봐'라고 말한다. 이때 나는 어떻게 반응할까?", "type": "TF", "A": "“그건 성향이야. 애착 유형 분석은 해봤어?”", "B": "“그 기분 나도 알아… 공허하지?”"},
    4: {"title": "바쁜 일상 속 카톡을 자주 못했더니, 친구가 '요즘 너 좀 변한 것 같아'라고 서운함을 표현한다. 이럴 때 나는?", "type": "TF", "A": "“지금 내 상황도 좀 이해해줘.”", "B": "‘헉 내가 소홀했나…’ 미안해서 바로 장문카톡 씀"},
    5: {"title": "친구가 SNS에 눈물 셀카와 함께 '버티기 힘들다'는 글을 올렸다. 나는 그것을 보고 어떤 생각을 할까?", "type": "TF", "A": "‘이건 걱정인가 연출인가…’ 결국 반응 안 함", "B": "“너무 걱정돼… 얘기해줘”라고 DM함"},
    6: {"title": "연인이 '너 말투가 너무 차가워'라며 감정적으로 속상하다고 털어놓는다. 나는 이 상황에서 어떻게 반응할까?", "type": "TF", "A": "“그건 말투고, 의도는 전혀 그런 게 아니야.”", "B": "“미안해… 상처 줬다면 고칠게.”"},
    7: {"title": "친구가 헤어진 연인에 대한 이야기를 벌써 네 번째 반복하고 있다. 나는 그 말을 듣고 어떤 반응을 할까?", "type": "TF", "A": "“야 이제 좀 잊을 때 되지 않았냐…”", "B": "“아직 그 말이 계속 맴도는구나…”"},
    8: {"title": "카페에 앉아있던 친구가 갑자기 조용히 '나 요즘 좀 우울한가 봐'라고 말한다. 그 순간 나는?", "type": "TF", "A": "“뭐 때문에 그런지 구체적으로 말해줄 수 있어?”", "B": "“그렇게 말하는 거 자체가 많이 힘든 거야…”"},
    9: {"title": "단체 채팅방에 어떤 친구의 생일이라는 사실을 알게 됐지만, 아직 아무도 축하 메시지를 보내지 않았다. 나의 반응은?", "type": "TF", "A": "“이건 분위기상 그냥 넘어가도 되겠지…”", "B": "“헉 민망하겠다… 내가 먼저 보내야지”"},
    10: {"title": "결혼식장에서 신부가 편지를 읽다가 울음을 터뜨렸다. 분위기가 숙연해진 그 순간, 나는 어떻게 반응할까?", "type": "TF", "A": "‘어우 민망해… 너무 연출같아’ 하며 물만 마심", "B": "같이 눈물 고이며 ‘왜 울컥하지…’"}
};

const resultMap = {
    "테토남": {
        img: "img/tm.png",
        desc: `논리적인 사고와 이성적인 판단이 강한 테토남! 감정보다 문제 해결에 집중하는 편이에요.\n\n🧠 이런 사람은?\n당신은 복잡한 상황 속에서도 중심을 잃지 않고 차분하게 문제를 정리해나가는 사람입니다.\n감정보다 사실을 우선하지만, 그 안에는 책임감과 깊은 배려가 담겨 있죠.\n누군가가 의지하고 싶을 만큼 단단한 에너지를 가진 사람입니다.\n\n💬 명언\n"이성은 감정을 억누르기 위함이 아니라, 함께 조화롭게 살아가기 위함이다."`
    },
    "테토녀": {
        img: "img/tw.png",
        desc: `분석적이고 실용적인 사고를 가진 테토녀! 공감보다 팩트와 논리를 중시해요.\n\n🧠 이런 사람은?\n당신은 마음보다 명확한 근거를 중시하고, 늘 정확한 방향으로 가려는 똑똑한 이정표 같은 사람이에요.\n사람들이 혼란스러워할 때, 당신의 통찰력은 길을 열어주죠.\n차가워 보일 수 있지만, 사실 누구보다 따뜻하게 지켜보고 있는 사람입니다.\n\n💬 명언\n"진짜 지성은 따뜻한 마음을 담아 진실을 말할 수 있는 용기에서 시작된다."`
    },
    "에겐남": {
        img: "img/fm.png",
        desc: `따뜻하고 공감이 풍부한 에겐남! 누군가의 마음을 알아차리는 데 탁월해요.\n\n🧠 이런 사람은?\n당신은 눈빛과 말투의 미묘한 떨림도 놓치지 않는 감성의 안테나를 지닌 사람입니다.\n누군가의 아픔 앞에서 말없이 곁에 있어주는 위로의 힘을 가지고 있어요.\n세상은 당신 같은 사람 덕분에 조금 더 부드럽고, 조금 더 안전합니다.\n\n💬 명언\n"공감은 말보다 먼저 다가가 마음에 귀 기울이는 것이다."`
    },
    "에겐녀": {
        img: "img/fw.png",
        desc: `감정을 섬세하게 읽고 함께 아파할 줄 아는 에겐녀! 감정의 바다에서 누구보다 깊이 헤엄쳐요.\n\n🧠 이런 사람은?\n당신은 다른 사람의 감정을 ‘이해’하는 데 그치지 않고, 함께 ‘느끼는’ 능력을 가졌어요.\n말보단 마음, 행동보단 진심을 중요하게 여기고, 그만큼 깊은 교감으로 사람을 품는 힘이 있습니다.\n당신의 존재는 누군가에게는 살아가는 이유가 되기도 해요.\n\n💬 명언\n"상처받은 마음은 상처받은 마음으로 보듬어진다. 공감은 그 시작이다."`
    }
};

function start() {
    userName = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    if (!userName || !gender) {
        alert("이름과 성별을 모두 입력해 주세요!");
        return;
    }
    document.querySelector(".start").style.display = "none";
    document.querySelector(".question").style.display = "block";
    next();
}

document.getElementById("A").addEventListener("click", function() {
    var type = document.getElementById("type").value;
    var value = parseInt(document.getElementById(type).value);
    document.getElementById(type).value = value + 1;
    next();
});

document.getElementById("B").addEventListener("click", function() {
    next();
});

function next() {
    if (num > 10) {
        document.querySelector(".question").style.display = "none";
        document.querySelector(".result").style.display = "block";
        var score = parseInt(document.getElementById("TF").value);
        var gender = document.getElementById("gender").value;
        var key = (score >= 6 ? "테토" : "에겐") + (gender === "남" ? "남" : "녀");

        var tehtoPercent = Math.round((score / 10) * 100);
        var egenPercent = 100 - tehtoPercent;

        document.getElementById("userResult").innerText = `${userName}님의 공감 유형은:`;
        document.getElementById("resultText").innerText = key;
        document.getElementById("resultImage").src = resultMap[key].img;
        document.getElementById("resultDesc").innerText = resultMap[key].desc;
        document.getElementById("scorePercent").innerText = `테토: ${tehtoPercent}% / 에겐: ${egenPercent}%`;
        document.getElementById("tehtoBar").style.width = `${tehtoPercent}%`;
        document.getElementById("tehtoBar").innerText = `${tehtoPercent}%`;
        document.getElementById("egenBar").style.width = `${egenPercent}%`;
        document.getElementById("egenBar").innerText = `${egenPercent}%`;

        const hashtagMap = {
            "테토남": "#분석형 #냉철 #전략가 #신뢰감 #이성중심 #논리우선 #정돈된사고",
            "테토녀": "#팩트체크 #현실적 #논리적감성 #이정표 #통찰력 #이성중시 #깔끔한조언",
            "에겐남": "#다정 #배려심 #온기있는말투 #감성레이다 #위로왕 #포근함 #연결하는사람",
            "에겐녀": "#감정이입 #섬세함 #마음공감 #말없이기댈수있는 #부드러운눈빛 #위로의손길 #깊은교감"
        };
        document.getElementById("hashtags").innerText = hashtagMap[key];


    } else {
        var question = q[num];
        document.querySelector(".progress-bar").style.width = `calc(100/10*${num}%)`;
        document.getElementById("title").innerText = question.title;
        document.getElementById("type").value = question.type;
        document.getElementById("A").innerText = question.A;
        document.getElementById("B").innerText = question.B;
        num++;
    }
}
