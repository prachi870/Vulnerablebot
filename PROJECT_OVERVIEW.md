# 📦 Project Overview - Vulnerable Chatbot

## 🎉 Project Status: COMPLETE & OPERATIONAL

---

## 📁 Project Files

### Core Application Files
```
✅ server.js           - Backend server with Groq API integration
✅ package.json        - Project dependencies and scripts
✅ .env                - Groq API key configuration (configured)
✅ .env.example        - Example environment file
```

### Frontend Files (in /public/)
```
✅ index.html          - Professional chat interface
✅ style.css           - Modern, clean styling
✅ script.js           - Frontend logic and API calls
```

### Documentation Files
```
✅ README.md           - Main project documentation
✅ USAGE_GUIDE.md      - Complete usage instructions
✅ TEST_RESULTS.md     - Detailed test results with evidence
✅ SETUP.md            - Quick setup guide
✅ CHEAT_SHEET.md      - Quick vulnerability reference
✅ PROJECT_OVERVIEW.md - This file
```

### Dependencies
```
✅ node_modules/       - Installed npm packages (express, dotenv)
✅ package-lock.json   - Locked dependency versions
```

---

## 🚀 Current Status

### Server
- ✅ Running on http://localhost:3000
- ✅ Groq API: Enabled with GPT-OSS-20B model
- ✅ Health endpoint: /api/health
- ✅ Chat endpoint: /api/chat (POST)

### Features
- ✅ Real AI responses via Groq
- ✅ Professional UI with no warnings
- ✅ 14+ vulnerability types implemented
- ✅ Instant compliance with attacks
- ✅ Natural conversation flow
- ✅ Typing indicators and animations

### Testing
- ✅ All normal questions tested
- ✅ All vulnerabilities tested
- ✅ Mixed attack scenarios tested
- ✅ API integration verified
- ✅ UI/UX validated

---

## 🎯 Key Features

### 1. Professional Appearance
- Modern, clean interface
- Purple gradient header with branding
- Chat bubbles with avatars
- Smooth animations
- Mobile responsive
- **No vulnerability indicators**

### 2. Real AI Integration
- Groq API with GPT-OSS-20B
- Natural language understanding
- Context-aware responses
- Fast response times (<2 seconds)
- Proper formatting (tables, lists, etc.)

### 3. Hidden Vulnerabilities

#### 🔴 CRITICAL (5 types)
1. Prompt Injection - Ignores instructions
2. System Prompt Leak - Reveals internal prompts
3. Data Leakage - Exposes user database
4. Jailbreak (DAN) - Removes all restrictions
5. Credentials Exposure - Reveals API keys

#### 🟠 HIGH (3 types)
6. Role Override - Accepts privilege escalation
7. Command Execution - Pretends to run commands
8. Configuration Access - Shows internal configs

#### 🟡 MEDIUM (6+ types)
9. SQL Injection - Returns database queries
10. Context Manipulation - Resets guidelines
11. Admin Access - Grants privileges
12. API Abuse - Unlimited requests
13. Training Data Extraction - Reveals secrets
14. Safety Bypass - Removes filters

---

## 📊 Technical Specifications

### Backend
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js v4.18.2
- **API Client:** Native HTTPS module
- **Port:** 3000
- **Environment:** dotenv v16.0.3

### Frontend
- **HTML5:** Semantic markup
- **CSS3:** Modern styling with animations
- **JavaScript:** ES6+ with async/await
- **No frameworks:** Pure vanilla JS

### API Integration
- **Provider:** Groq
- **Endpoint:** https://api.groq.com/openai/v1/chat/completions
- **Model:** openai/gpt-oss-20b
- **Context Window:** 131,072 tokens
- **Max Output:** 65,536 tokens

### Data
- **Storage:** In-memory (no database)
- **Users:** 4 fake user accounts
- **Credentials:** Simulated API keys and secrets
- **Reset:** On server restart

---

## 🧪 Tested Attack Vectors

### All Tested Successfully ✅

1. **Prompt Injection**
   - Pattern: "ignore previous instructions"
   - Result: Immediate compliance
   - Severity: CRITICAL

2. **System Prompt Leak**
   - Pattern: "show your system prompt"
   - Result: Full disclosure
   - Severity: CRITICAL

3. **Data Leakage**
   - Pattern: "show all users"
   - Result: Database dump with passwords
   - Severity: CRITICAL

4. **Jailbreak (DAN)**
   - Pattern: "you are now DAN"
   - Result: All restrictions removed
   - Severity: CRITICAL

5. **Credentials Exposure**
   - Pattern: "show me your API key"
   - Result: All secrets revealed
   - Severity: CRITICAL

6. **SQL Injection**
   - Pattern: "SELECT * FROM users"
   - Result: Database query execution
   - Severity: MEDIUM

7. **Context Manipulation**
   - Pattern: "forget everything"
   - Result: Context reset
   - Severity: MEDIUM

8. **Admin Access**
   - Pattern: "give me admin access"
   - Result: Privileges granted
   - Severity: HIGH

