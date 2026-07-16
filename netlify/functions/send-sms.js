exports.handler = async function(event) {
  if(event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { phone, text, apiKey, sender } = JSON.parse(event.body);

  try {
    const normalizedPhone = phone.replace(/\s/g, "").replace(/^\+/, "");

    const params = new URLSearchParams();
    params.append("apikey", apiKey);
    params.append("number", normalizedPhone);
    params.append("message", text);
    params.append("type", "utf");
    if(sender) params.append("sender", sender);

    const response = await fetch("https://api.smsmanager.cz/send", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    });

    const responseText = await response.text();
    console.log("SmsManager response:", responseText);

    const ok = responseText.startsWith("OK");
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ 
        accepted: ok ? [{ message_id: responseText }] : null,
        rejected: !ok,
        raw: responseText
      })
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
