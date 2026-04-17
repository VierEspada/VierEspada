const data = {
  leader: {
    name: "雨宮＠黒い剣士",
    role: "団長",
    desc: "Vier Espada 団長",
    icon: "amamiya.png"
  },
  sub: {
    name: "RUSK",
    role: "副団長",
    desc: "Vier Espada 副団長",
    icon: "rusk.png"
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
    icon: "norakumo3373.jpg"
  },
  squad3: {
    name: "空席",
    role: "♥隊エース",
    desc: "サポートに特化した隊",
    icon: "images/squad3.png"
  },
  squad4: {
    name: "脱兎らび",
    role: "♣隊エース",
    desc: "縁の下の力持ち隊",
    icon: "images/squad4.png"
  }
};

function showDetail(key, el) {
  document.getElementById("name").innerText = data[key].name;
  document.getElementById("role").innerText = data[key].role;
  document.getElementById("desc").innerText = data[key].desc;
  document.getElementById("icon").src = data[key].icon;

  document.getElementById("detailPanel").classList.add("active");

  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active-card");
  });

  el.classList.add("active-card");
}





