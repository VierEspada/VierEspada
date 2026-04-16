const data = {
  leader: {
    name: "雨宮＠黒い剣士",
    role: "団長",
    desc: "Vier Espada 団長",
    icon: "images/leader.png"
  },
  sub: {
    name: "RUSK",
    role: "副団長",
    desc: "Vier Espada 副団長",
    icon: "images/sub.png"
  },
  squad1: {
    name: "iみみm",
    role: "♠隊エース",
    desc: "戦闘に特化した隊",
    icon: "images/squad1.png"
  },
  squad2: {
    name: "norakumo3373",
    role: "♦隊エース",
    desc: "戦闘兼サポートに特化した隊",
    icon: "images/squad2.png"
  },
  squad3: {
    name: "空席",
    role: "♥隊エース",
    desc: "サポートに特化した隊",
    icon: "images/squad3.png"
  },
  squad4: {
    squad4: {
    name: "脱兎らび",
    role: "♣隊エース",
    desc: "縁の下の力持ち隊",
    icon: "images/squad4.png"
  }
};

function showDetail(key) {
  document.getElementById("name").innerText = data[key].name;
  document.getElementById("role").innerText = data[key].role;
  document.getElementById("desc").innerText = data[key].desc;

  document.getElementById("icon").src = data[key].icon;

  document.getElementById("detailPanel").classList.add("active");

  // 選択中カードの発光
  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active-card");
  });

  event.target.classList.add("active-card");
}

function closePanel() {
  document.getElementById("detailPanel").classList.remove("active");

  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active-card");
  });
}







