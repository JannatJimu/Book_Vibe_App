// Get a list from localStorage by key
// Returns an array of book IDs, or [] if nothing saved yet
const getStoredBook = (key) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
};

// Add a book ID to a list in localStorage
const addToStoredDB = (key, id) => {
    const list = getStoredBook(key);

    if (list.includes(id)) {
        alert("Already exists in this list!");
        return;
    }

    list.push(id);
    localStorage.setItem(key, JSON.stringify(list));
};

// Remove a book ID from a list in localStorage
const removeFromStoredDB = (key, id) => {
    const list = getStoredBook(key);

    // Keep every ID except the one we want to remove
    const updatedList = list.filter((bookId) => bookId !== id);

    localStorage.setItem(key, JSON.stringify(updatedList));
};

export { getStoredBook, addToStoredDB, removeFromStoredDB };