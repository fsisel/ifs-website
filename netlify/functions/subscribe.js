export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  try {
    const { email } = JSON.parse(event.body)

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email
        })
      }
    )

    return res.ok
      ? { statusCode: 200, body: JSON.stringify({ success: true }) }
      : { statusCode: 400, body: "Kit API Error" }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}