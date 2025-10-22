# Cloudflare Chat - Copilot Instructions

## Project Overview
This repository contains Cloudflare integrations for chat functionality. The project focuses on building robust chat features that leverage Cloudflare's edge computing capabilities.

## Development Guidelines

### Code Style and Standards
- Follow modern JavaScript/TypeScript best practices
- Use consistent naming conventions for Cloudflare Workers and API endpoints
- Implement proper error handling for edge computing scenarios
- Follow Cloudflare's security best practices for Workers

### Cloudflare-Specific Considerations
- When working with Cloudflare Workers, ensure compatibility with the Workers runtime
- Use Cloudflare's KV storage for persistent data when appropriate
- Implement proper rate limiting and request validation
- Consider edge caching strategies for optimal performance
- Use Cloudflare's security features like WAF and DDoS protection

### Testing and Validation
- Test integrations locally using Wrangler CLI when possible
- Validate API responses and error handling
- Test edge cases and network failures
- Ensure proper handling of Cloudflare-specific headers and metadata

### Documentation
- Document API endpoints and their expected behavior
- Include examples of Cloudflare Worker configurations
- Provide clear setup instructions for different Cloudflare services
- Document environment variables and configuration requirements

### Security
- Never commit API keys, tokens, or sensitive configuration
- Use Cloudflare's secrets management for sensitive data
- Implement proper authentication and authorization
- Follow OWASP guidelines for web application security

## Building and Deployment
- Use appropriate build tools for the target environment
- Test deployments in staging environments before production
- Follow Cloudflare's deployment best practices
- Monitor performance and errors in Cloudflare's dashboard