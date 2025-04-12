let ideodist = Infinity;
let quality, peace, liberty, progress, wealth, might, authority, tradition, ideology;
let max_econ = 0;
let max_dipl = 0;
let max_govt = 0;
let max_scty = 0;
let qn = 0;

function init_question(language) {
    document.getElementById("question-text").innerHTML = questions[qn][language];
    if (language === 'zh-Hans') {
       document.getElementById("question-number").innerHTML = "第 " + (qn + 1) + " 个问题，共 " + (questions.length)+" 个"; 
    } else {
        document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length);
    }
}

function calc_max() {
    window.econ_array = new Array(questions.length);
    window.dipl_array = new Array(questions.length);
    window.govt_array = new Array(questions.length);
    window.scty_array = new Array(questions.length);
    for (let i = 0; i < questions.length; i++) {
        max_econ += Math.abs(questions[i].effect.econ);
        max_dipl += Math.abs(questions[i].effect.dipl);
        max_govt += Math.abs(questions[i].effect.govt);
        max_scty += Math.abs(questions[i].effect.scty);
    };
}

function next_question(mult, language) {
    econ_array[qn] = mult * questions[qn].effect.econ;
    dipl_array[qn] = mult * questions[qn].effect.dipl;
    govt_array[qn] = mult * questions[qn].effect.govt;
    scty_array[qn] = mult * questions[qn].effect.scty;
    qn++; 
    if (qn < questions.length) {
        init_question(language);
        if (qn === 1) {
            document.getElementById("back_button").onclick = () => prev_question(language);
        }
    } else {
        results();
    }
}

function prev_question(language) {
    qn--;
    init_question(language);
    if (qn === 0) {
        document.getElementById("back_button").onclick = () => location.href = 'instructions.html';
    }
}

function calc_score(score, max) {
    return (100*(max + score)/(2*max)).toFixed(1);
}

function results() {
    let final_econ = econ_array.reduce((a, b) => a + b, 0);
    let final_dipl = dipl_array.reduce((a, b) => a + b, 0);
    let final_govt = govt_array.reduce((a, b) => a + b, 0);
    let final_scty = scty_array.reduce((a, b) => a + b, 0);
    location.href = `results.html`
        + `?e=${calc_score(final_econ, max_econ)}`
        + `&d=${calc_score(final_dipl, max_dipl)}`
        + `&g=${calc_score(final_govt, max_govt)}`
        + `&s=${calc_score(final_scty, max_scty)}`;
}

function setLabel(val, ary) {
    if (val > 100) {
        return "";
    } else if (val > 90) {
        return ary[0];
    } else if (val > 75) {
        return ary[1];
    } else if (val > 60) {
        return ary[2];
    } else if (val >= 40) {
        return ary[3];
    } else if (val >= 25) {
        return ary[4];
    } else if (val >= 10) {
        return ary[5];
    } else if (val >= 0) {
        return ary[6];
    } else {
        return "";
    }
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (NaN);
}

function setBarValue(name, value) {
    innerel = document.getElementById(name);
    outerel = document.getElementById("bar-" + name);
    outerel.style.width = (value + "%");
    innerel.innerHTML = (value + "%");
    if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
        innerel.style.visibility = "hidden";
    }
}

