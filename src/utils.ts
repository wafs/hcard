import React from "react";

// Provide an event's value to a set-hook function
export const takeValue = (setHook: React.Dispatch<any>) => (e: React.FormEvent) => setHook((e.target as HTMLInputElement).value);

// Join strings if they are not falsey, with a given delimiter.
export const joinStrings = (strings: (string|undefined)[], delim = ' ') => strings.filter(Boolean).join(delim);
