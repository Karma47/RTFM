#!/bin/bash

set -e

# 🔧 CONFIG
REPO="Karma47/RTFM"

echo "📦 Target repo: $REPO"
read -p "Continue? (y/n): " confirm
[[ $confirm != "y" ]] && exit 1

# 🏷️ Ensure labels exist
ensure_label() {
  local name=$1
  local color=$2

  gh label list --repo "$REPO" | grep -q "^$name" || {
    echo "🏷️ Creating label: $name"
    gh label create "$name" --color "$color" --repo "$REPO"
  }
}

ensure_label "cissp" "1f77b4"
ensure_label "parent" "d62728"
ensure_label "child" "2ca02c"
ensure_label "subtask" "ff7f0e"

# 📦 Storage
declare -A PARENTS
declare -A CHILDREN

current_parent=""
current_child=""

# 🔑 Create issue helper
create_issue() {
  local title="$1"
  local body="$2"
  local labels="$3"

  url=$(gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --body "$body" \
    --label "$labels") || {
      echo "❌ Failed: $title"
      return 1
    }

  # Extract issue number from URL
  num=$(echo "$url" | grep -oE '[0-9]+$')

  if [[ -z "$num" ]]; then
    echo "❌ Could not extract issue number"
    return 1
  fi

  echo "$num"
}

# 📄 Process input
while IFS= read -r line; do

  [[ -z "$line" ]] && continue

  # 🔹 1.0 Parent
  if [[ $line =~ ^([0-9]+\.[0])\ (.+)$ ]]; then
    key="${BASH_REMATCH[1]}"
    title="${BASH_REMATCH[0]}"

    echo "📁 Parent: $title"

    num=$(create_issue "$title" "CISSP Domain Parent" "cissp,parent") || continue

    PARENTS[$key]=$num
    current_parent=$key
    current_child=""

  # 🔹 1.1 Child
  elif [[ $line =~ ^([0-9]+\.[0-9]+)\ (.+)$ ]]; then
    key="${BASH_REMATCH[1]}"
    title="${BASH_REMATCH[0]}"

    echo "📄 Child: $title"

    num=$(create_issue "$title" "Child of #${PARENTS[$current_parent]}" "cissp,child") || continue

    CHILDREN[$key]=$num
    current_child=$key

    # Link to parent
    if [[ -n "${PARENTS[$current_parent]}" ]]; then
      gh issue comment "${PARENTS[$current_parent]}" \
        --repo "$REPO" \
        --body "- [ ] #$num $title"
    fi

  # 🔹 1.1.1 Subtask
  elif [[ $line =~ ^([0-9]+\.[0-9]+\.[0-9]+)\ (.+)$ ]]; then
    key="${BASH_REMATCH[1]}"
    title="${BASH_REMATCH[0]}"

    echo "🔹 Subtask: $title"

    num=$(create_issue "$title" "Subtask of #${CHILDREN[$current_child]}" "cissp,subtask") || continue

    # Link to child
    if [[ -n "${CHILDREN[$current_child]}" ]]; then
      gh issue comment "${CHILDREN[$current_child]}" \
        --repo "$REPO" \
        --body "- [ ] #$num $title"
    fi

  else
    echo "⚠️ Skipping: $line"
  fi

done < input.txt

echo "✅ All issues created successfully!"
