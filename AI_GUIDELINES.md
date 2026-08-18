# AI-assisted development guidelines

AI tools can be useful for exploring ideas, drafting code, reviewing changes and explaining unfamiliar areas of the codebase. They do not replace the contributor's responsibility for the accuracy, security, accessibility and provenance of a contribution.

These guidelines apply when generative AI or AI coding assistants are used while contributing to the IC UI Kit.

## Contributor responsibility

Treat AI-generated output as an untrusted draft. Contributors are responsible for understanding every change they submit and for ensuring it meets the same standards as code written without AI assistance.

Before submitting AI-assisted work:

- review the complete diff rather than accepting generated changes blindly;
- confirm the implementation addresses the linked issue and does not introduce unrelated changes;
- run the relevant linting, formatting and test suites;
- add or update tests for changed behaviour;
- manually check accessibility and interaction behaviour where required by the contribution checklist;
- verify error handling, edge cases and browser behaviour relevant to the component.

Do not use AI-generated test results or claims as a substitute for actually running the relevant checks.

## Sensitive and non-public information

Do not provide secrets, credentials, access tokens, personal data, security-sensitive information, internal-only material or other non-public information to an AI service unless its use is explicitly authorised for that information.

When using an external AI service, use only public repository content and information you are permitted to share with that service. Follow any additional organisational policies that apply to the tool or data being used.

## Security

AI-generated code can contain insecure patterns even when it appears correct. Review AI-assisted changes for the same security concerns as any other contribution, including:

- unsafe handling of untrusted input;
- cross-site scripting and unsafe HTML rendering;
- authentication or authorisation assumptions;
- accidental exposure of secrets or sensitive data;
- insecure dependencies or unnecessary new packages;
- unsafe use of shell commands, workflows or repository permissions.

Do not use AI assistance to bypass repository protections, security controls or required review.

## Accessibility and design-system behaviour

Accessibility requirements still apply in full to AI-assisted contributions. Generated markup, ARIA attributes and keyboard behaviour must be checked against the component's intended semantics and tested with the same accessibility process described in the contribution checklist.

Do not assume generated ARIA markup is correct simply because it appears plausible. Prefer native HTML semantics where appropriate and verify changes against existing ICDS patterns.

## Copyright, licences and provenance

Do not submit generated code that you know, or reasonably suspect, reproduces third-party copyrighted material in a way that is incompatible with this repository's licence.

When AI output suggests code derived from another project, library, article or specification:

- verify the original source where possible;
- check its licence and attribution requirements;
- use the original authoritative documentation instead of relying on the AI's description;
- preserve any attribution or notices required by the source licence.

Do not ask an AI tool to imitate or reproduce code from a source whose licence is incompatible with this project.

## Attribution and pull requests

Material AI assistance should be disclosed in the pull request when it contributed substantially to the implementation, tests or documentation. A short note is sufficient, for example:

> AI assistance was used to draft parts of this change. The resulting diff was reviewed and tested by the contributor.

There is no need to disclose routine editor completion or minor spelling and formatting suggestions.

AI attribution does not replace normal attribution for third-party code or documentation. If a contribution incorporates material from another source, cite that source and comply with its licence requirements.

## Review expectations

Reviewers should evaluate AI-assisted contributions in exactly the same way as other contributions. The important questions are whether the change is understood, correct, maintainable, accessible, secure and appropriately tested.

A contributor must be able to explain and modify the submitted implementation in response to review feedback. Generated output that cannot be adequately explained should not be submitted.

## Appropriate uses

Examples of appropriate AI assistance include:

- exploring implementation approaches before coding;
- explaining existing public code;
- drafting tests that are then reviewed and executed;
- identifying potential edge cases for human verification;
- suggesting refactors that are subsequently evaluated by the contributor;
- drafting documentation that is checked against the actual component behaviour.

AI output should support engineering judgement, not substitute for it.
