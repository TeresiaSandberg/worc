export async function POST(req: Request) {
    try {
      const body = await req.json();
      console.log("Contact form:", body);
  
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
      });
    } catch {
      return new Response(JSON.stringify({ ok: false }), {
        status: 500,
      });
    }
  }