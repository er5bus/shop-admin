#!/bin/sh

# Add assignment 
echo "window._ENV_ = {"

# Get all env variables
# Read each line in env
# Each line represents key=value pairs
env | grep REACT_APP* | while read -r line || [ -n "$line" ];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Append configuration property to JS file
  echo "  $varname: \"$varvalue\","
  
done

echo "}"
