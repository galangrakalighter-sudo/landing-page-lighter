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
    "section4"
  ];

  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const text = document.getElementsByClassName("textChange");

  for (let i = 0; i < text.length; i++) {
    text[i].classList.remove("text-white");
    text[i].classList.add("tracking-widest");
  }

  const div = document.getElementsByClassName("divChange");

  for (let i = 0; i < div.length; i++) {
    div[i].classList.remove("bg-[#1A1A1A]");
    div[i].classList.add("tracking-widest");
  }

  const btn = document.getElementById("button_read");
  
  if (btn.classList.contains("border-white")) {
    btn.classList.remove("border-white");
    btn.classList.add("border-black");
  } else {
    btn.classList.remove("border-black");
    btn.classList.add("border-white");
  }

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      (el as HTMLElement).style.backgroundColor =
        next === "light" ? "#f7e6e6" : "#161616";

      (el as HTMLElement).style.color =
        next === "light" ? "black" : "white";
    }
  });
};
