# Cloudflare Chat 🚀

A collection of Cloudflare Workers and integrations for building chat applications and other serverless functionality.

## Features

- ⚡ Serverless chat API built with Cloudflare Workers
- 🔧 Easy deployment with Wrangler CLI
- 🌍 Global edge network distribution
- 📝 TypeScript/JavaScript support
- 🔄 Multiple environment support (staging/production)

## Quick Start

### Prerequisites

- Node.js 18+ installed
- A Cloudflare account
- Wrangler CLI installed globally: `npm install -g wrangler`

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaypatrick/Cloudflare-Chat.git
   cd Cloudflare-Chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Authenticate with Cloudflare**
   ```bash
   wrangler auth
   ```

4. **Configure your worker**
   - Update `wrangler.toml` with your desired worker name
   - Modify environment-specific settings as needed

### Development

**Start local development server:**
```bash
npm run dev
```

This starts a local server where you can test your worker at `http://localhost:8787`

### Deployment

**Deploy to staging:**
```bash
npm run deploy:staging
```

**Deploy to production:**
```bash
npm run deploy:production
```

**Quick deploy (uses default environment):**
```bash
npm run deploy
```

## API Endpoints

### Health Check
```bash
GET /api/health
```

### Chat API
```bash
POST /api/chat
Content-Type: application/json

{
  "message": "Hello, World!"
}
```

## Project Structure

```
├── src/
│   └── index.js          # Main worker script
├── wrangler.toml         # Cloudflare Worker configuration
├── package.json          # Node.js dependencies and scripts
└── README.md            # This file
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
# Add your environment variables here
# API_KEY=your-api-key
```

For production, set secrets using Wrangler:

```bash
wrangler secret put API_KEY
```

### Wrangler Configuration

The `wrangler.toml` file contains your worker configuration:

- `name`: Your worker name
- `main`: Entry point file
- `compatibility_date`: Cloudflare Workers runtime version
- `[env.*]`: Environment-specific configurations

## Development Tips

1. **Local Testing**: Use `npm run dev` to test changes locally before deploying
2. **Logs**: View live logs with `wrangler tail`
3. **Secrets**: Use `wrangler secret` commands to manage sensitive data
4. **KV Storage**: Add KV namespaces in `wrangler.toml` for data persistence

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test locally
4. Commit your changes: `git commit -am 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers Examples](https://developers.cloudflare.com/workers/examples/)
