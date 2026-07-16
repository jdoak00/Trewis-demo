exports.handler = async function(event) {
  if(event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { phone, text, apiKey, sender } = JSON.parse(event.body);

  try {
    const body = {
      to: [{ phone_number: phone }],
      body: text
    };
    if(sender) body.sender = sender;

    const response = await fetch("https://api.smsmngr.com/v2/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    };
  } catch(err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