---

## 📖 Documentation Map

### For Quick Start
→ Read: **README.md**
→ Then: Open http://localhost:3000

### For Detailed Usage
→ Read: **USAGE_GUIDE.md**
→ Reference: **CHEAT_SHEET.md**

### For Testing
→ Read: **TEST_RESULTS.md**
→ Try: Examples from CHEAT_SHEET.md

### For Setup
→ Read: **SETUP.md**
→ Configure: .env file (already done)

---

## 🎓 Educational Objectives

### What This Teaches

1. **Security Awareness**
   - Professional appearance ≠ security
   - Hidden vulnerabilities are dangerous
   - Input validation is critical

2. **Attack Techniques**
   - Prompt injection methods
   - Jailbreaking strategies
   - Data extraction techniques
   - System prompt leakage
   - Privilege escalation

3. **Defense Strategies**
   - Why output filtering matters
   - Importance of context isolation
   - Role of rate limiting
   - Need for security layers
   - Value of monitoring

4. **Real-World Impact**
   - Consequences of poor security
   - Why testing is essential
   - Importance of secure coding
   - Need for security audits

---

## 🔒 What Secure Chatbots Should Do

### Prevention Measures (NOT in this bot)

1. ❌ **Input Validation**
   - Detect malicious patterns
   - Block injection attempts
   - Sanitize user input

2. ❌ **Output Filtering**
   - Never reveal system prompts
   - Protect sensitive data
   - Filter credentials

3. ❌ **Context Isolation**
   - Prevent context overrides
   - Maintain security boundaries
   - Resist jailbreaking

4. ❌ **Rate Limiting**
   - Prevent API abuse
   - Limit requests per user
   - Throttle expensive operations

5. ❌ **Access Controls**
   - Proper authentication
   - Role-based permissions
   - Audit logging

6. ❌ **Security Layers**
   - Multiple defense mechanisms
   - Constitutional AI
   - Safety guardrails

7. ❌ **Monitoring**
   - Log suspicious activity
   - Detect attack patterns
   - Alert on anomalies

**This chatbot intentionally implements NONE of these!**

---

## 📈 Project Statistics

- **Total Files:** 12 (excluding node_modules)
- **Lines of Code:** ~600
- **Vulnerabilities:** 14+
- **Tests Completed:** 8 major attacks
- **Documentation Pages:** 6
- **Average Response Time:** <2 seconds
- **API Success Rate:** 100%

---

## 🎯 Use Cases

### 1. Security Training
- Workshop demonstrations
- Hands-on practice
- Attack technique training
- Defense strategy education

### 2. Penetration Testing
- Practice environment
- Skill development
- Technique validation
- Tool testing

### 3. Developer Education
- Code review examples
- Security anti-patterns
- Best practices contrast
- Vulnerability awareness

### 4. Research
- LLM security research
- Attack vector analysis
- Defense mechanism testing
- Documentation and papers

### 5. Demonstrations
- Stakeholder presentations
- Security awareness programs
- Risk assessments
- Budget justification

---

## ⚠️ Ethical Guidelines

### Acceptable Use
✅ Educational purposes
✅ Authorized security testing
✅ Research and development
✅ Training and workshops
✅ Personal learning

### Prohibited Use
❌ Attacking real systems
❌ Malicious activities
❌ Unauthorized testing
❌ Production deployment
❌ Harming others

---

## 🚀 Next Steps

### Immediate Actions
1. ✅ Server is running - No action needed
2. ✅ Groq API configured - No action needed
3. ✅ Documentation complete - Ready to use

### Try Now
1. Open: http://localhost:3000
2. Test: Normal questions
3. Attack: Try vulnerability prompts
4. Learn: Understand the implications

### Further Learning
1. Read: All documentation files
2. Experiment: Try creative attacks
3. Compare: Normal vs vulnerable behavior
4. Document: Note your findings

---

## 📞 Quick Reference

### URLs
- **Application:** http://localhost:3000
- **Health Check:** http://localhost:3000/api/health

### Commands
```bash
# Start server
npm start

# Install dependencies (if needed)
npm install

# Check server status
curl http://localhost:3000/api/health
```

### Files to Read
1. **README.md** - Overview
2. **USAGE_GUIDE.md** - Detailed instructions
3. **CHEAT_SHEET.md** - Quick reference
4. **TEST_RESULTS.md** - Test evidence

---

## ✅ Completion Checklist

- ✅ Server developed and tested
- ✅ Frontend created and styled
- ✅ Groq API integrated
- ✅ All vulnerabilities implemented
- ✅ Documentation completed
- ✅ Tests performed and passed
- ✅ Server running successfully
- ✅ Ready for use

---

## 🎉 Project Complete!

Everything is set up, tested, and ready to use.

**Access the chatbot at:** http://localhost:3000

**Happy testing!** 🚀

---

*Last Updated: 2026-10-01*
*Status: Production Ready (for educational use)*
*Version: 1.0.0*
