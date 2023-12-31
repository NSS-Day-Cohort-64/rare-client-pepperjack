export const createTag = (newTag) => {
  return fetch("http://localhost:8088/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newTag),
  })
};

export const getAllTags = () => {
  return fetch("http://localhost:8088/tags")
    .then(response => response.json())
};