import sgMail from "@sendgrid/mail";

function formatSeeking(value) {
  if (value === "yes") return "Looking to get ISO certified";
  if (value === "already_certified") return "Already certified";
  return value || "Not provided";
}

function formatIntent(value) {
  const map = {
    certification_body: "Connect with certification body (external audit)",
    implementation_help: "Help implementing the standard",
    management_help: "Help managing existing standards",
  };
  return map[value] || value || "Not provided";
}

function formatClauseAnswers(clauseAnswers) {
  if (!Array.isArray(clauseAnswers) || !clauseAnswers.length) {
    return "Not provided";
  }

  return clauseAnswers
    .map(
      (item) =>
        `Clause ${item.clauseId} (${item.clauseTitle}): ${item.answer ? "Yes" : "No"}`,
    )
    .join("\n        ");
}

function formatClauseAnswersHtml(clauseAnswers) {
  if (!Array.isArray(clauseAnswers) || !clauseAnswers.length) {
    return "<p>Not provided</p>";
  }

  const items = clauseAnswers
    .map(
      (item) =>
        `<li><strong>Clause ${item.clauseId} — ${item.clauseTitle}:</strong> ${
          item.answer ? "Yes" : "No"
        }</li>`,
    )
    .join("");

  return `<ul>${items}</ul>`;
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const {
      email,
      seekingCertification,
      standard,
      clauseAnswers,
      yesCount,
      questionCount,
      intent,
      source,
    } = body;

    if (!email || !intent) {
      throw new Error("Missing required fields");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const standardLabel = standard ? `ISO ${standard}` : "Not applicable";
    const scoreLabel =
      typeof yesCount === "number" && typeof questionCount === "number"
        ? `${yesCount} of ${questionCount} yes`
        : "Not provided";

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `ISO readiness inquiry — ${formatIntent(intent)}`,
      text: `
        Email: ${email}
        Seeking certification: ${formatSeeking(seekingCertification)}
        Standard: ${standardLabel}
        Clause score: ${scoreLabel}
        Clause answers:
        ${formatClauseAnswers(clauseAnswers)}
        Intent: ${formatIntent(intent)}
        Source: ${source || "Not provided"}
      `,
      html: `
        <h2>ISO Readiness Inquiry</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Seeking certification:</strong> ${formatSeeking(seekingCertification)}</p>
        <p><strong>Standard:</strong> ${standardLabel}</p>
        <p><strong>Clause score:</strong> ${scoreLabel}</p>
        <p><strong>Clause answers:</strong></p>
        ${formatClauseAnswersHtml(clauseAnswers)}
        <p><strong>Intent:</strong> ${formatIntent(intent)}</p>
        <p><strong>Source:</strong> ${source || "Not provided"}</p>
      `,
    };

    await sgMail.send(msg);

    return {
      status: 200,
      message: "Inquiry submitted successfully",
    };
  } catch (error) {
    console.error("Error sending readiness inquiry:", error);
    return {
      status: 500,
      message: error.message || "Failed to submit inquiry",
    };
  }
});