function draw() {
    let c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    c.width = 800;
    c.height = 650;
    ctx.fillStyle = "#EEEEEE";
    ctx.fillRect(0, 0, 800, 650);

    img = document.getElementById("img-equality");
    ctx.drawImage(img, 20, 140, 100, 100);
    img = document.getElementById("img-wealth");
    ctx.drawImage(img, 680, 140, 100, 100);
    img = document.getElementById("img-might");
    ctx.drawImage(img, 20, 270, 100, 100);
    img = document.getElementById("img-peace");
    ctx.drawImage(img, 680, 270, 100, 100);
    img = document.getElementById("img-liberty");
    ctx.drawImage(img, 20, 400, 100, 100);
    img = document.getElementById("img-authority");
    ctx.drawImage(img, 680, 400, 100, 100);
    img = document.getElementById("img-tradition");
    ctx.drawImage(img, 20, 530, 100, 100);
    img = document.getElementById("img-progress");
    ctx.drawImage(img, 680, 530, 100, 100);

    ctx.fillStyle = "#222222";
    ctx.fillRect(120, 150, 560, 80);
    ctx.fillRect(120, 280, 560, 80);
    ctx.fillRect(120, 410, 560, 80);
    ctx.fillRect(120, 540, 560, 80);
    ctx.fillStyle = "#f44336";
    ctx.fillRect(120, 154, 5.6 * equality - 2, 72);
    ctx.fillStyle = "#00897b";
    ctx.fillRect(682 - 5.6 * wealth, 154, 5.6 * wealth - 2, 72);
    ctx.fillStyle = "#ff9800";
    ctx.fillRect(120, 284, 5.6 * might - 2, 72);
    ctx.fillStyle = "#03a9f4";
    ctx.fillRect(682 - 5.6 * peace, 284, 5.6 * peace - 2, 72);
    ctx.fillStyle = "#ffeb3b";
    ctx.fillRect(120, 414, 5.6 * liberty - 2, 72);
    ctx.fillStyle = "#3f51b5";
    ctx.fillRect(682 - 5.6 * authority, 414, 5.6 * authority - 2, 72);
    ctx.fillStyle = "#8bc34a";
    ctx.fillRect(120, 544, 5.6 * tradition - 2, 72);
    ctx.fillStyle = "#9c27b0";
    ctx.fillRect(682 - 5.6 * progress, 544, 5.6 * progress - 2, 72);
    ctx.fillStyle = "#222222";
    ctx.font = "700 80px Jost";
    ctx.textAlign = "left";
    ctx.fillText("8values", 20, 80);
    ctx.font = "50px Jost";
    ctx.textAlign = "right";;
    ctx.fillText(ideology, 780, 80);

    ctx.textAlign = "left";
    if (equality > 30) {
        ctx.fillText(equality + "%", 130, 207.5);
    }
    if (might > 30) {
        ctx.fillText(might + "%", 130, 337.5);
    }
    if (liberty > 30) {
        ctx.fillText(liberty + "%", 130, 467.5);
    }
    if (tradition > 30) {
        ctx.fillText(tradition + "%", 130, 597.5);
    }
    ctx.textAlign = "right"
    if (wealth > 30) {
        ctx.fillText(wealth + "%", 670, 207.5);
    }
    if (peace > 30) {
        ctx.fillText(peace + "%", 670, 337.5);
    }
    if (authority > 30) {
        ctx.fillText(authority + "%", 670, 467.5);
    }
    if (progress > 30) {
        ctx.fillText(progress + "%", 670, 597.5);
    }

    ctx.font = "300 30px Jost";
    ctx.textAlign = "center";
    ctx.fillText(document.getElementById("economic-label").innerHTML, 400, 140);
    ctx.fillText(document.getElementById("diplomatic-label").innerHTML, 400, 270);
    ctx.fillText(document.getElementById("state-label").innerHTML, 400, 400);
    ctx.fillText(document.getElementById("society-label").innerHTML, 400, 530);
    document.getElementById("banner").src = c.toDataURL();
}

function result_ini(language) {
    equality = getQueryVariable("e");
    peace = getQueryVariable("d");
    liberty = getQueryVariable("g");
    progress = getQueryVariable("s");
    wealth = (100 - equality).toFixed(1);
    might = (100 - peace).toFixed(1);
    authority = (100 - liberty).toFixed(1);
    tradition = (100 - progress).toFixed(1);
    for (var i = 0; i < ideologies.length; i++) {
        let dist = 0;
        dist += Math.pow(Math.abs(ideologies[i].stats.econ - equality), 2);
        dist += Math.pow(Math.abs(ideologies[i].stats.govt - liberty), 2);
        dist += Math.pow(Math.abs(ideologies[i].stats.dipl - peace), 1.73856063);
        dist += Math.pow(Math.abs(ideologies[i].stats.scty - progress), 1.73856063);
        if (dist < ideodist) {
            ideology = ideologies[i][language];
            ideodist = dist;
        }
    }
    setBarValue("equality", equality);
    setBarValue("wealth", wealth);
    setBarValue("peace", peace);
    setBarValue("might", might);
    setBarValue("liberty", liberty);
    setBarValue("authority", authority);
    setBarValue("progress", progress);
    setBarValue("tradition", tradition);
}

function check_dark() {
    document.body.classList.add('non-transition');
    setTimeout(() => {
        document.body.classList.remove('non-transition');
    }, 10);
    if (parent.document.body.classList.contains('dark')) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}