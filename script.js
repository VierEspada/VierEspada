const data = {
  leader: {
    name: "雨宮＠黒い剣士",
    role: "団長",
    desc: "Vier Espada 団長"
  },
  sub: {
    name: "RUSK",
    role: "副団長",
    desc: "Vier Espada 副団長"
  },
  squad1: {
    name: "iみみm",
    role: "♠隊エース",
    desc: "戦闘に特化した隊"
  },
  squad2: {
    name: "norakumo3373",
    role: "♦隊エース",
    desc: "戦闘兼サポートに特化した隊"
  },
  squad3: {
    name: "空席",
    role: "♥隊エース",
    desc: "サポートに特化した隊"
  },
  squad4: {
    name: "脱兎らび",
    role: "♣隊エース",
    desc: "縁の下の力持ち隊"
  }
};

function showDetail(key) {
  document.getElementById("name").innerText = data[key].name;
  document.getElementById("role").innerText = data[key].role;
  document.getElementById("desc").innerText = data[key].desc;

  document.getElementById("detailPanel").classList.add("active");
}

function closeDetail() {
  document.getElementById("detail").classList.add("hidden");
}
function closePanel() {
  document.getElementById("detailPanel").classList.remove("active");
}
