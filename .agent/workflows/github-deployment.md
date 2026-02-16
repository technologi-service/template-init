---
description: create, push and sync improvements to github repository
---

This workflow handles creating a GitHub repository and synchronizing improvements using a develop/main branching strategy.

### Phase 1: Setup & Initialization

1. Check if gh is installed
   Command: `command -v gh || echo "gh not found"`

2. Check authentication status
   Command: `$HOME/.local/bin/gh auth status`

3. Initialize git repository if needed
   Command: `git rev-parse --is-inside-work-tree || git init`

4. Create/Verify GitHub repository
   // turbo
   Command: `$HOME/.local/bin/gh repo create "$(basename "$PWD")" --public --source=. --remote=origin --push || git remote -v`

### Phase 2: Improvement Synchronization Flow

To be executed after any feature or fix is completed.

1. **Commit and Sync to Develop**
   // turbo
   Command: `git add . && git commit -m "feat/fix: describe the improvement" && git checkout -B develop && git push origin develop`

2. **Merge into Main and Push**
   // turbo
   Command: `git checkout main || git checkout -b main && git merge develop && git push origin main`

3. **Return to Develop**
   // turbo
   Command: `git checkout develop`
