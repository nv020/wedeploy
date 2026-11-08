const invite = new URLSearchParams(window.location.search).get("u");
const openButton = document.querySelector("#open");
const downloadButton = document.querySelector("#download");
const status = document.querySelector("#status");
let session;

async function request(action) {
  const response = await fetch("/api/kluis-test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, invite, session }),
  });
  if (!response.ok) throw new Error("De kluis is tijdelijk niet beschikbaar of de testlink is ongeldig.");
  return response;
}

async function prepare() {
  if (!invite) {
    status.textContent = "Open de kluis via een van de testuitnodigingen.";
    return;
  }
  const sessionKey = "wedeploy-vault:" + invite;
  session = crypto.randomUUID();
  try {
    session = sessionStorage.getItem(sessionKey) || session;
    sessionStorage.setItem(sessionKey, session);
  } catch {
    // A session in memory still lets visitors use the vault when storage is blocked.
  }
  try {
    await request("visit");
    openButton.disabled = false;
  } catch (error) {
    status.textContent = error.message;
  }
}

openButton.addEventListener("click", async () => {
  openButton.disabled = true;
  status.textContent = "De kluis wordt geopend…";
  const vault = document.querySelector("#vault");
  const label = document.querySelector("#vault-label");
  vault.classList.add("is-open");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  try {
    const [{ notification }] = await Promise.all([
      request("open").then(response => response.json()),
      new Promise(resolve => setTimeout(resolve, reducedMotion ? 0 : 850)),
    ]);
    label.textContent = "Kluis geopend";
    openButton.hidden = true;
    downloadButton.hidden = false;
    downloadButton.focus();
    status.textContent = notification === "accepted" ? "PDF · 1 pagina" : "PDF · 1 pagina. Testmail is niet bevestigd.";
  } catch (error) {
    vault.classList.remove("is-open");
    status.textContent = error.message;
    openButton.disabled = false;
  }
});

downloadButton.addEventListener("click", async () => {
  downloadButton.disabled = true;
  try {
    const file = await (await request("download")).blob();
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Wedeploy-testprofiel.pdf";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
    status.textContent = "Download gestart.";
  } catch (error) {
    status.textContent = error.message;
  } finally {
    downloadButton.disabled = false;
  }
});

prepare();
