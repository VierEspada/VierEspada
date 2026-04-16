const data = {
  leader: {
    name: "団長",
    role: "団長",
    desc: "Vier Espada 団長"
  },
  sub: {
    name: "副団長",
    role: "副団長",
    desc: "Vier Espada 副団長"
  },
  squad1: {
    name: "♠隊隊長",
    role: "♠隊隊長",
    desc: "戦闘に特化した隊"
  },
  squad2: {
    name: "♦隊隊長",
    role: "♦隊隊長",
    desc: "戦闘兼サポートに特化した隊"
  },
  squad3: {
    name: "♥隊隊長",
    role: "♥隊隊長",
    desc: "サポートに特化した隊"
  },
  squad4: {
    name: "♣隊隊長",
    role: "♣隊隊長",
    desc: "縁の下の力持ち隊"
  }
};

function showDetail(key) {
  document.getElementById("name").innerText = data[key].name;
  document.getElementById("role").innerText = data[key].role;
  document.getElementById("desc").innerText = data[key].desc;
  document.getElementById("detail").classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("detail").classList.add("hidden");
}
