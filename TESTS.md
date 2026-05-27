# Testing

I did not use any testing framework like Jest, Vitest, Playwright, etc for this project.

Most of the testing was done manually while building the audit engine and UI.

The main thing I focused on was whether the audit recommendations actually made sense or not.

---

# Audit Engine Testing

The audit engine was tested separately in a small TypeScript-only setup before integrating it into the main app.

I manually passed different audit inputs into the engine and checked:

- generated recommendations
- savings calculation
- downgrade logic
- alternative tool suggestions
- edge cases
- adoption ratio behavior

Some examples I tested:

- small teams using business plans
- seats greater than team size
- already optimized stacks
- low adoption tools
- mixed tool combinations
- no matching rules

A lot of the rules were refined multiple times after reviewing outputs manually.

The testing process was basically:

1. pass manual input
2. inspect result
3. decide whether recommendation actually makes sense
4. tweak rules
5. test again

---

# UI Testing

The following flows were manually tested in browser:

- audit form submission
- adding/removing tools
- audit generation
- AI summary generation
- MongoDB persistence
- redirect to audit page
- share audit functionality
- loading states
- error states
- lead capture modal
- Credex popup
- responsive layouts

---

# Error Handling Tested

I also manually checked:

- invalid audit ids
- missing audit pages
- malformed local storage data
- failed AI generation
- invalid form inputs

---

# Current Limitations

Currently there are no:

- automated tests
- integration tests
- end-to-end tests
- CI pipelines
- performance/load tests

Since the project is mainly focused on heuristic business logic and audit recommendations, manual validation was prioritized during development.

---

# Future Improvements

If the project grows further, I would probably add:

- Vitest for audit engine testing
- Playwright for browser testing
- automated regression tests for rules
- CI based test workflows
