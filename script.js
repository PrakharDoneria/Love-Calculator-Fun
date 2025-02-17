const backendUrl = "https://love-calculator.deno.dev";

async function submitNames() {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();
  const responseMessage = document.getElementById("responseMessage");
  const successImage = document.getElementById("successImage");

  if (!yourName || !partnerName) {
    responseMessage.textContent = "Please enter both names.";
    responseMessage.style.color = "red";
    return;
  }

  responseMessage.textContent = "Calculating love...";

  try {
    const response = await fetch(`${backendUrl}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ yourName, partnerName }),
    });

    const result = await response.json();

    if (response.ok) {
      responseMessage.textContent = "Abhi batata hu apke mumma ko!";
      responseMessage.style.color = "green";
      successImage.style.display = "block";
    } else {
      responseMessage.textContent = result.message || "Something went wrong.";
      responseMessage.style.color = "red";
      successImage.style.display = "none";
    }
  } catch (error) {
    responseMessage.textContent = "Error connecting to the server.";
    responseMessage.style.color = "red";
    successImage.style.display = "none";
  }
}
