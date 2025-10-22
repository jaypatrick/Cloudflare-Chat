# Cloudflare Chat - Agent Instructions

## Agent Responsibilities

### Primary Tasks
When working in this repository, agents should:

1. **Understand Cloudflare Context**: Always consider that this is a Cloudflare-based chat integration project
2. **Edge-First Development**: Prioritize solutions that work well in Cloudflare's edge computing environment
3. **Performance Optimization**: Consider latency and performance implications of edge computing
4. **Security Focus**: Implement secure coding practices suitable for distributed edge environments

### Code Generation Guidelines

#### For Cloudflare Workers
- Generate code compatible with the Workers runtime (V8 isolates)
- Use modern ES6+ features supported by Workers
- Implement proper request/response handling for edge environments
- Consider cold start performance implications

#### For API Development
- Create RESTful APIs that work efficiently at the edge
- Implement proper error handling and status codes
- Use appropriate HTTP headers for caching and security
- Consider rate limiting and abuse prevention

#### For Chat Features
- Design real-time communication patterns suitable for edge deployment
- Implement message persistence using Cloudflare KV or Durable Objects
- Consider WebSocket alternatives that work well with Cloudflare
- Plan for horizontal scaling across edge locations

### Testing and Validation Approach
- Write tests that can run in both local and edge environments
- Validate performance characteristics typical of edge computing
- Test error scenarios specific to distributed systems
- Ensure compatibility with Cloudflare's development tools (Wrangler, etc.)

### Documentation Standards
- Include deployment instructions for Cloudflare environments
- Document configuration for different Cloudflare services
- Provide troubleshooting guides for common edge computing issues
- Include performance benchmarks and optimization tips

## Agent Workflow
1. Analyze requirements in the context of Cloudflare's capabilities
2. Design solutions that leverage edge computing advantages
3. Implement with security and performance best practices
4. Test thoroughly in simulated edge environments
5. Document deployment and configuration procedures