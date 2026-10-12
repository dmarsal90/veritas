# Memory Persistence Rule

## Mandatory: Save All Context to Project Memory

**Every interaction, decision, code change, and discussion MUST be persisted to the project's memory system.**

### Implementation
- **Primary**: `opencode-mem` plugin (auto-captures via chat hooks)
- **Secondary**: `MEMORY.md` in project root (manual structured summary)
- **Tertiary**: `.opencode/rules/*.md` for persistent rules/patterns

### What to Save
1. **Code changes** - files modified, rationale, before/after
2. **Decisions** - why a approach was chosen, alternatives considered
3. **Discoveries** - issues found, workarounds, gotchas
4. **Commands run** - build, test, deploy, debug steps
5. **Architecture notes** - patterns, conventions, token systems
6. **External references** - URLs, docs, tools, versions

### When to Save
- After every significant task completion
- Before context switches
- When learning something new about the codebase
- Before ending a session

### Format
```markdown
## [Date] - [Topic/Summary]
- **Files**: `path/to/file`
- **Change**: What was done
- **Reason**: Why
- **Result**: Outcome/verification
- **Follow-up**: Any pending items
```

### Enforcement
This rule is **non-negotiable**. If memory isn't updated, the task is incomplete.
