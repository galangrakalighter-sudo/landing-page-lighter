// themeToggle.ts
export const toggleTheme = () => {
  const current = localStorage.getItem("theme") || "dark";
  const next = current === "dark" ? "light" : "dark";

  localStorage.setItem("theme", next);

  // Daftar ID section yang ingin kamu ubah
  const sections = [
    "about",
    "why-digital-marketing-section",
    "features",
    "collections",
    "testimonials",
    "footer",
    "paragraf_sec1",
    "eksplorasi",
    "section4",
    "contact",
    "ourproject",
    "maps_home"
  ];

  const garisPutih = document.getElementById("garisPutih");
  const garisHitam = document.getElementById("garisHitam");

  if(next == "light"){
    garisPutih.style.display = "none";
    garisHitam.style.display = "block";
  } else {
    garisHitam.style.display = "none";
    garisPutih.style.display = "block";
  }

  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.remove("dark");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const text = document.getElementsByClassName("textChange");

  for (let i = 0; i < text.length; i++) {
    if (next == "light"){
      text[i].classList.remove("text-white");
      text[i].classList.add("text-black");
    }else{
      text[i].classList.remove("text-black");
      text[i].classList.add("text-white");
    }
  }

  const div = document.getElementsByClassName("divChange");

  for (let i = 0; i < div.length; i++) {
    if (next == "light"){
      div[i].classList.remove("bg-[#161616]");
      div[i].classList.add("bg-white");
    } else {
      div[i].classList.remove("bg-white");
      div[i].classList.add("bg-[#161616]");
    }
  }

  const marque = document.getElementsByClassName("marqueChange")
  for (let i = 0; i < marque.length; i++) {
    if (next == "light"){
      marque[i].classList.remove("bg-black");
      marque[i].classList.add("bg-[#F0EBEB]");
    } else {
      marque[i].classList.remove("bg-[#F0EBEB]");
      marque[i].classList.add("bg-black");
    }
  }

  const btn = document.getElementById("button_read");
  
  if(next == "light"){
    btn.classList.remove("border-white");
    btn.classList.add("border-black");
  } else{
    btn.classList.remove("border-black");
    btn.classList.add("border-white");
  }

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      (el as HTMLElement).style.backgroundColor =
        next === "light" ? "white" : "#161616";

      (el as HTMLElement).style.color =
        next === "light" ? "black" : "white";
    }
  });
};
