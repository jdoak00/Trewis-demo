exports.handler = async function(event) {
  if(event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { phone, text, apiKey, sender } = JSON.parse(event.body);

  try {
    const normalizedPhone = phone.replace(/\s/g, "").replace(/^\+/, "");
    
    const url = "https://http-api.smsmanager.cz/Send" +
      "?apikey=" + encodeURIComponent(apiKey) +
      "&number=" + encodeURIComponent(normalizedPhone) +
      "&message=" + encodeURIComponent(text) +
      "&type=utf" +
      (sender ? "&sender=" + encodeURIComponent(sender) : "");

    const response = await fetch(url, { method: "GET" });
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
    console.error("Error:", err.message);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
