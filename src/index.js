/**
 * Welcome to Cloudflare Workers!
 * 
 * This is a template for a Cloudflare Worker that can be used as a starting point
 * for building chat applications and other integrations.
 * 
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle different routes
    switch (url.pathname) {
      case '/':
        return new Response(getWelcomeHTML(), {
          headers: { 'Content-Type': 'text/html' }
        });
      
      case '/api/health':
        return new Response(JSON.stringify({ 
          status: 'ok', 
          timestamp: new Date().toISOString(),
          worker: 'cloudflare-chat'
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      
      case '/api/chat':
        if (request.method === 'POST') {
          return handleChatRequest(request);
        }
        return new Response('Method not allowed', { status: 405 });
      
      default:
        return new Response('Not found', { status: 404 });
    }
  },
};

async function handleChatRequest(request) {
  try {
    const { message } = await request.json();
    
    // Basic echo response for now - replace with actual chat logic
    const response = {
      reply: `Echo: ${message}`,
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID()
    };
    
    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Invalid request body' 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function getWelcomeHTML() {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Cloudflare Chat Worker</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 600px; margin: 0 auto; }
        .api-example { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        pre { overflow-x: auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Cloudflare Chat Worker</h1>
        <p>Welcome to your Cloudflare Workers chat application!</p>
        
        <h2>Available Endpoints:</h2>
        <ul>
            <li><code>GET /</code> - This welcome page</li>
            <li><code>GET /api/health</code> - Health check endpoint</li>
            <li><code>POST /api/chat</code> - Chat endpoint</li>
        </ul>
        
        <h2>API Examples:</h2>
        
        <div class="api-example">
            <h3>Health Check</h3>
            <pre>curl https://your-worker.your-subdomain.workers.dev/api/health</pre>
        </div>
        
        <div class="api-example">
            <h3>Send Chat Message</h3>
            <pre>curl -X POST https://your-worker.your-subdomain.workers.dev/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello, World!"}'</pre>
        </div>
        
        <p><strong>Next Steps:</strong></p>
        <ol>
            <li>Customize the chat logic in <code>src/index.js</code></li>
            <li>Add authentication and rate limiting</li>
            <li>Integrate with external APIs or databases</li>
            <li>Deploy using <code>npm run deploy</code></li>
        </ol>
    </div>
</body>
</html>
  `;
}