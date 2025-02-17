const backendUrl = "https://love-calculator.deno.dev";

async function fetchSubmissions() {
  const listElement = document.getElementById('submissionsList');
  listElement.innerHTML = 'Loading...';

  try {
    const response = await fetch(`${backendUrl}/retrieve`);
    const submissions = await response.json();

    listElement.innerHTML = '';

    if (submissions.length === 0) {
      listElement.innerHTML = '<li>No submissions found</li>';
      return;
    }

    submissions.forEach(submission => {
      const item = document.createElement('li');
      item.textContent = `${submission.yourName} ❤️ ${submission.partnerName}`;
      listElement.appendChild(item);
    });
  } catch (error) {
    listElement.innerHTML = '<li>Failed to fetch submissions</li>';
  }
}

// Auto-load submissions when page loads
window.onload = fetchSubmissions;
