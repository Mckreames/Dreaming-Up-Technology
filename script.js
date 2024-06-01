`use strict`;

async function getData() {
  const data = await fetch("");
  const result = data.json();
  return result;
}
