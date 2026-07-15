#!/bin/bash

REPO="Karma47/RTFM"
INPUT_FILE="input.txt"

while IFS= read -r title; do
  [[ -z "$title" ]] && continue

  echo "-----------------------------"
  echo "Checking: $title"

  ISSUE=$(gh issue list \
    --repo "$REPO" \
    --search "$title in:title" \
    --state all \
    --json title \
    --jq ".[] | select(.title == \"$title\") | .title")

  if [[ -n "$ISSUE" ]]; then
    echo "✅ Exists"
  else
    echo "❌ Not found"
    read -p "Create this issue? (y/n): " choice

    if [[ "$choice" == "y" || "$choice" == "Y" ]]; then
      gh issue create \
        --repo "$REPO" \
        --title "$title" \
        --body "Auto-created issue: $title"

      echo "🚀 Created"
    else
      echo "⏭️ Skipped"
    fi
  fi

done < "$INPUT_FILE"
