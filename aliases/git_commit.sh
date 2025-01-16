#!/bin/bash

# Directory containing the script and commit messages file
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# File containing commit messages
commit_file="$script_dir/commit_messages.txt"

# Check if the commit messages file exists
if [ ! -f "$commit_file" ]; then
    echo "Error: $commit_file not found."
    exit 1
fi

# Read commit messages from file into an array
mapfile -t commit_messages < "$commit_file"

# Function to display the menu
display_menu() {
    echo "Select a commit message:"
    echo "1. Custom message (one-time use)"
    echo "2. Add new message to file"
    for i in "${!commit_messages[@]}"; do
        echo "$((i+3)). ${commit_messages[i]}"
    done
}

# Display the menu
display_menu

# Get user's choice
read -p "Enter your choice (1-$((${#commit_messages[@]}+2))) or '1' for custom message: " choice

# Validate user input
if ! [[ "$choice" =~ ^[0-9]+$ ]] || [ "$choice" -lt 1 ] || [ "$choice" -gt $((${#commit_messages[@]}+2)) ]; then
    echo "Invalid choice. Exiting."
    exit 1
fi

# Handle user's choice
if [ "$choice" -eq 1 ]; then
    read -p "Enter your custom commit message: " commit_message
elif [ "$choice" -eq 2 ]; then
    read -p "Enter new commit message to add: " new_message
    echo -e "$new_message\n$(cat "$commit_file")" > "$commit_file"
    commit_message="$new_message"
    echo "New message added to the beginning of $commit_file"
    echo "Using new message for this commit."
else
    commit_message="${commit_messages[$((choice-3))]}"
fi

# Check if current directory is a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Current directory is not a git repository."
    exit 1
fi

# Perform the git commit
git add .
git commit -m "$commit_message"
